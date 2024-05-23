import { toast } from "react-toastify";
import { db, auth } from "../firebase/firebase"; // Adjust the path as needed
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

export const removeItemFromWatchlist = async (e, id, setIsCoinAdded) => {
  e.preventDefault();

  if (!auth.currentUser) {
    toast.error("You need to be signed in to remove items from the watchlist!");
    return;
  }

  if (window.confirm("Are you sure you want to remove this coin?")) {
    const userDocRef = doc(db, "watchlists", auth.currentUser.uid);
    const userDocSnap = await getDoc(userDocRef);

    try {
      if (userDocSnap.exists()) {
        const watchlist = userDocSnap.data().items || [];

        if (watchlist.includes(id)) {
          await updateDoc(userDocRef, {
            items: arrayRemove(id)
          });
          setIsCoinAdded(false);
          toast.success(
            `${id.substring(0, 1).toUpperCase() + id.substring(1)} - has been removed!`
          );
          window.location.reload();
        } else {
          toast.error(
            `${id.substring(0, 1).toUpperCase() + id.substring(1)} - is not in your watchlist!`
          );
        }
      } else {
        toast.error("No watchlist found for this user.");
      }
    } catch (error) {
      console.error("Error removing from watchlist: ", error);
      toast.error("There was an error removing the item from the watchlist.");
      setIsCoinAdded(true);
    }
  } else {
    toast.error(
      `${id.substring(0, 1).toUpperCase() + id.substring(1)} - could not be removed!`
    );
    setIsCoinAdded(true);
  }
};
