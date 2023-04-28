import PriceCol from "@/components/home-page-sections/price";

const Prices = () => {
    return (
        <section id={`prices`} className={`prices-section`}>
            <div className={`container text-center`}>
                <div className={`row mb-5`}>
                    <div className={`prices-header`}>
                        <h1 className={`text-center`}>Цены</h1>
                    </div>
                </div>
                <div className={`row align-items-center justify-content-center`}>
                    <PriceCol title={`Comfort`}/>
                    <PriceCol title={`VIP`}/>
                    <PriceCol title={`Bootcamp`}/>
                    <PriceCol title={`PS4`}/>
                    <PriceCol title={`PS5`}/>
                </div>
            </div>
        </section>
    )
}

export default Prices