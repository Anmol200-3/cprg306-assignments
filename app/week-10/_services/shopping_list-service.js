import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Fetch items for the current user
export const getItems = async (userId) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return items;
};

// Add an item to the user's list
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};