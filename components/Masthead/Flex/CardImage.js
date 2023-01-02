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
          src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1672618115/7f15458a-ba9f-46fd-8fb2-d52055afeadf_tmffjt.avif"
          placeholder="blur"
          blurDataURL={bodyImage}
          width={288}
          height={278}
          alt="body image undraw"
          className={styles.demoimage}
        ></Image>
      </div>
    </Fade>
  );
}

export default CardImage