export const totalItem = (cart) => {
  return cart.reduce((sum, d) => sum + d.quantity, 0);
};
export const totalPrice = (cart) => {
  return cart.reduce((total, d) => total + d.quantity * d.new_mrp, 0);
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingIndex = state.findIndex((item) => item.id === action.d.id);
      if (existingIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...state, action.d];
      }

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase":
      const IndexI = state.findIndex((p) => p.id === action.id);
      state[IndexI].quantity += 1;
      return [...state];

    case "Decrease":
      const IndexD = state.findIndex((p) => p.id === action.id);
      state[IndexD].quantity -= 1;
      return [...state];

    default:
      return state;
  }
};

export default CartReducer;
