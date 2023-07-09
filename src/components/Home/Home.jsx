import React, { useState } from "react";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [continents] = useState([data?.continents]);

  return (
    <>
      <h1 className="text-3xl text-blue-500 mt-8">Welcome to Trip Advisor </h1>
      <h3 className="text-2xl">Top Contients of your holiday</h3>
      <div className="flex gap-60 flex-wrap justify-center mt-8">
        {continents[0].map((cont) => {
          const { name, image, id } = cont;
          return (
            <Link to={`/continent/${id}`}>
              <div key={id}>
                <img src={image} alt={name} className="h-[200px] w-[200px]" />
                <p className="text-xl">{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
