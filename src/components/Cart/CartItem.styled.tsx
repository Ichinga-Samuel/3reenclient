import styled from 'styled-components';
import {theme} from '../../src/assets/styles/theme'

export const CartItemStyled = styled.div`
display: flex;
padding: 10px;
height: 160px;
margin-bottom: 20px;
justify-self: center;
background: var(--bg);
box-shadow: ${theme.shadows.default};
border-radius: 4px;

.img-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    min-width: 135px;
    img {
        width: 100%;
        height: 80%;
      }
      
  }

  .item-details {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    flex: 7;
    padding-left: 10px;
    margin-right: 10px;

    .item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 50px;

        p {
            flex: 5;
            min-height: 100%;
          }
        
          .delete-item-btn {
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            flex: 3;

            button {
                outline: none;
                border: none;
                height: 20px;
                width: 15px;
                background: url("/delete.svg");
              
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100%;
              }
          }
          
        }
          .item-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: MADE TOMMY;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: var(--prim-color);

            .item-quantity-controls {
                display: flex;
              
                justify-content: space-between;
                align-items: center;
                width: 80px;
                /* Text / Regular */
              
                font-family: MADE TOMMY;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;
                display: flex;
                align-items: center;
                text-align: center;
              
                /* Primary / Main */
              
                color: var(--prim-color);

                 button {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    outline: none;
                    background: none;
                    border: none;
                    outline: none;
                    text-align: center;

                    &#decrease-btn {
                        background: url("/decrease.svg");
                        background-size: 100%;
                        background-repeat: no-repeat;
                      }
                    &#increase-btn {
                        background: url("/increase.svg");
                        background-size: 100%;
                        background-repeat: no-repeat;
                      }
                  }
                  
              }
          }
      
  }
`