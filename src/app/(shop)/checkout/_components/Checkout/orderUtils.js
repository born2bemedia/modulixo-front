export const handleCreateOrder = async (
  data,
  user,
  cart,
  totalAmount,
  clearCart,
  fetchUserByEmail,
  registerUser
) => {
  try {
    let userId = null;
    const existingUser = await fetchUserByEmail(data.email);

    if (existingUser) {
      userId = existingUser.id;
    } else {
      const password = Math.random().toString(36).slice(-8);
      const newUser = await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password,
      });

      userId = newUser.id;
    }

    await updateUserProfile(userId, data, user);

    const orderData = {
      orderNumber: `ORD_${Math.floor(Math.random() * 900000) + 100000}`,
      user: { id: userId },
      items: cart.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        price: item.attributes.price,
      })),
      total: totalAmount,
      status: "pending",
      paymentMethod: "bank_transfer",
      billingAddress: {
        street: data.street,
        address: data.address,
        city: data.city,
        state: data.state || "N/A",
        zip: data.postalCode,
        country: data.country.value,
      },
      orderNotes: data.orderNotes || "",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(orderData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create order");
    }

    const emailPayload = {
      orderNumber: orderData.orderNumber,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      items: orderData.items,
      total: orderData.total,
      paymentMethod: orderData.paymentMethod,
      billingAddress: orderData.billingAddress,
      notes: orderData.orderNotes,
    };

    const emailResponse = await fetch("/api/emails/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailResponse.ok) {
      console.error("Failed to send order email.");
    }

    return await response.json();
  } catch (error) {
    console.error("Order creation failed:", error);
    throw error;
  }
};

export const updateUserProfile = async (userId, data, user) => {
  try {
    const userUpdatePayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      street: data.street,
      address: data.address,
      city: data.city,
      country: data.country.value,
      postalCode: data.postalCode,
    };

    //console.log("Updating user with:", userUpdatePayload);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(userUpdatePayload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to update user:", errorData);
      throw new Error("User update failed");
    }

    //console.log("User profile updated successfully");
    return await response.json();
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
