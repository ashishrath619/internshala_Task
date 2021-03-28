const initialState = {
  cartitems: {},
};
function Rootreducer(store = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      store.cartitems[action.Data[0]] = action.Data[1];
      console.log("reduxdata", store.cartitems);
      return { cartitems: store.cartitems };

    case "ADD_CART_details":
      store.cartitems[action.Data[0]] = action.Data[1];
      console.log("reduxdatacart", store.cartitems);
      return { cartitems: store.cartitems };

    case "Delete_data":
      delete store.cartitems[action.Data[0]];
      alert("delete");
      console.log("delete data", store.cartitems);

      return { cartitems: store.cartitems };
    default:
      return store;
  }
}
export default Rootreducer;
