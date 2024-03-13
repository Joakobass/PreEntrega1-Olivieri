import { Logo } from "./Logo";
import { CartWidget } from "./CartWidget";
import { UL } from "./UL";

export const Navbar = () => {
  return (
    <header className="sticky-top">
      <Logo />
      <UL />
      <CartWidget />
    </header>
  );
};

// export const Titulo = () => {
//   return <h1>Tukson Growshop</h1>;
// };
