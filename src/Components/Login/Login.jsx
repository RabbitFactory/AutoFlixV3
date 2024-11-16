// src/Components/Login/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home or another page after login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen">
            <div className=" bg-slate-200 rounded-xl p-10 lg:p-20">
               <h2 className="mb-2">Login</h2>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                className="px-3 py-2 rounded-md"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className="px-3 py-2 rounded-md"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn" type="submit">Login</button>
                {error && <p className="error">{error}</p>}
              </form>
          </div>
    </div>
  );
};

export default Login;
