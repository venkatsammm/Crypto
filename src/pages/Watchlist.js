import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import PasswordSetup from "../Password/Password";
import PasswordInput from "../Password/PasswordInput";
import { get100Coins } from "../functions/get100Coins";

function Watchlist() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [passwordSet, setPasswordSet] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const storedPasswordSet = localStorage.getItem("passwordSet") === "true";
    const storedAuthenticated = localStorage.getItem("authenticated") === "true";

    setPasswordSet(storedPasswordSet);
    setAuthenticated(storedAuthenticated);
  }, []);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (authenticated) {
        // Fetch watchlist from local storage
        const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(storedWatchlist);
      }
    };

    fetchWatchlist();
  }, [authenticated]);

  useEffect(() => {
    if (watchlist.length > 0) {
      getData();
    } else {
      setCoins([]); // Clear the coins if watchlist is empty
    }
  }, [watchlist]);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  const handleRemoveFromWatchlist = (coinId) => {
    const updatedWatchlist = watchlist.filter(id => id !== coinId);
    setWatchlist(updatedWatchlist);
    // Update watchlist in local storage
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    toast.info("Item removed from the watchlist");
  };

  const handlePasswordSet = () => {
    setPasswordSet(true);
    localStorage.setItem("passwordSet", "true");
  };

  const handlePasswordCorrect = () => {
    setAuthenticated(true);
    localStorage.setItem("authenticated", "true");
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      {!passwordSet ? (
        <PasswordSetup onPasswordSet={handlePasswordSet} />
      ) : !authenticated ? (
        <PasswordInput onPasswordCorrect={handlePasswordCorrect} />
      ) : (
        watchlist.length > 0 ? (
          <TabsComponent coins={coins} onRemoveFromWatchlist={handleRemoveFromWatchlist} />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Sorry, No Items In The Watchlist.
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
              }}
            >
              <a href="/dashboard">
                <Button text="Dashboard" />
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Watchlist;
