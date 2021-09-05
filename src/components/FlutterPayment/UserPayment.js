import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { PUBLIC_KEY, TEST_KEY } from '@/utils/ApiList';
import { getFromLocalStorage } from "@/utils/browserStorage";
import router from "next/router";
export default function UserPayment({cartTotal}) {
  const userDetails = getFromLocalStorage('userdetails');
  const details = JSON.parse(userDetails)
  const {fullName, email} = details
  const config = {
    public_key: PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: cartTotal,
    currency: "NGN",  
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      phonenumber: "07064586146",
      name: fullName,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              alert('Your Payment Was Succesful')
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>
        Payment with Flutterwave
      </button>
    </div>
  );
}
