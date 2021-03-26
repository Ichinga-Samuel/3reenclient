import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {
    const [searchField, setSearchField] = useState('');

    const filteredPersons = details.filter((items) => {
        return (
            items.product_name.toLowerCase().includes(searchField.toLowerCase()) ||
            items.description.toLowerCase().includes(searchField.toLowerCase())
        );
    });

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>
        );
    }

    return (
        <section>
            <div>
                <input type="search" placeholder="Search People" onChange={handleChange} />
            </div>
            {searchList()}
        </section>
    );
}

export default Search;
