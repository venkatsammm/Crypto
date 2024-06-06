import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/Tabs";
import PaginationComponent from "../components/Dashboard/Pagination";
import TopButton from "../components/Common/TopButton";
import Loader from "../components/Common/Loader";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isToastShown, setIsToastShown] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);

        // Calculate market insights and show toast if not shown already
        if (!isToastShown) {
          const topCoin = response.data[0];
          const marketCap = response.data.reduce((acc, coin) => acc + coin.market_cap, 0);
          toast.info(`The top coin is ${topCoin.name} with a market cap of $${topCoin.market_cap}.`);
          setIsToastShown(true);
        }
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  return (
    <>
      <Header />
      <ToastContainer />
      {loading ? (
       <Loader/>
      ) : (
        <>
          <Search search={search} handleChange={handleChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
      <TopButton />
    </>
  );
}

export default Dashboard;
