import PropTypes from 'prop-types';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';

import { useCities } from '../contexts/CitiesContext';

function CityList() {
    const { cities, isLoading } = useCities();

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Add your items by clicking on the map shown.' />

    return (
        <ul className={styles.cityList}>
            {cities.map(city => <CityItem city={city} key={city.id} />)}
        </ul>
    )
}

// prop types //

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        cityName: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }).isRequired,
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default CityList
