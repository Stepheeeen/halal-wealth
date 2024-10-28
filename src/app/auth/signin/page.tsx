"use client";
import React, { useState, useEffect } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

let refreshInterval: NodeJS.Timeout | null = null;

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const handleSignIn = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/onboarding/user-login", {
        emailAddress: email,
        password,
        channel: "web",
      });

      if (res.data.status === "2000") {
        toast.success("Login successful");

        const { token, refreshToken } = res.data.data;
        localStorage.setItem("LoginToken", token);
        localStorage.setItem("RefreshToken", refreshToken);
        localStorage.setItem("userInfo", JSON.stringify(res.data.data));

        startTokenRefresh();

        router.push("/dashboard/home");
      } else {
        toast.error(`${res.data.description}`);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refreshToken = async () => {
    try {
      const storedRefreshToken = localStorage.getItem("RefreshToken");
      if (!storedRefreshToken) throw new Error("No refresh token found");

      const res = await axios.post("/api/onboarding/refresh-token", {
        refreshToken: storedRefreshToken,
      });

      if (res.data.status === "2000") {
        const newToken = res.data.data.token;
        const newRefreshToken = res.data.data.refreshToken;
        localStorage.setItem("LoginToken", newToken);
        localStorage.setItem("RefreshToken", newRefreshToken);
        return newToken;
      } else {
        toast.error("Failed to refresh token");
      }
    } catch (error) {
      toast.error("Error refreshing token");
      console.error(error);
    }
  };

  const startTokenRefresh = () => {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(async () => {
      console.log("Refreshing token...");
      await refreshToken();
    }, 15 * 60 * 1000);
  };

  useEffect(() => {
    return () => {
      if (refreshInterval) clearInterval(refreshInterval);
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
      onClick={(e: any) => handleSignIn(e, email, password)}
      altOnClick={() => router.push("/auth/method")}
      loading={loading} // Pass loading state here
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
