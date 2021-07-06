import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import { SearchContainer } from './Search.styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Styled from "styled-components";

export const HeaderContainer = Styled.div`


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

function AdminSearch(props) {
    const [visible, setVisible] = useState(false);

    //const loggedUser = JSON.parse(userData);

    const closeNotification = () => {
        setVisible(false);
    };

    const openNotification = () => setVisible(!visible);

    const router = useRouter();
    const { pathname } = router;

    return (
        <>
            <SearchContainer className="trigger">
                <div className="links">
                    <Link href="/admin/login">
                        <a className={pathname === '/admin/all-dash' ? 'active' : ''}>All</a>
                    </Link>
                    <Link href="/admin/register">
                        <a className={pathname === '/admin/categories-dash' ? 'active' : ''}>Categories</a>
                    </Link>
                </div>
                <div className="searchdiv">
                    <input type="text" className="Search" placeholder="Search products..." />
                    <button className="SearchBtn">Search</button>
                </div>
            </SearchContainer>
        </>
    );
};

export default AdminSearch;
