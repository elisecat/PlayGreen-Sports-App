import { doc, updateDoc, getDoc, arrayUnion, arrayRemove, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/configFirebase";

const auth = getAuth();

const handleLikeDislike = async (liked: boolean, sportId: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User is not authenticated");

  const userRef = doc(db, "userSports", user.uid);

  const sportData = {
    idSport: sportId,
    liked: liked
  };

  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) {
    await setDoc(userRef, {
      sports: [sportData]
    });
  } else {
    const existingSports = userDoc.data()?.sports || [];
    const updatedSports = existingSports.filter((sport: any) => sport.idSport !== sportId);
    updatedSports.push(sportData);

    await updateDoc(userRef, {
      sports: updatedSports
    });
  }
};

const getUserLikesDislikes = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User is not authenticated");

  const userRef = doc(db, "userSports", user.uid);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    return userData.sports || [];
  } else {
    return [];
  }
};

export { handleLikeDislike, getUserLikesDislikes };
