import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <Header />
      <div className="text-container">
        <div>
          <h1 className="head">Clothes That Get YOU Noticed</h1>
          <p className="describe">
            Fashion is part of the daily air and it does quite help that it
            changes all the time.Clothes have always been marker of the era and
            wwe are in a revolution. Your fashion makes you been seen and heard
            that way you are.So,celebrate the seasons new exciting fashion in
            your own way.
          </p>
          <div>
            <button type="button" className="button">
              Shop Now
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes"
        />
      </div>
    </div>
  </>
)

export default Home
