import PriceCol from "@/components/home-page-sections/price";

const Prices = () => {
    const packages = [
        {
            label: `Comfort`,
            prices: [
                {amount: `1 ч.`, value: 3},
                {amount: `3 ч.`, value: 6},
                {amount: `5 ч.`, value: 8},
                {amount: `День`, value: 10},
                {amount: `Ночь`, value: 13}
            ]
        },
        {
            label: `VIP`,
            prices: [
                {amount: `1 ч.`, value: 4},
                {amount: `3 ч.`, value: 8},
                {amount: `5 ч.`, value: 10},
                {amount: `День`, value: 12},
                {amount: `Ночь`, value: 15},
            ]
        },
        {
            label: `Bootcamp`,
            prices: [
                {amount: `1 ч.`, value: 6},
                {amount: `3 ч.`, value: 10},
                {amount: `5 ч.`, value: 12},
                {amount: `День`, value: 15},
                {amount: `Ночь`, value: 17},
            ]
        },
        {
            label: `PS4`,
            prices: [
                {amount: `1 ч.`, value: 5},
                {amount: `3 ч.`, value: 12},
                {amount: `5 ч.`, value: 15},
                {amount: `Ночь`, value: 18},
            ]
        },
        {
            label: `PS5`,
            prices: [
                {amount: `1 ч.`, value: 6},
                {amount: `3 ч.`, value: 15},
                {amount: `5 ч.`, value: 20},
                {amount: `Ночь`, value: 25},
            ]
        },
    ]

    return (
        <section id={`prices`} className={`prices-section`}>
            <div className={`container text-center`}>
                <div className={`row mb-5`}>
                    <div className={`prices-header`}>
                        <h1 className={`text-center`}>Цены</h1>
                    </div>
                </div>
                <div className={`row align-items-center justify-content-center`}>
                    {
                        packages.map(pack => (
                            <PriceCol
                                key={pack.label}
                                label={pack.label}
                                prices={pack.prices}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Prices