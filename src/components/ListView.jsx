const ListView = ({ items }) => {
  return (
    <div className='item-list'>
      {items.map((item, index) => {
        return (
          <div key={index} className='item'>
            <img className="item-img" src={item.img} alt={item.name} />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-color">{item.color}</p>
            <p className="item-price">${item.price}</p>
            <button className="item-btn">Add to cart</button>
          </div>
        );
      })}
    </div>
  )
}

export default ListView;