import Image from "next/image";

const Hero = () => {
    return (
        <section id={`home`} className={`hero-section`}>
            <div className={`container`}>
                <div className={`row align-items-center`}>
                    <div className={`col-xl-6 col-lg-6 col-md-10`}>
                        <div className={`hero-content`}>
                            <h1>Welcome to SkyNet website!</h1>
                            <p>
                                Here is some text. Use this app as your own proof of concept to explore Butter's
                                capabilities
                                for yourself. When you're ready, host this app and invite your team to try it out all
                                well!
                            </p>

                            <a href="#">a</a>
                            <a href="#">b</a>
                        </div>
                    </div>
                    <div className={`col-xxl-6 col-xl-6 col-lg-6`}>
                        <div className={`hero-image text-center text-lg-end`}>
                            <Image
                                src={`https://svgur.com/i/sQq.svg`}
                                height={400}
                                width={400}
                                alt=""
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero