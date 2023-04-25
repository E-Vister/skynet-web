import Image from "next/image";

const Hero = () => {
    return (
        <section id={`home`} className={`hero-section`}>
            <div className={`container`}>
                <div className={`row align-items-center`}>
                    <div className={`col-xl-6 col-lg-6 col-md-10`}>
                        <div className={`hero-content`}>
                            <h1>Компьютерные клубы SkyNet</h1>
                            <p>
                                 это <span>мощное железо</span> от <span>1.5 рублей</span> в
                                час, <span>93 ПК</span> на два
                                клуба, <span>4 Отдельных буткемпа</span> по <span>5 машин</span>, Мониторы в <span>Full HD</span> разрешении <span>144Hz</span> и <span>240Hz</span> и
                                многое другое. Залетай в наш киберспортивный, игровой клуб и катай в любимые игры
                            </p>
                            <a href="#" className={`main-btn btn-hover`}><strong>ЗАБРОНИРОВАТЬ МЕСТО</strong></a>
                        </div>
                    </div>
                    <div className={`col-xxl-6 col-xl-6 col-lg-6`}>
                        <div className={`hero-image text-center text-lg-end`}>
                            <Image
                                src={`https://i.imgur.com/YPNPd0Q.png`}
                                height={700}
                                width={700}
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