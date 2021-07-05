import Styled from "styled-components";

export const MainContainer = Styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 274px;
  width: auto;
  height:1024px;
  cursor: auto;
`;

export const HeaderContainer = Styled.div`
display:flex;
flex-direction:column;
width:auto;
height:140px;
color:black;
.rightbox, .leftbox{
  width: 50%;
  
  // border:2px solid black;
}
.rec{
  display:flex;
  flex-direction:column;
  width:100%;
}
.pageheader{
  display:inline-flex;
  margin:auto;
  height:31px;
  position:absolute;
  top:150px;
  left:20px;

  .title{
    margin:auto;
  }
 .quantity{
   margin:auto;
   padding:8px;
 }
  h1{
    
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;

  }

  input#qty{
    width:40px;
    height:27px;
    border:0;
    text-align:center;
    background: #EEEEEE;
    
  }
}
.switchCategories{
  display:flex;
  width:auto;
  height:31px;
  position:absolute;
  top:195px;
  left:20px;
}

.searchcontainer{
  display:inline-flex;
  position:relative;
  margin-top:77px;
  width:auto;

  .searchbar{
    display:inline-flex;
    border: 1px solid rgba(0, 0, 0, 0.38);
    width:294px;
    height: 40px;
    input#searchorder{
      height: 35px;
      width: 294px;
      border:0;
      :focus {
        border: 0;
        outline: none;
        
      }
    }
    
    img{
      padding:10px;
    }
  }
  button{
    height: 40px;
    width: 187px;
    margin-left:16px;
    background:#FFAF38;
    color:#ffff;
    border:0;
  }
}

`;

export const TableContainer = Styled.div`

width:1112px;
text-transform:capitalize;
// height:726px;
margin:20px 5px 5px 5px;
color:black;
`;
export const BoxContainer = Styled.div`
display:inline-flex;
width:auto;
height:143.4px;
margin-right:5px;
margin-top:70px;

`;

export const CustomerServiceContainer = Styled.div`
display:inline-flex;
flex-direction:column;
justify-content:center;
width:694px;
height:715px;
position:absolute;
top:126px;
left:165px;
bottom:236.5px;
right:307px;
.image-container{
  text-align:center;
}
.text{
  width:694px;
  height:125px;
  text-align: center;
  h1{
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: center;
    color: #320234;
  }

  }
  .callbuttons{
    display:inline-flex;
    justify-content:center;
    width:auto;
    height:49px;

    button{
      width:auto;
      height:49px;
      margin:10px;
      color: rgba(0, 0, 0, 0.87);
      border: 1px solid rgba(0, 0, 0, 0.87);
    }
    }
    
 
`;
