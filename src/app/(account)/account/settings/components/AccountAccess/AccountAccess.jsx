"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState, Suspense, useEffect } from "react";
import useAuthStore from "@/stores/authStore";
import styles from "./AccountAccess.module.scss";
import usePopupStore from "@/stores/popupStore";

// Validation Schema
const schema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
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
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();
  const { user, token, isHydrated } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/me`,
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchUserDetails();
  }, [user]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/${user.id}`,
        {
          currentPassword: data.currentPassword,
          password: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setThanksPopupDisplay(true);
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage(
        "Failed to update password. Please check your current password."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.accountAccess}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label>Your Password:</label>
          <div>
            <input
              {...register("currentPassword")}
              type={showPasswords.currentPassword ? "text" : "password"}
              placeholder=""
            />
            <button
              type="button"
              onClick={() =>
                setShowPasswords((prev) => ({
                  ...prev,
                  currentPassword: !prev.currentPassword,
                }))
              }
              className={styles.eyeIcon}
            >
              {showPasswords.currentPassword ? "👁️" : "👁️‍🗨️"}
            </button>
            <p>{errors.currentPassword?.message}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>New Password:</label>
          <div>
            <input
              {...register("password")}
              type={showPasswords.password ? "text" : "password"}
              placeholder=""
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
              {showPasswords.password ? "👁️" : "👁️‍🗨️"}
            </button>
            <p>{errors.password?.message}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Confirm Password:</label>
          <div>
            <input
              {...register("confirmPassword")}
              type={showPasswords.confirmPassword ? "text" : "password"}
              placeholder=""
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
              {showPasswords.confirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "15px",
            color: message.includes("success") ? "green" : "red",
            fontSize: "14px",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default function AccountAccess() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SetPasswordForm />
    </Suspense>
  );
}
