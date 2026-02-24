"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const MOCK_EMAIL = "oab@gmail.com";
    const MOCK_PASSWORD = "password123";

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      const user = {
        name: "Mohyminul Islam",
        email: MOCK_EMAIL,
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      };

      Cookies.set("isLoggedIn", "true", { expires: 1 });
      Cookies.set("user", JSON.stringify(user), { expires: 1 });
      router.push("/dashboard");
      console.log("router", router);
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4 py-14">
      <form
        onSubmit={handleLogin}
        className="flex w-full flex-col max-w-96 shadow-2xl p-7"
      >
        <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>

        <p className="mt-4 text-base text-gray-500/90">
          Please enter email and password to access.
        </p>

        <div className="mt-10">
          <label className="font-medium">Email</label>
          <input
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-orange-600 outline-none px-3 py-3 w-full"
            name="email"
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // fullWidth
            required
          />
        </div>

        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Please enter your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-orange-600 outline-none px-3 py-3 w-full"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-orange-600 text-white transition hover:bg-orange-700"
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
