"use client";

import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { useAuthModal } from "@/store/authModalStore";
import Modal from "./Modal";
import toast from "react-hot-toast";
import router from "next/dist/shared/lib/router/router";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();
  const { isLoginOpen, closeLogin, openRegister } = useAuthModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return toast.error("Please fill in all fields");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: email.trim(),
        password: password.trim(),
      });

      //if (error)
      if (error) {
        throw new Error(error.message || "An error occurred during login");
      }
      // Login successful, you can show a success message or redirect the user
      toast.success("Login successful! Redirecting...");

      setEmail("");
      setPassword("");
      closeLogin();

      router.refresh(); // Refresh the page to reflect the new user state
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    closeLogin();
    openRegister();
  };

  return (
    <Modal isOpen={isLoginOpen} onClose={closeLogin}>
      <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <FiLock size={22} />
          </div>

          <h2 className="text-2xl font-semibold text-text">Welcome Back</h2>

          <p className="mt-2 text-sm text-muted">
            Login to continue shopping with GroceryCart
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="login-email"
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
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="text-sm font-medium text-text"
              >
                Password
              </label>

              <button
                type="button"
                className="cursor-pointer text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <FiLock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-primary py-3 font-medium text-white transition hover:bg-primary-hover"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={handleRegister}
            className="cursor-pointer font-medium text-primary hover:underline"
          >
            Create account
          </button>
        </p>
      </div>
    </Modal>
  );
}
