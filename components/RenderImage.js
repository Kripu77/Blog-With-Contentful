import Image from "next/image"

const RenderImage = ({src, alt, placeholder, blurDataURL, width, height, className}) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL}
      width={width}
      height={height}
      className={className}
    />
  );
}
 
export default RenderImage