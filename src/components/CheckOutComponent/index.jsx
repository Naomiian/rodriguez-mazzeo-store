import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckOutComponent = ({ crearNuevaOrden }) => {
  const { clearCarrito } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const ingresoValores = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div>
        <label>Nombre</label>
        <input
          placeholder="Ingrese Nombre aqui"
          type="text"
          name="nombre"
          onChange={ingresoValores}
        ></input>
      </div>
      <br />
      <div>
        <label>E-mail</label>
        <input
          placeholder="Ingrese su correo aqui"
          type="text"
          name="email"
          onChange={ingresoValores}
        ></input>
      </div>
      <br />
      <div>
        <label>Telefono</label>
        <input
          placeholder="Ingrese su telefono aqui"
          type="text"
          name="telefono"
          onChange={ingresoValores}
        ></input>
      </div>
      <br />
      <button
        onClick={() => {
          crearNuevaOrden(userInfo);
          clearCarrito();
        }}
      >
        {" "}
        check out{" "}
      </button>
    </div>
  );
};

export default CheckOutComponent;
