
const MainMenuLink = ({url, label}) => {
    return (
        <li className={`nav-item`}>
            <a className={`page-scroll`} href={`/${url}`}>{label}</a>
        </li>
    )
}

export default MainMenuLink