const PriceCol = ({title}) => {
    //add payload for tag

    return (
        <div className={`col-sm col-md col-lg-4 col-xl`}>
            <div className={`single-price m-auto mb-5`}>
                <div className={`price-title text-center text-uppercase `}>
                    <h3>{title}</h3>
                </div>
                <div className={`tag`}>
                    <h4 className={`tag-header`}>1 ч.</h4>
                    <h4 className={`tag-price`}>3 р</h4>
                </div>
                <div className={`tag dark`}>
                    <h4 className={`tag-header`}>3 ч.</h4>
                    <h4 className={`tag-price`}>6 р</h4>
                </div>
                <div className={`tag`}>
                    <h4 className={`tag-header`}>5 ч.</h4>
                    <h4 className={`tag-price`}>8 р</h4>
                </div>
                <div className={`tag dark`}>
                    <h4 className={`tag-header`}>День</h4>
                    <h4 className={`tag-price`}>10 р</h4>
                </div>
                <div className={`tag`}>
                    <h4 className={`tag-header`}>Ночь</h4>
                    <h4 className={`tag-price`}>13 р</h4>
                </div>
            </div>
        </div>
    )
}



export default PriceCol