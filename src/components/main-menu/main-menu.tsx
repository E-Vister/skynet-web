import MainMenuLink from "@/components/main-menu/main-menu-link";

const MainMenu = () => {
    return (
        <>
            <div className={`collapse navbar-collapse sub-menu-bar`}>
                <div className={`ms-auto`}>
                    <ul id={`nav`} className={`navbar-nav ms-auto`}>
                        <MainMenuLink url={`#home`} label={`Главная`}/>
                        <MainMenuLink url={`#promotions`} label={`Акции`}/>
                        <MainMenuLink url={`#prices`} label={`Цены`}/>
                        <MainMenuLink url={`#4`} label={`Железо`}/>
                        <MainMenuLink url={`#5`} label={`Игры`}/>
                        <MainMenuLink url={`#6`} label={`Контакты`}/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainMenu