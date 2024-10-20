"use client";
import React, { useState, useEffect } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // For redirecting after successful login

let refreshInterval: NodeJS.Timeout | null = null; // Variable to hold the refresh interval

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = () => setShow(!show);

  // Sign-in function to handle login and token storage
  const handleSignIn = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/onboarding/user-login", {
        emailAddress: email,
        password,
        channel: "web",
      });

      // Check API response status
      if (res.data.status === "2000") {
        toast.success("Login successful");

        // Save both access token and refresh token
        const { token, refreshToken } = res.data.data;
        localStorage.setItem("LoginToken", token); // Save access token
        localStorage.setItem("RefreshToken", refreshToken); // Save refresh token
        localStorage.setItem("userInfo", JSON.stringify(res.data.data)); // Save user info

        // Start the token refresh interval
        startTokenRefresh();

        // Redirect to dashboard
        router.push("/dashboard/home");
      } else {
        toast.error(`${res.data.description}`);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    }
  };

  // Refresh token function
  const refreshToken = async () => {
    try {
      const storedRefreshToken = localStorage.getItem("RefreshToken");

      if (!storedRefreshToken) {
        throw new Error("No refresh token found");
      }

      // Make a request to refresh the access token
      const res = await axios.post("/api/onboarding/refresh-token", {
        refreshToken: storedRefreshToken,
      });

      if (res.data.status === "2000") {
        // Update localStorage with the new access token
        const newToken = res.data.data.token;
        const newRefreshToken = res.data.data.refreshToken;
        localStorage.setItem("LoginToken", newToken);
        localStorage.setItem("RefreshToken", newRefreshToken);
        return newToken; // Return new token if needed
      } else {
        toast.error("Failed to refresh token");
        return null;
      }
    } catch (error) {
      toast.error("Error refreshing token");
      console.error(error);
      return null;
    }
  };

  // Start token refresh every 15 minutes
  const startTokenRefresh = () => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
    }

    refreshInterval = setInterval(async () => {
      console.log("Refreshing token...");
      await refreshToken();
    }, 15 * 60 * 1000); // 15 minutes
  };

  // Clean up interval on unmount (optional)
  useEffect(() => {
    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, []);

  return (
    <AuthContainer
      src={DefaultImage}
      title="Sign in to your account"
      text="Securely sign in to your Halal wealth account"
      terms=""
      path="/auth/forgot-password"
      link="I forgot my password"
      underline=""
      btnText="Sign In"
      altText="Don’t have an account?"
      customStyle=""
      display="hidden"
      href=""
      onClick={(e:any) => handleSignIn(e, email, password)} // Form submission calls handleSignIn
      altOnClick={() => {
        router.push("/auth/method");
      }}
    >
      <DefaultInput
        size="lg"
        value={email}
        type="email"
        name="email"
        onChange={(e: any) => setEmail(e.target.value)}
        CustomStyle="mb-4"
        label="Email address"
      />
      <IconInput
        onChange={(e: any) => setPassword(e.target.value)}
        name="password"
        value={password}
        size="lg"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        icon={""}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Password"
      />
    </AuthContainer>
  );
};

export default SignIn;