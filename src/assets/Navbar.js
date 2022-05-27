import classes from "./Navbar.module.scss"

const Navbar = () => {
    return <header className={classes.header}>
        <div className= {classes.header__content}>
            <h1 className= {classes.header__content__logo}> sonata </h1>
            <nav className= {classes.header__content__nav}>
                <ul>
                    <li>
                        <a href = "/"> HOME </a>
                    </li>
                    <li>
                        <a href = "/"> MATCHES </a>
                    </li>
                    <li>
                        <a href = "/"> ABOUT US </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
};

export default Navbar;