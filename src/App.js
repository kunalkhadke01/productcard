import "./styles.css";
import Pair from "./component/paircard";
import Order from "./component/order";
export default function App() {
  const arrayofobject = [
    {
      productid: 0,
      products: 2,
      prize: 195.0,
      offer: "50%",
      check: false
    },
    {
      productid: 1,
      products: 2,
      prize: 345.0,
      offer: "40%",
      popular: true,
      check: false
    },
    {
      productid: 2,
      products: 3,
      prize: 528.0,
      offer: "60%",
      check: false
    }
  ];
  return (
    <div className="App">
      <Pair cardData={arrayofobject} />
      {/* <SelectProduct />
      <BestOffer /> */}
      <Order />
    </div>
  );
}
