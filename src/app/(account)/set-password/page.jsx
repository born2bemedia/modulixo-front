"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.scss";
import ButtonArrow from "@/shared/icons/ButtonArrow";
import Link from "next/link";
import Image from "next/image";
import EyeClosed from "@/shared/icons/EyeClosed";
import EyeOpened from "@/shared/icons/EyeOpened";

// Validation Schema
const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function SetPasswordForm() {
  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/reset-password`,
        {
          token,
          password: data.password,
        }
      );
      setMessage("Your password has been successfully updated!");
    } catch (error) {
      setMessage("Failed to reset password. Try again.");
    } finally {
      setLoading(false);
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h1>Set New Password</h1>
          <div className={styles.formGroup}>
            <label>New Password</label>
            <div>
              <input
                className={errors.password ? styles.error : ""}
                type={showPasswords.password ? "text" : "password"}
                {...register("password")}
                placeholder="Enter your new password"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    password: !prev.password,
                  }))
                }
                className={styles.eyeIcon}
              >
                {showPasswords.password ? <EyeClosed /> : <EyeOpened />}
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Confirm new password</label>
            <div>
              <input
                className={errors.confirmPassword ? styles.error : ""}
                type={showPasswords.confirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Enter your new password again"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword,
                  }))
                }
                className={styles.eyeIcon}
              >
                {showPasswords.password ? <EyeClosed /> : <EyeOpened />}
              </button>
            </div>
          </div>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Setting..." : "Set"}
            <ButtonArrow />
          </button>
          <p className={styles.signUpText}>
            Already have an account? <Link href="/log-in">Log in</Link>
          </p>
        </form>

        {message && (
          <p
            style={{
              marginTop: "15px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SetPasswordForm />
    </Suspense>
  );
}
