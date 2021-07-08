import React from 'react';
import Profile from '../PageBuilder/Profile';
import DisplayBox from '../PageBuilder/DisplayBox';
import SelectDisplay from '../PageBuilder/SelectDisplay';
import { MainContainer, HeaderContainer, BoxContainer, TableContainer } from '../PageBuilder/Styled';
import AuditTableData from './AuditTableData';

function AuditDisplay() {
    return (
        <MainContainer>
            <Profile />
            <HeaderContainer>
                <div className="rec">
                    <div className="pageheader">
                        <div className="title">
                            <h1>Audit</h1>
                        </div>
                        <div className="quantity">
                            <input type="text" id="qty" value="50" />
                        </div>
                    </div>
                    <BoxContainer>
                        <DisplayBox
                            title={'amount made'}
                            info={'N 300 000 000 000'}
                            icon={'../../img/amountmade.png'}
                        />
                        <DisplayBox title={'pending payment'} info={'N35,550.00'} icon={'../../img/pending.png'} />
                        <DisplayBox
                            title={'total cancelled'}
                            info={'N 300 000 000 000'}
                            icon={'../../img/totalcancelled.png'}
                        />
                    </BoxContainer>
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <div className="leftbox" style={{ margin: '20px' }}>
                        {' '}
                        <SelectDisplay />
                    </div>
                    <div className="rightbox">
                        <div className="searchcontainer">
                            {' '}
                            <div className="searchbar">
                                {' '}
                                <img src="../../img/search.png" alt="search" />
                                <input type="search" id="searchorder" placeholder="Search Products" />
                            </div>
                            <button>
                                <h3 style={{ color: '#fff', fontWeight: 'bolder' }}>Search</h3>
                            </button>{' '}
                        </div>
                    </div>
                </div>
                <TableContainer>
                    <AuditTableData />
                </TableContainer>
            </HeaderContainer>
        </MainContainer>
    );
}

export default AuditDisplay;
