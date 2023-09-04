import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const SearchContainer = styled.section`
  width: auto;
`;
const SearchTitle = styled.h1`
  font-size: 2rem;
  color: black;
`;

const SearchField = styled(TextField)`
  border: 1px solid black;
`;

export { SearchContainer, SearchTitle, SearchField };
