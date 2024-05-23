import { toast } from "react-toastify";

export const saveItemToWatchlist = (e, id, authenticated) => {
  e.preventDefault();

  // Check if the password is set in the local storage
  const storedPassword = localStorage.getItem("watchlistPassword");
  
  if (!storedPassword) {
    toast.error("Please set a password to manage the watchlist.");
    return;
  }


  let watchlist = JSON.parse(localStorage.getItem("watchlist"));

  if (watchlist) {
    if (!watchlist.includes(id)) {
      watchlist.push(id);
      toast.success(
        `${id.substring(0, 1).toUpperCase() + id.substring(1)} - added to the watchlist`
      );
    } else {
      toast.error(
        `${id.substring(0, 1).toUpperCase() + id.substring(1)} - is already added to the watchlist!`
      );
    }
  } else {
    watchlist = [id];
    toast.success(
      `${id.substring(0, 1).toUpperCase() + id.substring(1)} - added to the watchlist`
    );
  }
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};
