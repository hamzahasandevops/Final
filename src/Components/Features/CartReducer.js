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

    case "ADD_FORM":
      return [...state.filter((p) => p.id === action.id), action.d];

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase": {
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              new_mrp: item.new_mrp, // Make sure this reflects updated pricing if needed
            }
          : item
      );
    }
    case "Decrease": {
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              quantity: item.quantity - 1,
              new_mrp: item.new_mrp, // Make sure this reflects updated pricing if needed
            }
          : item
      );
    }

    case "TOGGLE_CHECK":
      return {
        ...state,
        checkedItems: {
          ...state.checkedItems,
          [action.id]: state.checkedItems[action.id] ? undefined : action.price,
        },
      };
    case "UpdatePrice": {
      return state.map((item) =>
        item.id === action.id ? { ...item, new_mrp: action.price } : item
      );
    }

    default:
      return state;
  }
};

export default CartReducer;
