import React from "react";
import { CartSearchStyled } from "./CartSearch.styled";

function SearchSect() {
  return (
    <CartSearchStyled>
      <form action="" method="post">
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search"
        />
        <input type="submit" id="search-btn" name="search-btn" value=" " />
      </form>
    </CartSearchStyled>
  );
}

export default SearchSect;
