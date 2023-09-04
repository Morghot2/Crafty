import { HeaderContainer, Logo } from "./Header.styles";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Crafty</Logo>
      <Navbar />
    </HeaderContainer>
  );
};
