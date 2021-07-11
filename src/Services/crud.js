import firestore from '../firestore.js';

//Pulling data from firebase
export const getProductInfo = async () => {
  const catalog = firestore.collection("productinfo");
  const data = await catalog.get();
  const info = data.docs;
  return info.map((doc) => ({id: doc.id, ...doc.data() }));
};

//Pulling data from firebase
export const getCartInfo = async () => {
  const catalog = firestore.collection("cart");
  const data = await catalog.get();
  const info = data.docs;
  return info.map((doc) => ({id: doc.id, ...doc.data() }));
};

//Add to firebase cart collection
export const addToCart = async (product) => {
  const cart = firestore.collection("cart");
  await cart.add(product);
}

//delete item from cart getCartInfo, rmFrmCart
export const rmFromCart = async (product) => {
  const cart = firestore.collection("cart").doc(product);
  await cart.delete();
}
