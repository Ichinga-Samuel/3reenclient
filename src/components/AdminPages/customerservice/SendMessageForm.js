import React from 'react';
import Styled from 'styled-components';

const Styles = Styled.div`
width:95%;
.container{
    display:inline-flex;
    position:relative;
    margin-top:17px;
    width:809px;
  
    .messagebar{
      display:inline-flex;
      width: 530px;
      height: 41px;

      label{
          margin:10px;
          
      }
      input#message{
        width: 600px;
        height: 41px;
        background: #FAFAFA;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        margin:0 10px 0 10px;
        padding:20px;
        :focus {
          outline: none;
        }
      }
      
     
    }
    button{
        width: 166px;
        height: 41px;
        margin-left:24px;
        background:#FFAF38;
        color:#ffff;
        border:0;
        :focus {
            outline: none;  
          }
    }
  }
`;

function SendMessageForm(props) {
    const { isSelected } = props;
    return (
        <Styles>
            {isSelected ? (
                <form>
                    <div className="container">
                        {' '}
                        <div className="messagebar">
                            {' '}
                            <input type="file" id="upload" hidden />
                            <label htmlFor="upload">
                                {' '}
                                <img src="/icon/attachment-vector.png" alt="attachment" />
                            </label>
                            <input type="text" id="message" placeholder="type messages" />
                        </div>
                        <button>SEND MESSAGE</button>{' '}
                    </div>
                </form>
            ) : null}
        </Styles>
    );
}

export default SendMessageForm;
