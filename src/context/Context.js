import faker from "@faker-js/faker";
import { createContext, useReducer, useContext } from "react";
import { CartReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([2, 3, 5, 6, 7]),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
