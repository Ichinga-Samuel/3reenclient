import React from "react";
import { CartPageStyled } from "./CartPage.styled";
import Header from "./Header/Header";
import SearchSect from "./CartSearchSect";
import CartItem from "./CartItem";
import cartData from "./cartData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: cartData,
    };
    this.changeQty = this.changeQty.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  removeFromCart(id) {
    this.setState((prevState) => {
      const updatedProducts = prevState.products.filter((product) => {
        return product.id !== id;
      });
      return { products: updatedProducts };
    });
  }

  changeQty(id, increase) {
    this.setState((prevState) => {
      const updatedProducts = prevState.products.map((product) => {
        if (product.id === id) {
          product.qty = increase
            ? Number(product.qty) + 1
            : Number(product.qty) - 1;
          if (product.qty === 0) {
            product.qty = 1;
          }
        }
        return product;
      });
      return { products: updatedProducts };
    });
  }

  socialLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com",
      img: "/img/fb-rounded-brand-white-64.png"
    },
    {
      name: "gplus",
      link: "https://www.google.com",
      img: "/img/gplus-rounded-brand-white-64.png"
    },
    {
      name: "twitter",
      link: "https://www.twitter.com",
      img: "/img/twitter-rounded-brand-white-64.png"
    }
  ]
  socialLinksBtns = this.socialLinks.map(socialLink => (
    <a href={socialLink.link} className={"social-link " + socialLink.name} >

    </a >
  ))

  render() {
    const cartItems = this.state.products.map((product) => (
      <CartItem
        id={product.id}
        name={product.name}
        itemImg={product.itemImg}
        price={product.price}
        vendor={product.vendor}
        qty={product.qty}
        changeQty={this.changeQty}
        removeFromCart={this.removeFromCart}
      />
    ));

    const totalArray = this.state.products.map((product) => {
      return Number(product.price) * Number(product.qty);
    });
    const total = totalArray.reduce((acc, item) => {
      return acc + item;
    });

    return (
      <div className="App">
        <Header />
        <CartPageStyled>
          <SearchSect />
          <section id="main">
            <section id="cart">
              <div class="products">
                <div class="items">{cartItems}</div>
                <div id="summary">
                  <span id="total">
                    <p>Total</p>
                    <p>N{total}</p>
                  </span>
                  <button id="check-out" type="submit">
                    Check Out
                  </button>
                </div>
              </div>
              <div class="company-logos">
                <span class="logo">3reen</span>
                <div class="social-links">
                  {
                    this.socialLinksBtns
                  }
                </div>
                <span>FlutterWave</span>
              </div>
            </section>
            <section id="ads">
              <a href="#">
                <img src="/mecurial.png" alt="1" />
              </a>
              <a href="#">
                <img src="/hp-omen.png" alt="#" />
              </a>
              <a href="#">
                <img src="/femora.png" alt="3" />
              </a>
            </section>
          </section>
        </CartPageStyled>
      </div>
    );
  }
}

export default Cart;
