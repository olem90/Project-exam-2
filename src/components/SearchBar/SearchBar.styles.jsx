import styled from "styled-components";

export const SearchBarStyles = styled.div`
  height: 26px;
  min-width: 600px;
  max-width: 600px;
  margin-inline: auto;
  margin-block: 30px 15px;
  position: relative;

  .faSearchIcon {
    position: absolute;
    top: 50%;
    right: 8px;
    font-size: 18px;
    transform: translateY(-20%);

    &:hover {
      cursor: pointer;
    }
  }

  .hide-search-results {
    display: none;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    font-size: 18px;
    background: #fff;
    color: #000;
    padding-left: 9px;
    padding-block: 3px;
    border: 2px solid #3d3214;
  }

  .searchResults {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 99;
    background: #ffffff;
    padding: 4px;
    border-radius: 10px;
    border: 1px solid rgb(218, 216, 216);
    width: 100%;
    max-height: 420px;
    overflow: hidden;
  }

  .searchBarLink {
    margin-left: 6px;
    z-index: 99;
    padding: 2px;
    color: #000;

    &:hover {
      font-weight: bold;
    }
  }

  @media (max-width: 900px) {
    min-width: 500px;
    max-width: 500px;
  }

  @media (max-width: 700px) {
    min-width: 400px;
    max-width: 400px;
  }

  @media (max-width: 440px) {
    min-width: 80%;
    max-width: 80%;
  }
`;
