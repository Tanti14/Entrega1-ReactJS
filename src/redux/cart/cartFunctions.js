export const addItemToCart = (cartItems, product) => {
  const productInCart = cartItems.find((item) => item.id === product.id);

  if (productInCart) {
    return cartItems.map((item) =>
      item.id === productInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, id) => {
  const productInCart = cartItems.find((item) => item.id === id);

  if (productInCart.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productInCart.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== productInCart.id);
};

export const resetShippingCost = (cartItems, shippingCost) => {
  if (cartItems.length === 0 && cartItems[0].quantity === 0) {
    return 0;
  }
  return shippingCost;
};
