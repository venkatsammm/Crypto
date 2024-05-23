import React, { useState } from "react";
import { toast } from "react-toastify";

const PasswordInput = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = () => {
    const storedPassword = localStorage.getItem("watchlistPassword");
    if (storedPassword) {
      if (password === storedPassword) {
        toast.success("Password correct");
        localStorage.setItem("isAuthenticated", "true"); // Store authentication status
        onPasswordCorrect();
      } else {
        toast.error("Incorrect password");
      }
    } else {
      toast.error("No password set. Please set a password first.");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h2>Enter Password to View Your Watchlist</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handlePasswordSubmit}>Submit</button>
    </div>
  );
};

export default PasswordInput;
