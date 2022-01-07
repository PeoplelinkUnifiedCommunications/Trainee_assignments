import './index.css'

const Header = props => {
  const {changeInput} = props

  const onChangeInput = event => {
    changeInput(event.target.value)
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="search-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search"
          />
          <input
            type="search"
            className="input-text"
            onChange={onChangeInput}
          />
        </div>
      </div>
    </div>
  )
}
export default Header