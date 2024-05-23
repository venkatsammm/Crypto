import { toast } from "react-toastify";
import { db, auth } from "../firebase/firebase"; // Adjust the path as needed
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

export const saveItemToWatchlist = async (e, id) => {
  e.preventDefault();
  
  if (!auth.currentUser) {
    toast.error("You need to be signed in to add items to the watchlist!");
    return;
  }

  const userDocRef = doc(db, "watchlists", auth.currentUser.uid);
  const userDocSnap = await getDoc(userDocRef);

  try {
    if (userDocSnap.exists()) {
      console.log("Document exists:", userDocSnap.data());
      const watchlist = userDocSnap.data().items || [];

      if (!watchlist.includes(id)) {
        await updateDoc(userDocRef, {
          items: arrayUnion(id)
        });
        console.log(`Item ${id} added to watchlist`);
        toast.success(
          `${id.substring(0, 1).toUpperCase() + id.substring(1)} - added to the watchlist`
        );
      } else {
        console.log(`Item ${id} already in watchlist`);
        toast.error(
          `${id.substring(0, 1).toUpperCase() + id.substring(1)} - is already added to the watchlist!`
        );
      }
    } else {
      console.log("Document does not exist. Creating new document.");
      await setDoc(userDocRef, {
        items: [id]
      });
      console.log(`Item ${id} added to new watchlist`);
      toast.success(
        `${id.substring(0, 1).toUpperCase() + id.substring(1)} - added to the watchlist`
      );
    }
  } catch (error) {
    console.error("Error adding to watchlist: ", error);
    toast.error("There was an error adding the item to the watchlist.");
  }
};
