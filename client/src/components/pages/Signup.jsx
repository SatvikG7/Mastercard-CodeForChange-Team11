import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSignup } from "../../hooks/useSignup";
import Upload from "../Upload";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [img, setImg] = useState({
    isLoading: false,
    error:"",
    dbData: {},
  }) //Setting the img in Upload.jsx
  
    
    const { signup, error, isLoading } = useSignup();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      if (img) {
        formData.append("profileImage", img.dbData?.filePath);// If image is Uploaded then the image path will get append
      }
    
      
    await signup(formData);
    
    if (error) {
      toast.error(error);
    } else {
      navigate("/");
    }
  };
  
  useEffect(() => {
    if (error === "") {
      toast.error("Something went wrong");
    } else {
      toast.error(error);
    }
  }, [error]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-row w-full">
        <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg login-side">
          <div className="flex items-center justify-start space-x-3">
            <span className="rounded-full w-8 h-8">
              <img className="h-full w-full" src="/mc.svg" alt="logo" />
            </span>
            <a href="/" className="font-medium text-xl">
              {"<Code for Change> Team 11"}
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex lg:hidden justify-between items-center w-full py-4">
            <div className="flex items-center justify-start space-x-3">
              <span className="rounded-full w-8 h-8">
                <img className="h-full w-full" src="/mc.svg" alt="logo" />
              </span>
              <a href="/" className="font-medium text-xl">
                {"<Code for Change> Team 11"}
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col mt-8 justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Create an account
              </h2>
              <p className="text-md md:text-xl text-blue-700">
                {"It'll take a few seconds"}
              </p>
            </div>

            <div className="flex flex-col max-w-md space-y-5">
              <form>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                      >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="flex px-3 py-2 md:px-4 md:py-3 w-full border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                      >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="flex px-3 py-2 md:px-4 md:py-3 w-full border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      onChange={(e) => {
                        setRole(e.target.selectedOptions[0].value);
                      }}
                      className="border-2 border-black rounded-lg text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required=""
                      className="flex px-3 py-2 md:px-4 md:py-3 w-full border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      />
                  </div>

                  <Upload setImg={setImg} />

                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full items-center justify-center flex-none mt-4 px-2 py-2 border-2 rounded-lg font-medium border-black bg-blue-700 text-white"
                  >
                  Submit
                </button>
              </form>

              <p className="mb-1">
                Already have an Account?{" "}
                <Link className="font-bold underline" to="/login">
                  Login{" "}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-col m-auto mb-16 text-center text-lg">
            <p className="font-bold mb-1">
              Built by{" "}
              <a href="/" className="text-blue-700">
                Team 11 for {"Mastercard <Code for Change>"}
              </a>
            </p>
            <p
              style={{
                color: "dodgerblue",
              }}
              >
              Contact us
            </p>
            <div className="flex items-center justify-center dark:text-slate-200 space-x-2 flex-wrap">
              {/* Social Media Links */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;