import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const SearchContainer = styled.section`
  max-width: 500px;
`;
const SearchTitle = styled.h1`
  font-size: 2rem;
  color: black;
`;

const SearchField = styled(TextField)`
  border: 1px solid black;
  width: 100%;
`;

export { SearchContainer, SearchTitle, SearchField };
