import Image from "next/image";

const FooterSection = () => {
    return (
        <footer>
            <div className={`container`}>
                <div>
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
                                    }} />
                            </a>
                        </div>
                        <p className={`desc`}>SkyNet is your content backend. Build better with SkyNet.</p>
                        <ul className={`social-links`}>
                            <li><a href="#"><i>a</i></a></li>
                            <li><a href="#"><i>b</i></a></li>
                            <li><a href="#"><i>c</i></a></li>
                            <li><a href="#"><i>d</i></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={`footer-widget`}>
                        <h3>About Us</h3>
                        <ul>
                            <li>
                                <a href="#">Label</a>
                            </li>
                            <li>
                                <a href="#">Label</a>
                            </li>
                            <li>
                                <a href="#">Label</a>
                            </li>
                            <li>
                                <a href="#">Label</a>
                            </li>
                            <li>
                                <a href="#">Label</a>
                            </li>
                            <li>
                                <a href="#">Label</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection