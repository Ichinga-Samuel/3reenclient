import React from 'react';
import { Drawer } from 'antd';

const VendorNotification = ({ visible, close }) => {
    // const [visible, setVisible] = useState(false);
    return (
        <div>
            <Drawer title="Notifications" width={`25%`} closable={false} onClose={close} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
};

export default VendorNotification;
