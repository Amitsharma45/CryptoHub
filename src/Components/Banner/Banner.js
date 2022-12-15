import React from 'react'
import './Banner.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import axios from 'axios';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Banner() {
  const [Trending, setTrending] = React.useState([]);

  const Trendingcoin = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
    setTrending(data);
    // console.log(data)
  }

  React.useEffect(() => {
    Trendingcoin();

  }, []);
  const Items = Trending.map((coin) => {
    const profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coin-detail/${coin.id}`} style={{display:'flex',flexDirection:'column',alignItems:'center',color:'white',textDecoration:'none',textTransform:'uppercase'}} >
        <img src={coin?.image} alt={coin.image} height="80" style={{ marginBottom: 10 }} />
        <span > {coin?.symbol} &nbsp; <span style={{ color: profit > 0 ? "green" : "red", fontWeight: 500 }} >{profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%</span> </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>{numberWithCommas(coin?.current_price.toFixed(2))}</span>
      </Link>
    )
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className='banner_img '>

      <div className='text-center ' style={{ padding:'60px 0',color: '',fontWeight:'500', fontSize: '2rem' }}>
        Connecting the World to  Crypto
      </div>
      <div className='mt-5 container'>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          autoPlay
          items={Items}
        />
      </div>
    </div>
  )
}

export default Banner