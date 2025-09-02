import { useState } from "react";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    try {
      fetch(import.meta.env.VITE_AUTH_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          return response.json();
        })
        .then(() => {
          localStorage.setItem(
            "accessToken",
            import.meta.env.VITE_ACCESS_TOKEN
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.error("Error:", err);
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  return {
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    loginHandler,
  };
};
