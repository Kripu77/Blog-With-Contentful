import React from 'react'
import styles from "../../../styles/Home.module.css";
import { bodyImage } from '../../../images/blurData';
import Image from 'next/image';
import { useInView } from 'framer-motion';

const CardImage = () => {

  //image controller
  const ref = React.useRef(null);
  const isInView = useInView(ref, {once:true});


  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
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
  );
}

export default CardImage