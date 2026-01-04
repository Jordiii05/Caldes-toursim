function Cart({ cartItems, cartCount, onRemove, onCount, onClear }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <aside className="cartSection" id="cart">
      <div className="cartHeader">
        <h2 className="sectionTitle">Cart ({cartCount})</h2>
      </div>

      {cartItems.length === 0 ? (<p className="cartEmptyText">Your cart is empty.</p>) : 
      (
        <>
          <ul className="cartList">
            {cartItems.map((item) => (
              <li key={item.id} className="cartItem">
                <div className="cartItemTop">
                  <strong className="cartItemName">{item.name} </strong>
                  <span className="cartItemPrice">{item.price} €</span>
                </div>

                <div className="cartActions">
                  <button className="cartDecreaseButton" onClick={() => onCount(item.id, -1)}>-</button>
                  <span className="cartItemCount">{item.count}</span>
                  <button className="cartIncreaseButton" onClick={() => onCount(item.id, 1)}>+</button>

                  <button className="cartRemoveButton" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <p className="cartTotal">
            <strong>Total: {total} €</strong>
          </p>

          <button className="cartClearButton" onClick={onClear}>
            Clear cart
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;