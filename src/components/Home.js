import { CartState } from "../context/Context";
import Filters from "./Filter";
import SingleProduct from "./SingleProduct";
import "./style.css";
const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product, i) => {
          return <SingleProduct product={product} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
