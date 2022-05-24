import './index.css'

function Header() {
    return (
        <nav className="navbar-bg">
            <a  className="anchor-element navbar-logo" href="/">Travel</a>
            <div className="nav-elemts-container">
                <a className='anchor-element' href='/'>HOME</a>
                <a className='anchor-element' href="/">My Bookings</a>
            </div>
        </nav>
    )

}
export default Header