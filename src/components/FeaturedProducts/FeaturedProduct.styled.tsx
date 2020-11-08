import styled from 'styled-components';

export const FeaturedProductStyled = styled.div`

    &:first-child{
        margin-top: 0;
    }

    .FeaturedProductsItem {
        width: 95%;
        height: 14rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        background: white;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        border-radius: .4rem;
        margin-bottom: 1.6rem;
        margin-top: 1.6rem;
    }

    .FeaturedProductsItem:last-child{
        margin-bottom: 0;
    }

    .FeaturedProductsItem .image {
        width: 20vw;
    }

    .FeaturedProductsItem .FeaturedProductsItemsDescription {
        display: flex;
        flex-direction: column;
        
    }

    .FeaturedProductsItem .FeaturedProductsItemsDescription h4 {
        font-size: 1.6rem;
        color: #878787;
        font-weight: 400;
    }

    .FeaturedProductsItem .FeaturedProductsItemsDescription img {
        width: 70%;
        margin: 1rem 0;
    }

    .FeaturedProductsItem .FeaturedProductsItemsDescription p {
        font-size: 1.6rem;
        color: #878787;
    }

    .FeaturedProductsItem .FeaturedProductsItemsDescription p span {
        color: #ff0000
        margin-right: 3.1rem;
    }




    // medium screens
    @media (min-width: 601px) and (max-width: 1024px)  {

        
        .FeaturedProductsItem {
            display: flex;
            justify-content: center;
            width: 30vw;
        }

        .FeaturedProductsItem .image {
            width: 20vw;
        }
        
        .FeaturedProductsItem .FeaturedProductsItemsDescription {
        
        }

        .FeaturedProductsItem .FeaturedProductsItemsDescription h4 {
            font-size: 1.2rem;
        }


    }



    //large screens

    @media (min-width: 1025px) {

        .FeaturedProductsItem {
            width: 30vw;
            box-shadow: none;
        }

        .FeaturedProductsItem .image {
            width: 35%;
        }

        .FeaturedProductsItem .FeaturedProductsItemsDescription {
                    
        }

        .FeaturedProductsItem .FeaturedProductsItemsDescription h4 {
            font-size: 2rem;
            font-weight: 400;
        }

        .FeaturedProductsItem .FeaturedProductsItemsDescription p {
            font-size: 2.4rem;
            color: #878787;
        }

        .FeaturedProductsItem .FeaturedProductsItemsDescription p span {
            color: #ff0000;
            margin-right: 3.1rem;
        }

    }

`;
