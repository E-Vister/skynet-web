import MainMenuLink from "@/components/main-menu/main-menu-link";

const MainMenu = () => {
    return (
        <>
            <div>
                <ul id={`nav`}>
                    <MainMenuLink/>
                    <MainMenuLink/>
                    <MainMenuLink/>
                    <MainMenuLink/>
                    <MainMenuLink/>
                    <MainMenuLink/>
                </ul>
            </div>
        </>
    )
}

export default MainMenu