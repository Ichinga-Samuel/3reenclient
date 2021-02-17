import React from 'react';
import Profile from '../PageBuilder/Profile';
import DisplayBox from '../PageBuilder/DisplayBox';
import SelectDisplay from '../PageBuilder/SelectDisplay';
import AuditTable from './AuditTable';
import { MainContainer, HeaderContainer, BoxContainer, TableContainer } from '../PageBuilder/Styled';

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
                        <DisplayBox title={'amount made'} info={'N 300 000 000 000'} icon={'/icon/amountmade.png'} />
                        <DisplayBox title={'pending payment'} info={'N35,550.00'} icon={'/icon/pending.png'} />
                        <DisplayBox
                            title={'total cancelled'}
                            info={'N 300 000 000 000'}
                            icon={'/icon/totalcancelled.png'}
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
                                <img src="/icon/search.png" alt="search" />
                                <input type="search" id="searchorder" placeholder="search audits" />
                            </div>
                            <button>search</button>{' '}
                        </div>
                    </div>
                </div>
                <TableContainer>
                    <AuditTable />
                </TableContainer>
            </HeaderContainer>
        </MainContainer>
    );
}

export default AuditDisplay;
