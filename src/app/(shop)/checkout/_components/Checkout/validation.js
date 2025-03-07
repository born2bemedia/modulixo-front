import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number format"),

  city: Yup.string()
    .required("City is required")
    .min(2, "City must be at least 2 characters"),

  postalCode: Yup.string()
    .required("Postal code is required")
    .matches(/^[0-9a-zA-Z\s-]+$/, "Invalid postal code format"),

  terms: Yup.boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
  refundPolicy: Yup.boolean()
    .required("You must accept the refund policy")
    .oneOf([true], "You must accept the refund policy"),
});
