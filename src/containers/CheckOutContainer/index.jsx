import CheckOutComponent from "../../components/CheckOutComponent";
import { getFirestore } from "../../firebase/client";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckOutContainer = () => {
  const { cartItems, desgloce } = useContext(CartContext);
  const crearNuevaOrden = (userInfo) => {
    const db = getFirestore();
    const newUserInfo = {
      nombre: userInfo.nombre,
      email: userInfo.email,
      telefono: userInfo.telefono,
    };
    const orden = db.collection("orders");
    const nuevaOrden = {
      comprador: newUserInfo,
      items: cartItems,
      fecha: new Date(),
      total: desgloce.precio,
    };
    orden
      .add(nuevaOrden)
      .then(({ id }) =>
        console.log("Este es el codigo de la orden de compra", id)
      );
    console.log("Esta es la Orden de Compra: ", nuevaOrden);
  };
  return <CheckOutComponent crearNuevaOrden={crearNuevaOrden} />;
};

export default CheckOutContainer;
