import Card from "../components/Card";

const Section = ({ name, meals }) => {
  // console.log("tab", meals);

  return (
    <section className="container">
      <div className="menu">
        <h3>{name}</h3>

        <div className="card-box">
          {meals.map((element, index) => {
            return (
              <Card
                key={index}
                name={element.title}
                description={element.description}
                price={element.price}
                popular={element.popular}
                img={element.picture}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
