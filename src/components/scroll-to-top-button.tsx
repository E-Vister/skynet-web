import {useEffect, useState} from "react";

const ScrollToTopButton = () => {
    const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

    function toggleScrollTopButton() {
        setHasScrollToTopButton(
            document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleScrollTopButton);

        return () => {
            window.removeEventListener('scroll', toggleScrollTopButton);

        }
    }, [])

    return (
        <>
            {hasScrollToTopButton && (
                <a href="#" className="a">
                    <i className="b">a</i>
                </a>
            )}
        </>
    )
}

export default ScrollToTopButton