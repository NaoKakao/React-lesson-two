
function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.url} alt={props.name}/>
                <h4 className="card-title">{props.name}</h4>
                <div className="card-discription">
                    <p>{props.universe}</p>
                    <p>{props.alterego}</p>
                    <p>{props.occupation}</p>
                    <p>{props.friends}</p>
                    <p>{props.superpowers}</p>
                    <p className="card-text">{props.info}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;