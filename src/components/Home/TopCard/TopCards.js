import React from "react";
import TopCard from "./TopCard";

const TopCards = () => {
  const allCards = [
    {
      id: 1,
      title: "New Food",
      text: "Added Daily",
      image:
        "https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Fast Delivery",
      text: "Friday-Sunday",
      image:
        "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Tasty And Fresh",
      text: "9AM - 10PM",
      image:
        "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {allCards.map((card) => (
          <TopCard key={card.id} card={card}></TopCard>
        ))}
      </div>
    </div>
  );
};

export default TopCards;
