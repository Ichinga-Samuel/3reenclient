import { ADMIN, APP_BASE } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { Input, Button } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomerMsgStyle } from './CustomerMsgStyled';

const CustomerMessages = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [textArea, setTextArea] = useState({
        message: '',
    });

    const token = getFromLocalStorage('admintoken');
    const onChange = (e) => {
        setTextArea({ ...textArea, [e.target.name]: e.target.value });
    };
    const { message } = textArea;
    const sendMessage = (data) => {
        const { recipient, subject } = data;
        console.log(data);
        let formData = new FormData();
        formData.append('recipient', recipient);
        formData.append('subject', subject);
        formData.append('message', message);
        try {
            const config = {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            };
            const sendMsg = async () => {
                const res = await axios.post(`${APP_BASE}${ADMIN.message}`, formData, config);
                if (res.data.status === 'success') {
                    setTimeout(() => {
                        setLoading(true);
                    }, 3000);
                    alert('Message was Sent Succesfully');
                } else {
                    setLoading(false);
                }
            };
            sendMsg();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <CustomerMsgStyle>
            <form onSubmit={handleSubmit(sendMessage)}>
                <h1 style={{ color: '#590A5B', textAlign:'center' }}>Send Messages To Customers</h1>
                <div className="form-group">
                    <label htmlFor="email">Recipient</label>
                    <Input type="email" size="large" {...register('recipient', { required: true })} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <Input type="text" size="large" {...register('subject', { required: true })} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <Input.TextArea value={message} name="message" onChange={onChange} size="large" />
                </div>
                <div className="form-group">
                    <label htmlFor="file">Send Attachment or File</label>
                    <Input type="file" size="large" {...register('file')} />
                </div>
                <br></br>
                <div className="form-group">
                    <Button type="primary" loading={loading} size="large" block htmlType="submit">
                        {loading ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                    </Button>
                </div>
            </form>
        </CustomerMsgStyle>
    );
};

export default CustomerMessages;
