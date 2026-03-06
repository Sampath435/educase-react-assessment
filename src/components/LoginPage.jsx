import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email && password;

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] h-[95vh] rounded-2xl shadow-lg bg-white p-6">
        <button
          onClick={() => navigate("/")}
          className="mb-4 flex items-center gap-2 text-gray-700 cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="text-2xl font-semibold mb-2">
          Signin to your <br /> PopX account
        </h1>

        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-purple-600 text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            className="w-full mt-1 p-3 border rounded-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-purple-600 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 p-3 border rounded-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          disabled={!isValid}
          onClick={handleLogin}
          className={`w-full py-3 rounded-lg font-semibold text-white
          ${isValid ? "bg-purple-600 cursor-pointer" : "bg-gray-300 cursor-not-allowed"}`}
        >
          Login
        </button>
      </div>
    </div>
  );
}
