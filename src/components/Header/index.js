/* eslint-disable jsx-a11y/anchor-is-valid */
import logosvg from '../../svg/logo.svg'


const Header = () => {

    const descLogo = "Essa é a logo do Blog"

    return (
    <>
        <header className='flex-space-between'>
            <div className="logo">
                <img src={logosvg} alt={descLogo}/>
            </div>
            <div className="search">
                <input type="text" className="input-search" name="search" placeholder="Pesquisar"/>
                <button className="btn-search">
                <img width="20" height="20"  src="https://img.icons8.com/ios/50/search-more.png" alt="search-more"/>
                    </button>
            </div>
            <ul className="menu">
                <li> <a href="#" className="nav-link"> Categories</a> </li>
                <li> <a href="#" className="nav-link"> About</a> </li>
                <li> <a href="#" className="nav-link"> Contact</a> </li>
            </ul>
        </header>
    </>
    )
}

export default Header;