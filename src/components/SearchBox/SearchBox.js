
import './searchBox.css'

const SearchBox = ({ input, setInput, placeholder }) => {

    return (
        <div className="search-container">
            <input className="search" type="search" value={input} placeholder={placeholder} onChange={e => setInput(e.target.value)} />
        </div>
    )
}

export default SearchBox
