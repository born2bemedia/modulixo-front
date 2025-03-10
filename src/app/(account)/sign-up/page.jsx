"use client";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import ButtonArrow from "@/shared/icons/ButtonArrow";
import styles from "./page.module.scss";
import Image from "next/image";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import useCountryCode from "@/helpers/useCountryCode";

// Validation schema with repeat password
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  terms: yup
    .boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
});

export default function RegisterPage() {
  const { registerUser } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState("");
  const countryCode = useCountryCode();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data) => {
    try {
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
      setSuccessMessage("Registration successful! You can now log in.");
      router.push("/account");
    } catch (error) {
      setSuccessMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.col1}>
        <div className={styles.head}>
          <img src="/images/logo.svg" />
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5293 8.52991C10.603 8.46125 10.6621 8.37845 10.7031 8.28645C10.7441 8.19445 10.7662 8.09513 10.7679 7.99443C10.7697 7.89373 10.7512 7.7937 10.7135 7.70031C10.6757 7.60692 10.6196 7.52209 10.5484 7.45087C10.4772 7.37965 10.3923 7.32351 10.2989 7.28579C10.2055 7.24807 10.1055 7.22954 10.0048 7.23132C9.90412 7.23309 9.8048 7.25514 9.7128 7.29613C9.6208 7.33712 9.538 7.39622 9.46934 7.46991L5.46934 11.4699C5.32889 11.6105 5.25 11.8012 5.25 11.9999C5.25 12.1987 5.32889 12.3893 5.46934 12.5299L9.46934 16.5299C9.538 16.6036 9.6208 16.6627 9.7128 16.7037C9.8048 16.7447 9.90412 16.7667 10.0048 16.7685C10.1055 16.7703 10.2056 16.7518 10.2989 16.714C10.3923 16.6763 10.4772 16.6202 10.5484 16.5489C10.6196 16.4777 10.6757 16.3929 10.7135 16.2995C10.7512 16.2061 10.7697 16.1061 10.7679 16.0054C10.7662 15.9047 10.7441 15.8054 10.7031 15.7134C10.6621 15.6214 10.603 15.5386 10.5293 15.4699L7.80934 12.7499L17.4993 12.7499C17.6983 12.7499 17.889 12.6709 18.0297 12.5302C18.1703 12.3896 18.2493 12.1988 18.2493 11.9999C18.2493 11.801 18.1703 11.6102 18.0297 11.4696C17.889 11.3289 17.6983 11.2499 17.4993 11.2499L7.80934 11.2499L10.5293 8.52991Z"
                fill="white"
              />
            </svg>
            Back to website
          </Link>
        </div>
        <Image src="/images/account/login.png" alt="login-image" fill />
      </div>
      <div className={styles.col2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Join Modulixo Today!</h1>
          <TextBlock text="Create your account and unlock exclusive updates, new features, and special offers designed to elevate your design projects. Sign up now and be part of the Modulixo community!" />
          <div className={styles.formGroup}>
            <input {...register("firstName")} placeholder="First Name" />
            <span className={styles.error}>{errors.firstName?.message}</span>
          </div>

          <div className={styles.formGroup}>
            <input {...register("lastName")} placeholder="Last Name" />
            <span className={styles.error}>{errors.lastName?.message}</span>
          </div>

          <div className={styles.formGroup}>
            <input {...register("email")} type="email" placeholder="Email" />
            <span className={styles.error}>{errors.email?.message}</span>
          </div>

          <div className={styles.formGroup}>
            <div>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
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
                )}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            <span className={styles.error}>{errors.password?.message}</span>
          </div>

          <div className={styles.formGroup}>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
            />
            <span className={styles.error}>
              {errors.confirmPassword?.message}
            </span>
          </div>

          <div className={styles.terms}>
            <input
              className={errors.terms ? styles.error : ""}
              type="checkbox"
              {...register("terms")}
            />
            <label htmlFor="terms">
              By signing up, you confirm that you are over 18 years old and
              agree to our Terms and Conditions and Privacy Policy.
            </label>
          </div>

          <button type="submit">
            Join Modulixo <ButtonArrow />
          </button>
          <p className={styles.signUpText}>
            Already have an account? <Link href="/log-in">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
