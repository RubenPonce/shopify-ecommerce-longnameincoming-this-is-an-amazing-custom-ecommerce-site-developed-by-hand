export default function Header1(props){
    return (
        <header className="header header1">

            <div className="header1__collections-nav">
                <a href="/collections">Collections</a>
                <a href="/collections">Collections</a>
                <a href="/collections">Collections</a>
            </div>
            <div className="header1__logo">
                <a href="/">Company</a>
            </div>
            <div className="header1__collections-nav">
                <a href="/collections">Collections</a>
                <a href="/collections">Collections</a>
                <a href="/"><i className="fas fa-shopping-cart"></i></a>
                <a href="/"><i className="fas fa-user"></i></a>
            </div>
            <script src="https://kit.fontawesome.com/4810a47f7e.js" crossOrigin="anonymous"></script>
        </header>
    )
}