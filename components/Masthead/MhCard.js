import React from "react";
import styles from "../../styles/Home.module.css";
import CardImage from "./Flex/CardImage";
import InfoCard from "./Flex/InfoCard";

const MhCard = () => {
  return (
    <div className={styles.grid}>
      <InfoCard />
      <CardImage/>
    </div>
  );
};

export default MhCard;
