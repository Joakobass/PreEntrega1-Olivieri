import ImgCarrito from "../img/carrito.svg";

export const CartWidget = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <img
        className="img-chango"
        src={ImgCarrito}
        alt="imagen de carrito"
        title="Carrito Vacio"
      />
      <span id="not-chango" className="contador-not oculto">
        0
      </span>
    </nav>
  );
};
