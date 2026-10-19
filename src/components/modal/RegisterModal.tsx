"use client";

import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { useAuthModal } from "@/store/authModalStore";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/dist/client/components/navigation";

export default function RegisterModal() {
  const router = useRouter();
  const { isRegisterOpen, closeRegister, openLogin } = useAuthModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error("Please fill in all fields");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    setIsLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      //if (error)
      if (error) {
        throw new Error(
          error.message || "An error occurred during registration",
        );
      }
      // Registration successful, you can show a success message or redirect the user
      toast.success(
        "Registration successful! Please check your email to verify your account.",
      );
      setName("");
      setEmail("");
      setPassword("");
      closeRegister();

      router.refresh(); // Refresh the page to reflect the new user state
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    closeRegister();
    openLogin();
  };

  return (
    <Modal isOpen={isRegisterOpen} onClose={closeRegister}>
      <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <FiUser size={22} />
          </div>

          <h2 className="text-2xl font-semibold text-text">
            Create an Account
          </h2>

          <p className="mt-2 text-sm text-muted">
            Join GroceryCart and start shopping today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="register-name"
              className="mb-2 block text-sm font-medium text-text"
            >
              Full Name
            </label>

            <div className="relative">
              <FiUser
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                id="register-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="register-email"
              className="mb-2 block text-sm font-medium text-text"
            >
              Email Address
            </label>

            <div className="relative">
              <FiMail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="register-password"
              className="mb-2 block text-sm font-medium text-text"
            >
              Password
            </label>

            <div className="relative">
              <FiLock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                minLength={6}
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-primary py-3 font-medium text-white transition hover:bg-primary-hover"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <button
            type="button"
            onClick={handleLogin}
            className="cursor-pointer font-medium text-primary hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </Modal>
  );
}
