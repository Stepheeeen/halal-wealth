"use client"
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { toast } from "react-toastify";

// Function to check if the token is expired
const isTokenExpired = (token: string | null) => {
  if (!token) return true; // Token doesn't exist
  const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
  const currentTime = Date.now() / 1000; // Current time in seconds
  return payload.exp < currentTime; // Check if token is expired
};

const DashboardContainer = ({
  children,
  PageTItle,
}: {
  children: ReactNode;
  PageTItle: string;
}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('LoginToken'); // Fetch the token from local storage

    if (token) {
      // If a token is found, check if it is expired
      if (isTokenExpired(token)) {
        toast.error("Session expired. Please log in again."); // Alerting the user
        router.push("/auth/signin"); // Redirect to the login page
      }
    } else {
      // If no token found, log out the user
      toast.error("User not logged in"); // Alerting the user
      router.push("/auth/signin"); // Redirect to the login page
    }
  }, [router]); // Dependency on router to avoid stale closures

  return (
    <div>
      <Sidebar />
      <Navbar PageTitle={PageTItle} />
      <main className="ml-[20%] mt-[5%] bg-[#F9FAFB] p-4 pb-7">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardContainer;