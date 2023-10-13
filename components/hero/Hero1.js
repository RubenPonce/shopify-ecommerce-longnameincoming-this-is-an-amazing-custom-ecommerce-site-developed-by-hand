export default function Hero1(){
    return (
        <div className="hero hero1">
            <img  className="hero1__bg" src="https://images.pexels.com/photos/17896689/pexels-photo-17896689/free-photo-of-meu-sonho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero Image" />
            <div className="hero1__content align-right">
                <h1 className="hero1__content__title">Your Treasure Destination.</h1>
                <p className="hero1__content__subtitle">
                    We have the best selection of timeless, priceless, treasures in the world.
                </p>
                <a href="#" className="hero1__cta"><button className="hero1__content__btn">
                    Shop Now
                </button></a>
            </div>
        </div>
    )
}