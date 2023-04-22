import MainMenuLink from "@/components/main-menu/main-menu-link";

const MainMenu = () => {
    return (
        <>
            <div className={`collapse navbar-collapse sub-menu-bar`}>
                <div className={`ms-auto`}>
                    <ul id={`nav`} className={`navbar-nav ms-auto`}>
                        <MainMenuLink/>
                        <MainMenuLink/>
                        <MainMenuLink/>
                        <MainMenuLink/>
                        <MainMenuLink/>
                        <MainMenuLink/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainMenu