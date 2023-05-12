export interface MainMenuLink {
    url: string,
    label: string,
    active: boolean,
    callbackOnClick: () => void,
}

const MainMenuLink = ({url, label, active, callbackOnClick}: MainMenuLink) => {
    return (
        <li className={`nav-item`} onClick={callbackOnClick}>
            <a className={`page-scroll ${active ? 'active' : ''}`} href={`/${url}`}>{label}</a>
        </li>
    )
}

export default MainMenuLink