import Image from "next/image";

export interface Promotion {
    src: string,
    alt: string,
    key: string
}

const Promotion = ({src, alt, key}: Promotion) => {
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