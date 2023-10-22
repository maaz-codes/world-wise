import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import PropTypes from 'prop-types'; 

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
    const { cityName, emoji, date, position } = city;
    console.log(city);

    return (
        <li>
            <Link className={styles.cityItem} 
              to={`${city.id}?lat=${position.lat}&lng=${position.lng}`} >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    )
  }

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    cityName: PropTypes.string,
    emoji: PropTypes.string,
    date: PropTypes.string,
    position: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
};

export default CityItem
