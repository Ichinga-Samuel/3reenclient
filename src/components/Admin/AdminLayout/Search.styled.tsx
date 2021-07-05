import styled from 'styled-components';

export const SearchContainer = styled.header`
    display: flex;
    width: 100%;
    margin:0px; padding:0px;
    background: #fff;
    height: 60px;
    align-items: center;
    z-index:1;
   

    .searchdiv {
        display: flex;
        flex-direction:row;
        position:absolute;
        right:2%;
        align-items: center;
        margin-left:10%;
        
        
        input,button{
            height: 40px;
        }input{
            width:280px;
            border: 1px solid rgba(0, 0, 0, 0.38);
            box-sizing: border-box;

        }
        button{
            width:187px;
            margin-left:20px;
            background: #FFAF38;
        }
        
    }
 
    .links {
        display: flex;
        a { 
            padding-left:2px; padding-right:15px;
            margin:0 ;
            margin-right:15px;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            transition: ease all 0.5s;
            color: rgba(0, 0, 0, 0.38);
            position: relative;
            text-decoration: none;
            &.active {
                color:  var(--background-color);
                transition: ease all 0.5s;
                &:after {
                    position: absolute;
                    content: '';
                    bottom: -5px;
                    background: var(--background-color);
                    height: 3px;
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
            &:hover {
                text-decoration: none;
                color: #000;
                &:after {
                    position: absolute;
                    content: '';
                    bottom: -5px;
                    background: var(--background-color);
                    height: 3px;
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
        }
    }
`;