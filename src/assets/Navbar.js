import classes from "./Navbar.module.scss"

function Navbar({onNavLinkClick}){
    return <header className={classes.header}>
        <div className= {classes.header__content}>
            <h1 className= {classes.header__content__logo} 
            onClick={() => onNavLinkClick("profile")}> sonata </h1>
            <nav className= {classes.header__content__nav}>
                <ul>
                    <li onClick={() => onNavLinkClick("profile")}>
                       HOME
                    </li>
                    <li onClick={() => onNavLinkClick("getmatched")}>
                        MATCHES
                    </li>
                    <li onClick={() => onNavLinkClick("about")}>
                        ABOUT US 
                    </li>
                </ul>
            </nav>
        </div>
    </header>
};

export default Navbar;