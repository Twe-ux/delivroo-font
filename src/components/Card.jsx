const Card = ({ name, description, price, img, popular }) => {
  return (
    <form>
      <div
        className="card"
        onClick={() => {
          // console.log("clicked");
        }}
      >
        <div className="content">
          <div className="description">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="content-price">
            <p className="price">{price}€</p>
            {popular && <div className="statut">⭐️ Populaire</div>}
          </div>
        </div>
        {!img ? null : <img src={img} />}
        {/* <img src={img} /> */}
      </div>
    </form>
  );
};

export default Card;
