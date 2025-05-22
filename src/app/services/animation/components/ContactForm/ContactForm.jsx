"use client";
import useCountryCode from "@/helpers/useCountryCode";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import styles from "./ContactForm.module.scss";
import ButtonArrow from "@/shared/icons/ButtonArrow";
import PrivacyIcon from "@/shared/icons/PrivacyIcon";
import usePopupStore from "@/stores/popupStore";
import CustomPhoneInput from "@/shared/ui/CustomPhoneInput/CustomPhoneInput";

// Validation Schema with updated fields and messages
const schema = yup.object().shape({
  firstName: yup.string().required("This field is required!"),
  lastName: yup.string().required("This field is required!"),
  email: yup
    .string()
    .email("Invalid email address.")
    .required("This field is required!"),
  phone: yup
    .string()
    .notRequired()
    .test("phone", "Invalid phone number", (value) => {
      if (!value || value.trim() === "") return true;
      return /^[0-9]{10,15}$/.test(value);
    }),
  message: yup.string().notRequired(),
  terms: yup.bool().oneOf([true], "This field is required!"),
});

const ContactForm = ({ type = "default" }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const countryCode = useCountryCode();

  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
      type: type,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data) => {
    setLoading(true);

    /*setTimeout(() => {
      setThanksPopupDisplay(true);
      setLoading(false);
    }, 3000);*/

    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setThanksPopupDisplay(true);
        reset();
      } else {
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name Field */}
          <div className={styles.field}>
            <label htmlFor="firstName">
              First Name *{" "}
              {errors.firstName && (
                <span className={styles.error}>{errors.firstName.message}</span>
              )}
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              placeholder="Enter your first name"
              className={errors.firstName ? styles.invalid : ""}
            />
          </div>

          {/* Last Name Field */}
          <div className={styles.field}>
            <label htmlFor="lastName">
              Last Name *
              {errors.lastName && (
                <span className={styles.error}>{errors.lastName.message}</span>
              )}
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              placeholder="Enter your last name"
              className={errors.lastName ? styles.invalid : ""}
            />
          </div>

          {/* Email Field */}
          <div className={styles.field}>
            <label htmlFor="email">
              Email *{" "}
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={errors.email ? styles.invalid : ""}
            />
          </div>

          {/* Phone Number Field */}
          <div className={styles.field}>
            <label htmlFor="phone">
              Phone Number{" "}
              {errors.phone && (
                <span className={styles.error}>{errors.phone.message}</span>
              )}
            </label>
            <CustomPhoneInput
              country={countryCode}
              value={phoneValue}
              className={`${styles.phoneWrap} ${
                errors.email && styles.invalid
              }`}
              onChange={(phone) =>
                setValue("phone", phone, {
                  shouldTouch: true,
                  shouldValidate: true,
                })
              }
              inputProps={{
                name: "phone",
                id: "phone",
                placeholder: "Phone Number",
              }}
              containerClass={errors.phone ? styles.invalid : ""}
            />
          </div>

          {/* Message Field */}
          <div className={styles.field}>
            <label htmlFor="message">Custom Animation Requirements</label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Please specify..."
            ></textarea>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className={styles.terms}>
            <input
              id="terms"
              type="checkbox"
              {...register("terms")}
              className={errors.terms ? styles.error : ""}
            />
            <label htmlFor="terms">
              I agree to the Terms and Conditions and Privacy Policy.
            </label>
          </div>

          <input type="hidden" {...register("type")} value={type} />

          {/* Submit Button */}
          <button className={styles.submit} type="submit">
            <span>{loading ? "Sending..." : "Send Request"}</span>
            <ButtonArrow />
          </button>
          <div className={styles.privacy}>
            <PrivacyIcon />
            <p>
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </form>
        {successMessage && (
          <span className={styles.success}>{successMessage}</span>
        )}
      </div>
    </>
  );
};

export default ContactForm;
