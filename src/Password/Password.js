import React, { useState } from "react";
import { toast } from "react-toastify";


const PasswordSetup = ({ onPasswordSet }) => {
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = async () => {
    localStorage.setItem("watchlistPassword", password); // Store the password along with its key
    toast.success("Password set successfully");
    onPasswordSet();
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h2>Set a Password to Protect Your Watchlist</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handlePasswordSubmit}>Set Password</button>
    </div>
  );
};

export default PasswordSetup;
