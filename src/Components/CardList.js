import { useEffect, useState } from "react";
import { Card } from "./Card";
export const CardList = () => {
  const [cardArr, setCardArray] = useState([]);
  useEffect(() => {
    fetch("/data/card.json")
      .then((res) => res.json())
      .then((res) => setCardArray(res.data));
  }, []);

  return (
    <div className="text-center">
      {cardArr.map((card) => (
        <Card
          key={card.id}
          Img={card.Img}
          tag={card.tag}
          title={card.title}
          desc={card.desc}
          product={card.product}
          type={card.type}
        />
      ))};
    </div>
  );
};
