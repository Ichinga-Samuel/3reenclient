import styled from 'styled-components';
import {theme} from '../../src/assets/styles/theme'

export const CartPageStyled = styled.main`
--prim-color: ${theme.color.primaryColor};
--bg: ${theme.color.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  height: 100vh;
  margin: 5vh auto;

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily};
  }

#main{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 10vh;
  
  #cart {
    flex-shrink: 1;
    flex: 7;
    display: flex;
    flex-direction: column;
    align-items: center;

    .company-logos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      justify-self: flex-end;
      height: 40vh;
      width: 50%;
    }
  }
  .products {
    width: 80%;
    .items {
      max-width: 500px;
    }
    
#summary {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 100%;
  max-width: 500px;
}

#summary #total {
  display: flex;
  justify-content: space-between;
  align-self: start;
  width: 80%;
  margin-bottom: 20px;
}

#summary #check-out {
  padding: 8px;
  background: var(--prim-color);
  color: var(--bg);
  width: 47%;
  border-radius: 50px;
  border: none;

}

  }

  
  #ads {
    flex-shrink: 3;
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    background: yellow;
    flex: 3;

    a {
      display: flex;

      img {
        width: 100%;
      }
      
    }
    @media (max-width:${theme.breakpoints[3]}) {
    
      flex-direction: column;
    }
  }
.social-links {
  display: flex;
  margin: 20px;
  
  gap: 10px;
  .social-link{
    display: block;
    min-width: 40px;
    min-height: 35px;
    
  &.facebook{
    background: url("/img/fb-rounded-brand-white-64.png")
  }
  &.gplus {
    background: url("/img/gplus-rounded-brand-white-64.png")
  }
  &.twitter {
    background: url("/img/twitter-rounded-brand-white-64.png")
  }
  
    background-position: center;
    background-repeat: no-repeat;
  }
}
  @media (max-width:${theme.breakpoints[3]}) {
    
    flex-direction: colum;
  }
}

`