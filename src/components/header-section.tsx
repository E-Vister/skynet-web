import Image from "next/image";
import MainMenu from "@/components/main-menu/main-menu";

const HeaderSection = () => {
    return (
        <header className={`header`}>
            <div className={`navbar-area`}>
                <div className={`container`}>
                    <nav>
                        <a href="#">
                            <Image
                                src={`https://i.imgur.com/DgUzIz7.png`}
                                alt={`logo`}
                                width={180}
                                height={71.25}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }} />
                        </a>
                        <MainMenu/>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection