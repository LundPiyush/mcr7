import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../../Data/data";

const ContinentDetail = () => {
  const { conId } = useParams();
  const [countrie, setCountrie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setCountrie(
      data?.continents.find(({ id }) => id === Number(conId)).countries
    );
  }, [conId, countrie]);

  return (
    <>
      <button onClick={() => navigate("/")} className="text-left">
        Back
      </button>
      <h1 className="text-3xl text-blue-500 mt-8">
        Top countries in Continent for your holiday
      </h1>

      <div className="flex gap-60 flex-wrap justify-center mt-8">
        {countrie?.map((cont) => {
          const { id, image, name } = cont;

          return (
            <Link to={`/continent/${conId}/destination/${id}`} key={id}>
              <img src={image} alt={name} className="h-[200px] w-[200px]" />
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ContinentDetail;
