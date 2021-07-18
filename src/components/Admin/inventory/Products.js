import React, { Component, useEffect, useState } from "react";
import Product from "./Product";
import Styled from "styled-components";
import axios from 'axios';
import SpinnerLoading from "../SpinnerLoading";
const Products = () => {
  const [products, fetchProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const APP_BASE = process.env.APP_BASE_URL;
  console.log(APP_BASE)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res =  await axios.get(`${APP_BASE}/products`)
        console.log(res.data)
        fetchProducts(res.data.doc)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(true)
      }
    }
    fetchData()
  }, [])
    const Container = Styled.div`
    display:flex;
    flex-wrap:wrap;
    width:1140px;
    margin: 2px;
    `;
  return (
    <Container>
      {
        loading ? <SpinnerLoading></SpinnerLoading>
        :
        products.map((product) => {
          return (
            <Product
              eachID={product._id}
              productName={product.name}
              imgUrl={product.images}
              description={product.description}
            />
          );
        })}
      </Container>
  )
}

export default Products;

// export class Products extends Component {
//   constructor() {
//     super();
//     this.state = {
//       products: [
//         {
//           productName: "Full Product Name",
//           imgUrl: "../../img/metal.png",
//           description:
//             " Short and precise product description not going more than 2 or 3 lines",
//           key: 1,
//         },
//         {
//           productName: "Full Product Name",
//           imgUrl: "/img/microwave.png",
//           description:
//             " Short and precise product description not going more than 2 or 3 lines",
//           key: 2,
//         },
//         {
//           productName: "Full Product Name",
//           imgUrl: "/img/phone.png",
//           description:
//             " Short and precise product description not going more than 2 or 3 lines",
//           key: 3,
//         },
//         {
//           productName: "Full Product Name",
//           imgUrl: "/img/laptop.png",
//           description:
//             " Short and precise product description not going more than 2 or 3 lines",
//           key: 4,
//         },
//         {
//           productName: "Full Product Name",
//           imgUrl: "/img/toaster.png",
//           description:
//             " Short and precise product description not going more than 2 or 3 lines",
//           key: 5,
//         },
//         {
//           productName: "Full Product Name",
//           imgUrl: "/img/toaster.png",
//           description:
//             " Short and precise product description not going more than 2 or 3 lines",
//           key: 6,
//         },
//       ],
//     };
//   }
//   render() {
    // const { products } = this.state;
    // const Container = Styled.div`
    // display:flex;
    // flex-wrap:wrap;
    // width:1140px;
    // margin: 2px;

    // `;
//     return (
      // <Container>
      //   {products.map((product) => {
      //     return (
      //       <Product
      //         productName={product.productName}
      //         imgUrl={product.imgUrl}
      //         description={product.description}
      //       />
      //     );
      //   })}
      // </Container>
//     );
//   }
// }

// export default Products;
