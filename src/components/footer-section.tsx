import Image from "next/image";

const FooterSection = () => {
    return (
        <footer className={`footer pt-80`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-xl-6 col-lg-7 col-md-6 col-sm-8`}>
                        <div className={`footer-widget`}>
                            <div className={`logo`}>
                                <a href="#">
                                    <Image
                                        src={`https://i.imgur.com/DgUzIz7.png`}
                                        alt={`logo`}
                                        width={200}
                                        height={79.2}
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}/>
                                </a>
                            </div>
                            <p className={`desc`}>SkyNet is your content backend. Build better with SkyNet.</p>
                            <ul className={`social-links`}>
                                <li><a href="#"><i className={`lni lni-facebook-filled`}></i></a></li>
                                <li><a href="#"><i className={`lni lni-instagram-filled`}></i></a></li>
                                <li><a href="#"><i className={`lni lni-vk`}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-xl-5 col-lg-5 col-md-10 col-sm-10 offset-xl-1`}>
                        <div className={`footer-widget`}>
                            <h3>About Us</h3>
                            <ul className={`links`}>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Promotions</a>
                                </li>
                                <li>
                                    <a href="#">Prices</a>
                                </li>
                                <li>
                                    <a href="#">Hardware</a>
                                </li>
                                <li>
                                    <a href="#">Games</a>
                                </li>
                                <li>
                                    <a href="#">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection