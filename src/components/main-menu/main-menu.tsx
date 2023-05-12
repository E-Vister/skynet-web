import MainMenuLink from "@/components/main-menu/main-menu-link";
import React, {useEffect, useRef, useState} from "react";

const MainMenu = () => {
    const links = [
        {url: `#home`, label: `Главная`},
        {url: `#promotions`, label: `Акции`},
        {url: `#prices`, label: `Цены`},
        {url: `#hardware`, label: `Железо`},
        {url: `#games`, label: `Игры`},
        {url: `#contacts`, label: `Контакты`},
    ];
    const [isMenuActive, setMenuActive] = useState(false);
    const [activeMenuLink, setActiveMenuLink] = useState(links.length ? links[0].url : '');
    const menuLinksEl = useRef<HTMLDivElement>(null!);

    function highlightLinks() {
        const sections = document.querySelectorAll('.page-scroll');
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((currLink) => {
            const val = currLink?.getAttribute('href')?.slice(1);

            if (!val) return;

            if (val[0] !== '#') {
                return
            }
            const refElement = document.querySelector(val) as HTMLDivElement | null;

            if (!refElement) {
                return
            }

            const scrollTopMinus = scrollPos + 73;

            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                setActiveMenuLink(val)
            }
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', highlightLinks);

        return () => {
            window.removeEventListener('scroll', highlightLinks);
        }
    }, []);

    function inactivateMenu() {
        setMenuActive(false)
        if (menuLinksEl.current) {
            menuLinksEl.current.classList.remove('show')
        }
    }

    return (
        <>
            <button
                className={`navbar-toggler ${isMenuActive ? 'active' : ''}`}
                type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setMenuActive(!isMenuActive)}
            >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse sub-menu-bar`} ref={menuLinksEl} id="navbarSupportedContent">
                <div className={`ms-auto`}>
                    <ul id={`nav`} className={`navbar-nav ms-auto`}>
                        {links.map(link => (
                            <MainMenuLink
                                key={link.url}
                                url={link.url}
                                label={link.label}
                                active={link.url === activeMenuLink}
                                callbackOnClick={inactivateMenu}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainMenu