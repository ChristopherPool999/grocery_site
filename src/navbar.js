const Navbar = () => {

    return ( 
        <header id="navbar-main">
            <a href="/home" id="logo"></a>
            <input type="search" id="search-bar" defaultValue={"Search Product"}/>
            <nav id="navbar-store">
                <a href="/news">news</a>
                <a href="store">store</a>
                <a href="/contacts">contacts</a>
            </nav>
            <nav className="products">
                <a href="">Meat</a>
                <a href="">Produce</a>
                <a href="">Bread</a>
                <a href="">Seafood</a>
                <a href="">Dairy</a>
                <a href="">Bakery</a>   
            </nav>
        </header>
     );
}
 
export default Navbar;