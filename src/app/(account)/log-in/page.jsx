"use client";
import useAuthStore from "@/stores/authStore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const { login, user } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      //setSuccessMessage("Login successful!");
      router.push("/account");
    } catch (error) {
      setSuccessMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "18px",
            color: "#000",
            fontWeight: "600",
          }}
        >
          Sign in
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.email?.message}
          </p>

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.password?.message}
          </p>

          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#000")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
          >
            Login
          </button>
          <Link href="/reset-password" style={{textAlign: "center", fontSize: "14px", color: "#000"}}>Forgot password?</Link>
        </form>

        {successMessage && (
          <p
            style={{
              marginTop: "15px",
              color: "green",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </p>
        )}

        {/*user && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              User Details:
            </h3>
            <p style={{ fontSize: "16px" }}>Email: {user.email}</p>
            <p style={{ fontSize: "16px" }}>Name: {user.name}</p>
          </div>
        )*/}
      </div>
    </div>
  );
}
