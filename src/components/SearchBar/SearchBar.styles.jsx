import styled from "styled-components";

export const SearchBarStyles = styled.div`
  height: 30px;
  width: 36%;
  margin-inline: auto;
  margin-block: 15px;

    input {
        width:100%;
        height: 100%;
        border-radius: 5px;
        padding-left: 15px;
        font-size: 18px;
        background: #fff;
        color: #000;
    }

    a {
      padding: 2px;
      z-index: 99;
      color: #000;
    }

    .searchResults {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 99;
      background: #ffffff;
      padding: 9px;
      border-radius: 10px;
      border: 1px solid rgb(218, 216, 216);
      width: 100%;
    }
`







