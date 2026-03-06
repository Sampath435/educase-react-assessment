import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numbers = value.replace(/\D/g, "");
      if (numbers.length <= 10) {
        setFormData({ ...formData, phone: numbers });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRadio = (value) => {
    setFormData({ ...formData, agency: value });
  };

  const isFormValid =
    formData.fullName &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.company &&
    formData.agency;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/account");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] h-[95vh] bg-white rounded-2xl shadow-lg flex flex-col p-5">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-700 mb-2 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back
        </button>
        <h1 className="text-2xl font-bold mb-3">
          Create your <br /> PopX account
        </h1>
        <form className="flex flex-col gap-3 flex-1">
          <div>
            <label className="text-purple-600 text-xs font-medium">
              Full Name <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Enter full name"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-purple-600 text-xs font-medium">
              Mobile Number <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Enter mobile number"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-purple-600 text-xs font-medium">
              Email address <span className="text-red-600">*</span>
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-purple-600 text-xs font-medium">
              Password <span className="text-red-600">*</span>
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-purple-600 text-xs font-medium">
              Company name
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              placeholder="Enter company name"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-sm"
            />
          </div>
          <div>
            <p className="text-xs font-medium mb-1">
              Are you an Agency? <span className="text-red-600">*</span>
            </p>

            <div className="flex gap-5 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={formData.agency === "yes"}
                  onChange={() => handleRadio("yes")}
                  className="accent-purple-600"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={formData.agency === "no"}
                  onChange={() => handleRadio("no")}
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full py-2 mt-2 rounded-md font-semibold text-white
            ${
              isFormValid
                ? "bg-purple-600 hover:bg-purple-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
