import Spinner from "./Spinner";
import CountryItem from './CountryItem';

function CountryList({ cities, isLoading }) {

    if(isLoading) return <Spinner />

    return (
        <div>
        </div>
    )
}

export default CountryList
