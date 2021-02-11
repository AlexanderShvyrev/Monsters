import Card from '../Card/Card'
import './card-list.css'


const CardList = ({ monsters, loading }) => {
    return (
        <div className="cards-container">
            { loading ? monsters.map(monster => {
                return (
                    <Card key={monster.id} monster={monster} />
                )
            }) : <h2 style={{ color: 'white' }}>Loading...</h2>}
        </div>
    )
}

export default CardList
