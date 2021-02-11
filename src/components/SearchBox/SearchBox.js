import { useState } from 'react'

import './searchBox.css'

const SearchBox = ({ input, setInput }) => {

    return (
        <div className="search-container">
            <input className="search" type="search" value={input} placeholder="Search monsters..." onChange={e => setInput(e.target.value)} />
        </div>
    )
}

export default SearchBox
