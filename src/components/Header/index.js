import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="trend-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="buttons-container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/logout">
          <button type="button" className="button">
            LogOut
          </button>
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
