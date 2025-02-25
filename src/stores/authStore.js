import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isHydrated: false,

      registerUser: async (userData) => {
        try {
          //console.log("Sending registration data:", userData);
          const response = await axios.post(`${cmsUrl}/api/users`, userData, {
            withCredentials: true,
          });

          //console.log("Registration successful:", response.data);

          const loginResponse = await axios.post(
            `${cmsUrl}/api/users/login`,
            {
              email: userData.email,
              password: userData.password,
            },
            {
              withCredentials: true,
            }
          );

          set({
            user: loginResponse.data.user,
            token: loginResponse.data.token,
          });
          localStorage.setItem("token", loginResponse.data.token);

          return loginResponse.data;
        } catch (error) {
          throw new Error("Registration failed");
        }
      },

      login: async (email, password) => {
        const response = await axios.post(
          `${cmsUrl}/api/users/login`,
          { email, password },
          { withCredentials: true }
        );
        set({ user: response.data.user, token: response.data.token });
        localStorage.setItem("token", response.data.token);
      },

      logout: async () => {
        set({ user: null, token: null });
        localStorage.removeItem("token");
        //console.log("Logged out locally.");
      },
      fetchUserByEmail: async (email) => {
        try {
          const { token } = get();
          const response = await axios.get(
            `${cmsUrl}/api/users?where[email][equals]=${email}`,
            {
              headers: {
                Authorization: token ? `Bearer ${token}` : "",
              },
            }
          );

          if (response.data?.docs?.length > 0) {
            return response.data.docs[0];
          }

          return null;
        } catch (error) {
          console.error("Error fetching user by email:", error);
          throw new Error("Failed to fetch user by email");
        }
      },
      updateUser: async (updatedData) => {
        try {
          const { token, user } = get();
          if (!user) throw new Error("User not found");

          //console.log("Updating user data:", updatedData);

          const response = await axios.patch(
            `${cmsUrl}/api/users/${user.id}`,
            updatedData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          //console.log("User updated successfully:", response.data);

          set({ user: response.data.doc });
          localStorage.setItem("user", JSON.stringify(response.data.doc));

          return response.data;
        } catch (error) {
          console.error("Error updating user:", error);
          throw new Error("Failed to update user");
        }
      },
      
      _setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        state._setHydrated();
      },
    }
  )
);

export default useAuthStore;
