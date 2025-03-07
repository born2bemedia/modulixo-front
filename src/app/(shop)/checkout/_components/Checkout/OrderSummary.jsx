import styles from "./Checkout.module.scss";

const OrderSummary = ({ cart, totalAmount }) => {
  return (
    <div className={styles.orderSummary}>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Subtotal</th>
            <th>Discount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Items">{cart.length}</td>
            <td data-label="Subtotal">€{totalAmount}</td>
            <td data-label="Discount">None</td>
            <td data-label="Total">€{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
