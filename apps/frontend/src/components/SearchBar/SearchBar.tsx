import { SearchContainer, SearchTitle, SearchField } from "./SearchBar.styles";

export const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchTitle>
        Imagine a <em>thing</em>
        <br /> and let others craft it.
      </SearchTitle>
      <SearchField placeholder="Search for a thing" />
    </SearchContainer>
  );
};
