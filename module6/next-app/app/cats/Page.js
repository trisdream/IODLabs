"use client";

import { useState } from "react";

import SingleCat from "./SingleCat";
import { AddCatForm } from "@/components/AddCatForm";

export default function BigCats() {
  const [cats, setCats] = useState([
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiSZ9ygEI39KQCwxJpRjG13jM0W7QlZEQsVHFddvP9K63yqCv",
      imgAlt: "Cheetah",
      id: 1,
    },
    {
      name: "Cougar",
      latinName: "Puma concolor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUoysYaovHsm1MJZA1RBuRQQ71jyKkcVjtA&s",
      imgAlt: "Couger",
      id: 2,
    },
    {
      name: "Jaguar",
      latinName: "Panthera onca",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
      imgAlt: "Jaguar",
      id: 3,
    },
    {
      name: "Leopard",
      latinName: "Panthera pardus",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJKZMjdnVKj_74TMHG1P6ltf225oNk-kb1LezuNQB9G92-ZhPM",
      imgAlt: "Leapard",
      id: 4,
    },
    {
      name: "Lion",
      latinName: "Panthera leo",
      img: "https://www.worldanimalprotection.ca/cdn-cgi/image/width=1280,format=auto/siteassets/shutterstock_2461984615.jpg",
      imgAlt: "Lion",
      id: 5,
    },
    {
      name: "Snow leopard",
      latinName: "Panthera uncia",
      img: "https://animalfactguide.com/wp-content/uploads/2024/01/snow-leopard2.jpg",
      imgAlt: "Sea Leopard",
      id: 6,
    },
    {
      name: "Tiger",
      latinName: "Panthera tigris",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnC4_wXVlIBrcTed8RT6kQSaELKFJy9Om310t7kE-F7BDNTH8skrNYWRiNprxbJi_XTA&usqp=CAU",
      imgAlt: "Tiger",
      id: 7,
    },
  ]);

  const handleAddCat = (newCat) => {
    setCats((prevCats) => [...prevCats, newCat]);
  };

  return (
    <>
      <h1>Big Cats List</h1>
      <AddCatForm onAddCat={handleAddCat} />
      {cats.map((cat) => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          img={`h-40 w-40 ${cat.img} `}
          alt={cat.imgAlt}
        />
      ))}
    </>
  );
}
