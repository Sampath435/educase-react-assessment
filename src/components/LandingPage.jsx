import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] h-[95vh] bg-white rounded-2xl shadow-lg flex flex-col justify-between p-5">
        <div className="mt-100">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome to PopX
          </h1>

          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-purple-500 cursor-pointer"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-lg bg-purple-200 text-purple-800 font-medium cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
