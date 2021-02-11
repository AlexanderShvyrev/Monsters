import './card.css'

const Card = ({ monster }) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${monster.id}?set=set2`} alt="monster" />
            <h1>{monster.username}</h1>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card
