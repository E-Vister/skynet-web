import Image from "next/image";

const Promotion = ({src, alt, key}) => {
    return (
        <Image src={src}
               alt={alt}
               className={`d-block w-100`}
               key={key}
               width={1080}
               height={1080}
        />
    )
}

export default Promotion