import Styled from "styled-components";

export const AdminTableContainer = Styled.div`
.table-header{
  text-align:center;
  margin-top:30px;
  color:red;
}
.table-header h1{
  color:#590A5B;
}
.spinner-div{
  transform:translate(700px, 200px);
 }
table{
  width:50%; 
  margin-left:25% !important; 
}
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.5em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #590A5B;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 22px 20px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #333;
  color:#000;
}


.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #590A5B;
}
.admin-btn{
  text-align:center;
}
.admin-btn button{
  padding:10px;
  background:#590A5B;
  color:#fff;
  font-size:1.5em;
  cursor:pointer;
}
.reset-btn{
  margin-top:20px;
  background-color:#FFAF38;
  padding:4px;
  border:none;
  color:#ffff;
}
`
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
