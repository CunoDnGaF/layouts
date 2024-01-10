const CardsView  = ({ cards  }) => {
  return (
    <div className='card-list'>
      {cards.map((card, index) => {
        return (
          <div key={index} className='card'>
            <div className="card-header">
              <h2 className="card-name">{card.name}</h2>
              <span className="card-color">{card.color}</span>
            </div>
              <img className="card-img" src={card.img} alt={card.name} />
            <div className="card-footer">
              <p className="card-price">${card.price}</p>
              <button className="card-btn">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default CardsView ;