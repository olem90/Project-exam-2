import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutStyles } from "./Layout.styles";

export const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <Header />
      {children}
      <Footer />
    </LayoutStyles>
  );
};
