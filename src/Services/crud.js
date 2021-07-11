import firestore from '../firestore.js';

//Pulling data from firebase
export const getProductInfo = async () => {
  const catalog = firestore.collection("productinfo");
  const data = await catalog.get();
  const info = data.docs;
  return info.map((doc) => ({id: doc.id, ...doc.data() }));
};

//Add to firebase cart collection
export const addToCart = async (id) => {
  const cart = firestore.collection("cart");
  await cart.add(id);
}