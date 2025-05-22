"use client";
import React, { useEffect, useState } from "react";
import styles from "./OffersWrap.module.scss";
import fetchSpecialOffers from "@/helpers/fetchSpecialOffers";
import OfferCard from "../OfferCard/OfferCard";
const OffersWrap = () => {
  const [specialOffers, setSpecialOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      const offers = await fetchSpecialOffers({ setLoading });
      console.log(offers);
      setSpecialOffers(offers.reverse());
    };
    fetchOffers();
  }, []);

  return (
    <>
      <section className={styles.offersWrap}>
        <div className="_container">
          <div className={styles.body}>
            {specialOffers.map((offer, index) => (
              <OfferCard key={index} offer={offer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersWrap;
