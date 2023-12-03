import styled from "styled-components";
import { Link } from "react-router-dom";

export const RemoveVenueLink = styled(Link)`
  font-weight: bold;
  color: red;
  padding: 5px;

  &:hover {
    box-shadow: 0 3px 7px 2px;
    border-radius: 6px;
    color: red;
  }

`;
