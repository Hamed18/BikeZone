import { useParams } from "react-router-dom";

const Checkout = () => {
  const {id} = useParams();
  console.log(id);

  return <div>Checkout</div>;
};

export default Checkout;
