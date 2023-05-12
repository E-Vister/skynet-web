import Image from "next/image";
import MainMenu from "@/components/main-menu/main-menu";
import React, {useEffect, useRef, useState} from "react";

const HeaderSection = () => {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const navbarAreaEl = useRef<HTMLDivElement>(null!);

    function fixNavBar() {
        if (navbarAreaEl.current) {
            setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixNavBar);

        return () => {
            window.removeEventListener('scroll', fixNavBar);
        }
    }, []);

    return (
        <header className={`header`}>
            <div ref={navbarAreaEl} className={`navbar-area ${isNavbarSticky ? 'sticky' : ''}`}>
                <div className={`container`}>
                    <div className={`row align-items-center`}>
                        <div className={`col-xl-12`}>
                            <nav className={`navbar navbar-expand-lg`}>
                                <a href="#" className={`navbar-brand`}>
                                    <Image
                                        src={`https://i.imgur.com/gO1h2LI.png`}
                                        alt={`logo`}
                                        width={180}
                                        height={90}
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}/>
                                </a>
                                <MainMenu/>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection