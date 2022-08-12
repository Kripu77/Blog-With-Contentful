import React from 'react'
import {motion} from "framer-motion";
import Image from 'next/image';
import { mainImage } from '../../images/blurData';
import styles from "../../styles/Home.module.css";

const MhImage = () => {
 const imageVariant = {
   hidden: {
     opacity: 0,
   },
   visible: {
     opacity: 1,
     transition: {
       duration: 0.5,
     },
   },
 };

  return (
    <motion.div variants={imageVariant} initial="hidden" animate="visible">
      <Image
        src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1651489023/imageC_cpuqkl.jpg"
        width={419}
        height={374}
        placeholder="blur"
        blurDataURL={mainImage}
        className={styles.demoimage}
        alt="main image"
      ></Image>
    </motion.div>
  );
}

export default MhImage