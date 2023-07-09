import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";

const Destinations = () => {
  const { conId, desId } = useParams();
  const [destination, setDestination] = useState([]);
  const navigate = useNavigate("./");

  useEffect(() => {
    setDestination(
      data?.continents
        .find(({ id }) => id === Number(conId))
        .countries.find(({ id }) => id === Number(desId)).destinations
    );
  }, [conId, desId]);

  return (
    <div>
      <button onClick={() => navigate("/")} className="text-left">
        Back
      </button>
      <h1 className="text-3xl text-blue-500 mt-8">
        Top destination in for your holiday
      </h1>
      <div className="flex gap-60 flex-wrap justify-center mt-8">
        {destination?.map((dest) => {
          const { name, id, image } = dest;
          return (
            <Link
              to={`/continent/${conId}/destination/${desId}/${id}`}
              key={id}>
              <img src={image} alt={name} className="h-[200px] w-[200px]" />
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
