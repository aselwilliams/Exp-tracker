import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../../config/api";
import classes from './Carousel.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import useAxios from '../../components/hooks/useAxios';

const Carousel = () => {
  const {data, loading, error} = useAxios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h') 

  // const fetchTrendingCoins = async () => {
  //   const { data } = await axios.get(TrendingCoins('usd'));
  //   setTrending(data);
  // };

  // useEffect(() => {
  //   fetchTrendingCoins();
  // }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const items = data.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
        <div className={classes.carouselItem}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {coin?.symbol}  ${numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
        </div>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 6,
    },
  };

  return (
    <div className={classes.carousel} >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;