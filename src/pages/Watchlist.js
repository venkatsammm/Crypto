import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import { db, auth } from "../firebase/firebase"; // Adjust the path as needed
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

function Watchlist() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "watchlists", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setWatchlist(data.items || []);
        }
      }
    };

    fetchWatchlist();
  }, []);

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

  const handleRemoveFromWatchlist = async (coinId) => {
    if (auth.currentUser) {
      const userDocRef = doc(db, "watchlists", auth.currentUser.uid);

      try {
        await updateDoc(userDocRef, {
          items: arrayRemove(coinId)
        });
        const updatedWatchlist = watchlist.filter(id => id !== coinId);
        setWatchlist(updatedWatchlist);
        toast.info("Item removed from the watchlist");
      } catch (error) {
        console.error("Error removing item from watchlist: ", error);
        toast.error("There was an error removing the item from the watchlist.");
      }
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      {watchlist.length > 0 ? (
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
      )}
    </div>
  );
}

export default Watchlist;
