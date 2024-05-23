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
      <div>
        <h2 style={{ marginBottom: "1rem" }}>
          Enter Password to View Your Watchlist
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
