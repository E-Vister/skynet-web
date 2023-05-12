const FooterSection = () => {
    return (
        <footer className={`footer pt-80`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-xl-3 col-lg-4 col-md-7 col-sm-10`}>
                        <div className={`footer-widget mt-10`}>
                            <p className={`desc`}>Круглосуточные компьютерные клубы в Гродно с нереальной геймерской
                                атмосферой! Подписывайся на SkyNet в социальных сетях:</p>
                            <ul className={`social-links`}>
                                <li><a href="https://vk.com/skynetgrodno"><i className={`lni lni-vk`}></i></a></li>
                                <li><a href="https://www.instagram.com/skynet_grodno/"><i
                                    className={`lni lni-instagram-filled`}></i></a></li>
                                <li><a href="https://www.facebook.com/grodnoskynet/"><i
                                    className={`lni lni-facebook-filled`}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-xl-4 col-lg-4 col-md-5 col-sm-12 offset-xl-1`}>
                        <div className={`footer-widget`}>
                            <h3>Навигация</h3>
                            <ul className={`links`}>
                                <li>
                                    <a href="/#home">Главная</a>
                                </li>
                                <li>
                                    <a href="/#promotions">Акции</a>
                                </li>
                                <li>
                                    <a href="/#prices">Цены</a>
                                </li>
                                <li>
                                    <a href="#">Железо</a>
                                </li>
                                <li>
                                    <a href="#">Игры</a>
                                </li>
                                <li>
                                    <a href="#">Контанты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-xl-4 col-lg-4 col-md-12`}>
                        <div className={`footer-widget`}>
                            <h3>Контакты</h3>
                            <ul className={`contacts`}>
                                <li>
                                    <span>
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <p>г. Гродно, Ленинский район, Ул. Горького, 89</p>
                                    </span>
                                    <p>тел. +375 (29) 996-48-28</p>
                                </li>
                                <br/>
                                <li>
                                    <span>
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <p>г. Гродно, Октябрьский район, Ул. Пестрака, 36</p>
                                    </span>
                                    <p>тел. +375 (29) 227-48-28</p>
                                </li>
                            </ul>
                            <br/>
                            <p>grodnoskynet@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection