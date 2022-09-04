import React from 'react'
import Image from 'next/image';
import { mainImage } from '../../images/blurData';
import styles from "../../styles/Home.module.css";
import Fade from "react-reveal/Fade"

const MhImage = () => {
 
  return (
    <Fade>

 
    <div>
      <Image
        src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1651489023/imageC_cpuqkl.jpg"
        width={419}
        height={374}
        placeholder="blur"
        blurDataURL={mainImage}
        className={styles.demoimage}
        alt="main image"
      ></Image>
    </div>
    
</Fade>
  );
}

export default MhImage