import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/data";

const Place = () => {
  const { conId, desId, placeId } = useParams();
  const [place, setPlace] = useState({});
  useEffect(() => {
    setPlace(
      data?.continents
        .find(({ id }) => id === Number(conId))
        .countries.find(({ id }) => id === Number(desId))
        .destinations.find(({ id }) => id === Number(placeId))
    );
  }, [conId, desId, placeId]);
  const {
    name,
    image,
    description,
    location,
    reviews,
    ratings,
    ticketPrice,
    website,
  } = place;
  return (
    <div>
      <div className=" flex justify-center items-center my-20 gap-5">
        <img src={image} className="h-[300px] w-[200p]" alt="description" />
        <div className="flex flex-col items-start gap-4">
          <p>{name}</p>
          <p>description - {description}</p>
          <p>ratings - {ratings}</p>
          <p>reviews - {reviews}</p>
          <p>ticketPrice - {ticketPrice}</p>
          <p>website - {website}</p>
          <p>location - {location}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;
