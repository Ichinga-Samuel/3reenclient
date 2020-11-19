import styled from "styled-components";

export const CartSearchStyled = styled.form`
  padding: 40px 8%;
  width: 100%;

  form {
    display: inline-block;
    height: 35px;
    border-radius: 20px;

    overflow: hidden;
    background: #ffffff;
    /* Shadow / Tab */

    box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    border-radius: 50px;
    input {
      height: 100%;
      border-radius: 20px 0 0 20px;
      padding-left: 10px;
      border: none;
      background-color: white;
    }

    #search-btn {
      width: 50px;
      background: var(--prim-color) url("/search.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
