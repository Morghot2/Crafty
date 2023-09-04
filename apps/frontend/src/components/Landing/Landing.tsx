import { LandingContainer } from "./Landing.styles";
import { Header } from "./Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";

export const Landing = () => {
  return (
    <LandingContainer>
      <SearchBar />
    </LandingContainer>
  );
};
