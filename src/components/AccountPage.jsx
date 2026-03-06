import { useEffect, useState } from "react";
import userLogo from "../assets/userLogo.jpg";

export default function AccountPage() {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    phone: "9876543210",
    email: "marry@gmail.com",
    password: "123456",
    company: "ABC Ltd",
    agency: "yes",
  });
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      () => {
        setUser(JSON.parse(storedUser));
      };
    }
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] h-[95vh] bg-white rounded-2xl shadow-lg">
        <div className="p-5 border-b">
          <h2 className="text-3xl font-semibold">Account Settings</h2>
        </div>

        <div className="p-5 flex gap-4 items-center">
          <div className="w-16 h-16 rounded-full border border-black">
            <img src={userLogo} className="w-16 h-16 rounded-full" />
          </div>

          <div>
            <h3 className="font-semibold">{user.fullName}</h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
        <div className="px-5 pb-5 text-gray-600 text-sm border-b border-dashed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
    </div>
  );
}
