import { useState, useEffect } from "react";

import "./assets/css/App.css";
import Header from "./components/Header";
import Section from "./components/Section";

import axios from "axios";

function App() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUzZTE1MjIwNTU3MTAwMTU5MzA1MzIiLCJlbWFpbCI6Im1pbG9uZS50aGllcnJ5QG1lLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyNS0wMS0xMVQwMTowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNzM0Nzk2MTczfQ.0QrW7YZCIlqTyE8mGXa4_iCCHUZ0FJIBOunViMlr8Uk";

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--delivroobackend--qjy84vpdjsjt.code.run"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        img={data.restaurant.picture}
      />

      <main>
        {data.categories.map((element, index) => {
          // console.log(element.meals[0]);
          return (
            <Section
              key={element.name + index}
              name={element.name}
              meals={element.meals}
              index={index}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
