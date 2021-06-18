import { APP_BASE } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import axios from 'axios';
import React, {useState} from 'react';
import { CheckoutContainerStyled } from './CheckoutContainer.styled';
import CheckoutFooter from './CheckoutFooter';
import data from './data';
import {useRouter} from 'next/router';

export default function CheckoutContainer() {
    const route = useRouter();
    const [checkoutFields, setCheckoutFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        city: ''
    });
    const [acceptCheckAge, setAcceptCheckAge] = useState(false);
    const [acceptSaveAddress, setAcceptSaveAddress] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    // func to handle change on input fields
    const handleChange = (evt) => {
        setCheckoutFields({
            ...checkoutFields,
            [evt.target.name]: evt.target.value 
        })
    };

    const handleSubmit = async (evt) => {

        evt.preventDefault();
        setLoading(true)

        const {firstName, lastName, email} = checkoutFields;

        if(firstName == ""){
            setErrMsg("First name is required");
            setLoading(false);
            return;
        }

        if(lastName == ""){
            setErrMsg("Last name is required");
            setLoading(false);
            return;
        }

        // confirm email validity
        const validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email == "" || !email.match(validate)){
            setErrMsg("please enter a valid email");
            setLoading(false);
            return;
        }

        // check if age is checked
        if(!acceptCheckAge) {
            setErrMsg('Must be above 18 to use our service');
            setLoading(false);
            return;
        }

        // post form data
        const token = getFromLocalStorage('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            // endpoint to post checkout details is required
            const { data } = await axios.post(`${APP_BASE}/`, { checkoutFields }, config);
            if(data.status == "success") {
                if(evt.target.value === "Continue Shopping"){
                    route.push(`/`);
                }
                if(evt.target.value === "Continue to Payment"){
                    route.push(`/payment`);
                }
            }
        } catch(err) {
            console.log(`Checkout Error: ${err}`);
            setErrMsg('Service timeout, try again later');
            setLoading(false);
        }

        setLoading(false);
        // setErrMsg('');
    }

    return (
        <CheckoutContainerStyled>
            <div className="container">
                <h2>Checkout</h2>
                <div className="checkoutWrapper">
                    <form className="checkoutForm" onSubmit={handleSubmit}>
                        <div className="input-name">
                            <input type="text" placeholder="* First Name" className="name" name="firstName" onChange={handleChange} required />

                            <input type="text" placeholder="* Last Name" className="name last" name="lastName" onChange={handleChange} required />
                        </div>

                        <div className="input-name">
                            <input type="email" placeholder="* Email Address" className="name" name="email" onChange={handleChange} required />
                        </div>

                        <div className="input-name">
                            <label htmlFor="lock" className="lock">
                                +234
                            </label>
                            <input type="text" placeholder="7012345678" className="text-name p" name="phone" onChange={handleChange} />
                        </div>

                        <div className="input-name">
                            <textarea
                                type="text"
                                placeholder="Address    | Street name apartment, suite, floor"
                                className="textarea"
                                name="address"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-name">
                            <select className="state" name="state" onChange={handleChange}>
                                <option>State / Region</option>
                                <option>Kogi</option>
                            </select>
                        </div>

                        <div className="input-name">
                            <select className="city" name="city" onChange={handleChange}>
                                <option>City</option>
                                <option>Abuja</option>
                                <option>Lagos</option>
                                <option>Ibadan</option>
                            </select>
                        </div>

                        <div className="arrow"></div>

                        <div className="input-name">
                            <input type="checkbox" id="cb1" className="chack-button" defaultChecked={acceptCheckAge} onClick={() => {setAcceptCheckAge(!acceptCheckAge)}} />
                            <label htmlFor="cb1" className="chack">
                                I agree I am over 18 years old
                            </label>
                        </div>

                        <div className="input-name">
                            <input type="checkbox" id="cb2" className="chack-button" defaultChecked={acceptSaveAddress} onClick={() => {setAcceptSaveAddress(!acceptSaveAddress)}} />
                            <label htmlFor="cb2" className="chack">
                                Save the Address
                            </label>
                        </div>
                        {errMsg}
                        {loading && <p>Processing...</p>}
                        <div className="submitButton">
                            <input type="submit" className="continueShipping" value="Continue Shopping" />
                            <input type="submit" className="continuePayment" value="Continue to Payment" />
                        </div>
                    </form>

                    <div className="checkoutProduct">
                        <div className="Products">
                            {data.products.map((product) => (
                                <div key={product.id} className="product">
                                    <div className="productDetail">
                                        <img src={product.image} className="productImage" alt="product" />
                                        <h4>{product.name}</h4>
                                    </div>

                                    <div className="price">&#8358; {product.price}</div>
                                </div>
                            ))}
                        </div>

                        <div className="shipping">
                            <div className="shippingFee">
                                <h4>Shipping Fee</h4>
                                <p> &#8358; 20.00</p>
                            </div>

                            <div className="shippingFee">
                                <h4>Sub Total:</h4>
                                <p> &#8358; 320.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CheckoutFooter />
        </CheckoutContainerStyled>
    );
}
