import Singlecat from "@/component/SingleCat";

export function BigCats() {
  const cats = [
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      img: "placeholder",
      id: 1,
    },
    {
      name: "Cougar",
      latinName: "Puma concolor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUoysYaovHsm1MJZA1RBuRQQ71jyKkcVjtA&s",
      id: 2,
    },
    {
      name: "Jaguar",
      latinName: "Panthera onca",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
      id: 3,
    },
    {
      name: "Leopard",
      latinName: "Panthera pardus",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJKZMjdnVKj_74TMHG1P6ltf225oNk-kb1LezuNQB9G92-ZhPM",
      id: 4,
    },
    { name: "Lion", latinName: "Panthera leo", img: "placeholder", id: 5 },
    {
      name: "Snow leopard",
      latinName: "Panthera uncia",
      img: "placeholder",
      id: 6,
    },
    { name: "Tiger", latinName: "Panthera tigris", img: "placeholder", id: 7 },
  ];
  return (
    <>
      <h1>Big Cats List</h1>
      {cats.map((cat) => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          img={cat.img}
        />
      ))}
    </>
  );
}

export default BigCats;
