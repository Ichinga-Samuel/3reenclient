import React from "react";
import Styled from 'styled-components';
import { useRouter } from 'next/router';
const Card = Styled.div`
display:flex;
align-items: center;
flex-direction: column;
height: 390.3px;
width: 347.7px;
margin:5px;

.product-image{
height: 390.3px;
width: 347.7px;
img{
    width: 100%; 
    height: 100%;
    object-fit: contain; 
}
}
.short-des{
    width:347.7px;
    height:130.54px;
    background-color:#F3F2F0;
    color:#716B72;
    position:absolute;
    padding:17px;
    margin-top:259px;
    

    p#product-name{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
    }
    p#description{
        
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        
    }
    .buttons{
        display:flex;
        justify-content:space-between;
        width:300.7px;
        


        button{
            background: #FFAF38;
            color:white;
            border:0;
            text-transform:uppercase;
            padding:3px;
            
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: 0em;
            text-align: left;

        }
    }
}


`;

function Product(props) {
  const { productName, imgUrl, description, eachID} = props;
  const router = useRouter();
  const ProductID = () => {

  }
  return (
    <React.Fragment>
      <Card key={eachID}>
        <div className="product-image" key={eachID}>
          <img src={imgUrl.length < 0 ? 'NO IMAGES' : imgUrl} alt="product" />
        </div>
        <div className="short-des">
          <p id="product-name">{productName}</p>
          <p id="description">{description}</p>
          <span className="buttons">
            <button>Available for Purchase </button> <button onClick={ProductID}>Update</button>
          </span>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Product;
