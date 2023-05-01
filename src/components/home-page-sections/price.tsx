const PriceCol = ({label, prices}) => {
    return (
        <div className={`col-sm col-md col-lg-4 col-xl`}>
            <div className={`single-price m-auto mb-5`}>
                <div className={`price-title text-center text-uppercase `}>
                    <h3>{label}</h3>
                </div>
                {
                    prices.map((price, index) => (
                            <div
                                className={`tag ${index % 2 !== 0 ? 'dark' : ''}`}
                                 key={`${price.amount}${price.value}`}
                            >
                                <h4 className={`tag-header`}>{price.amount}</h4>
                                <h4 className={`tag-price`}>{`${price.value} р`}</h4>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}


export default PriceCol