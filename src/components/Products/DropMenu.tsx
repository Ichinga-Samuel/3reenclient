// import React, { useState } from 'react';
//import fakeData from './fakeData';

function DropMenu() {
    //{ title, fakeData = [], multiSelect }
    // const [open, setOpen] = useState(false);
    // const [selection, setSelection] = useState([]);
    // const toggle = () => setOpen(!open);

    // function handleOnCLick(item) {}

    return (
        <div className="wrap">
            {/* <div className="toggle" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
                <div className="title">
                    <p className="makeBold">{title}</p>
                </div>
                <div className="dropAction">
                    <p>{open ? 'close' : 'open'}</p>
                </div>
            </div>
            {open && (
                <ul>
                    {fakeData.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => handleOnCLick(item)}>
                                <span>{item.product_name}</span>
                                <span>Selected....</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
}

export default DropMenu;
