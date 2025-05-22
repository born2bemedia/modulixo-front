"use client";
import useCountryCode from "@/helpers/useCountryCode";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import styles from "./RequestForm.module.scss";
import ButtonArrow from "../icons/ButtonArrow";
import PrivacyIcon from "../icons/PrivacyIcon";
import usePopupStore from "@/stores/popupStore";
import CustomPhoneInput from "../ui/CustomPhoneInput/CustomPhoneInput";
import ThanksPopupRequest from "../ThanksPopupRequest/ThanksPopupRequest";

// Updated Validation Schema with new file field and conditional validation
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
  projectDescription: yup.string().notRequired(),
  estimatedBudget: yup.string().notRequired(),
  type: yup.string().notRequired(),
});

const RequestForm = ({ requestValue = "default" }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const countryCode = useCountryCode();

  const {
    thanksPopupRequestDisplay,
    setThanksPopupRequestDisplay,
    setRequestPopupDisplay,
  } = usePopupStore();

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
      projectDescription: "",
      estimatedBudget: "",
      requestValue: requestValue,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setThanksPopupRequestDisplay(true);
        reset();
      } else {
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Failed to send message. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.getQuoteForm}>
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

          {/* Estimated Budget - radio */}
          <div className={styles.field}>
            <label>Estimated Budget </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="<€500"
                  {...register("estimatedBudget")}
                />
                <span>&lt;€500</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="€500-€2,000"
                  {...register("estimatedBudget")}
                />
                <span>€500-€2,000</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="€2,000-€5,000"
                  {...register("estimatedBudget")}
                />
                <span>€2,000-€5,000</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="€5,000+"
                  {...register("estimatedBudget")}
                />
                <span>€5,000+</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Flexible"
                  {...register("estimatedBudget")}
                />
                <span>Flexible</span>
              </label>
            </div>
          </div>

          {/* Describe Your Project - textarea */}
          <div className={styles.field}>
            <label htmlFor="projectDescription">Project Details</label>
            <textarea
              id="projectDescription"
              {...register("projectDescription")}
              placeholder="Please specify..."
            />
          </div>

          <input
            type="hidden"
            {...register("requestValue")}
            value={requestValue}
          />

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
      <ThanksPopupRequest />
    </>
  );
};

export default RequestForm;
