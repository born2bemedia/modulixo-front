"use client";
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react";
import { API_URL } from "@/helpers/constants";
import styles from "./page.module.scss";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import FileDownload from "@/shared/icons/FileDownload";
import InvoiceDownload from "@/shared/icons/InvoiceDownload";

async function getOrders(userId) {
  try {
    const data = await fetchFromAPI("/api/orders", {
      query: `where[user][equals]=${userId}`,
      cache: "no-store",
    });
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default function DashboardPage() {
  const { user, token } = useAuthStore();

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  useEffect(() => {
    if (user) {
      setLoadingOrders(true);
      const userId = user._id || user.id;
      const userEmail = user.email;
      getOrders(userId)
        .then((ordersData) => {
          setOrders(ordersData);
          setLoadingOrders(false);
        })
        .catch((error) => {
          setOrdersError("Failed to load orders");
          setLoadingOrders(false);
        });
    }
  }, [user]);

  const SkeletonRow = () => (
    <tr className={styles.skeletonRow}>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
    </tr>
  );

  return (
    <div>
      {loadingOrders ? (
        <div className={styles.orderWrap}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Item Purchased</th>
                <th>Purchase Date</th>
                <th>Total</th>
                <th>Payment Method</th>
                <th>Order Status</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <SkeletonRow key={`skeleton-${index}`} />
              ))}
            </tbody>
          </table>
        </div>
      ) : ordersError ? (
        <p style={{ color: "red" }}>{ordersError}</p>
      ) : orders.length === 0 ? (
        <p style={{ color: "#fff" }}>No orders found.</p>
      ) : (
        <div className={styles.orderWrap}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Item Purchased</th>
                <th>Purchase Date</th>
                <th>Total</th>
                <th>Payment Method</th>
                <th>Order Status</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id || order.orderNumber}>
                  <td>
                    <span>#{order.orderNumber}</span>
                  </td>
                  <td>
                    <span>
                      {order.items.map((item, index) => (
                        <div key={index}>{item.product.title}</div>
                      ))}
                    </span>
                  </td>
                  <td>
                    <span>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td>
                    <span>€{order.total.toFixed(2)}</span>
                  </td>
                  <td>
                    <span>Bank Transfer</span>
                  </td>
                  <td>
                    <span>
                      <div
                        className={
                          order.status === "completed"
                            ? styles.completed
                            : styles.pending
                        }
                      >
                        {order.status}
                      </div>
                    </span>
                  </td>
                  <td>
                    {order.invoice ? (
                      <a
                        href={`${API_URL}${order.invoice.url}`}
                        download
                        target="_blank"
                      >
                        Download <div className={styles.divider}></div>
                        <InvoiceDownload />
                      </a>
                    ) : (
                      <a href="#">No Invoice</a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
