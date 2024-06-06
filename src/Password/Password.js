import React, { useState } from "react";
import { toast } from "react-toastify";

const PasswordSetup = ({ onPasswordSet }) => {
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = async () => {
    if (password.trim() === "") {
      toast.error("Please enter a password");
      return;
    }

    localStorage.setItem("watchlistPassword", password); // Store the password along with its key
    toast.success("Password set successfully");
    onPasswordSet();
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px", // Adjust top margin as per your requirement
      }}
    >
      <div>
        <h2 style={{ marginBottom: "1rem" }}>
          Set a Password to Protect Your Watchlist
        </h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "1rem",
          }}
        />
        <button
          onClick={handlePasswordSubmit}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Set Password
        </button>
      </div>
    </div>
  );
};

export default PasswordSetup;
