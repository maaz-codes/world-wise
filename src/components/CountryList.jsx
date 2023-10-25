import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

import { useCities } from '../contexts/CitiesContext';

function CountryList() {
    const { cities, isLoading } = useCities();

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Add your first city by clicking on a city on the map' />

    // countries = {country: 'France', emoji: 'FR'}
    const countries = cities.reduce((arr, city) => {
        if(!arr.map((el) => el.country).includes(city.country))
        return [...arr, {country: city.country, emoji: city.emoji}];
        else return arr;
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map(country => <CountryItem country={country} key={Math.floor(Math.random()*10000)} />)}
        </ul>
    )
}

export default CountryList
