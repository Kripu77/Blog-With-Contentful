import React from 'react'
import styles from "../../../styles/Home.module.css";
import { bodyImage } from '../../../images/blurData';
import Image from 'next/image';
import Fade from "react-reveal/Fade"


const CardImage = () => {



  return (
    <Fade right duration={2500}>
      <div>
        <Image
          src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1659705828/hackathon_transparent_ibssnp.webp"
          placeholder="blur"
          blurDataURL={bodyImage}
          width={448}
          height={308}
          alt="body image undraw"
          className={styles.demoimage}
        ></Image>
      </div>
    </Fade>
  );
}

export default CardImage