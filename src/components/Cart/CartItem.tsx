import React from "react";
import { CartItemStyled } from "./CartItem.styled";

class CartItem extends React.Component {
  render() {
    return (
      <CartItemStyled>
        <span class="img-cover">
          <img src={this.props.itemImg} alt={this.props.name} />
        </span>
        <span class="item-details">
          <span class="item-header">
            <p>{this.props.name}</p>
            <span class="delete-item-btn">
              <button
                onClick={() => {
                  this.props.removeFromCart(this.props.id);
                }}
              ></button>
            </span>
          </span>
          <p class="item-vendor">{this.props.vendor}</p>
          <p class="item-price">N{this.props.price}</p>
          <span class="item-total">
            <p>N{Number(this.props.price) * Number(this.props.qty)}</p>

            <span class="item-quantity-controls">
              <button
                id="decrease-btn"
                onClick={() => {
                  this.props.changeQty(this.props.id, false);
                }}
              ></button>
              <p>{this.props.qty}</p>
              <button
                id="increase-btn"
                onClick={() => {
                  this.props.changeQty(this.props.id, true);
                }}
              ></button>
            </span>
          </span>
        </span>
      </CartItemStyled>
    );
  }
}

export default CartItem;
