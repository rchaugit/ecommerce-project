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
export const rmFromCart = async (item) => {
  const cart = firestore.collection("cart").doc(item);
  await cart.delete();
}


// Need to rectify - My add to cart is adding a new collection, and not to a collection. 

// promises is failing, catch the log of error outputs, learn how to catch fetch errors.

// Cart ideas-
// UseEffect in the Navbar container -> fetches cart data . value? (number of cart items)
// watches a new cart counter element. -> affected by add/delete cart buttons.

// How to find duplicate items?
// Need a quantity field,
// fetches cart array
// checks for .id of object the field is listed in
// and returns the value/amount of times that id is found?

// MVP - Next Steps:
//  - use url parameters for seperate product pages
//  - Support quantities
//  - Cart page need to be refreshed when item is deleted, or modified
//  - Counter component for quantities
//  - Move cart actions into a context, (ask hesham)
// Foundation - Next Steps:
//  - Make the carousel work with multiple images

