export default function SingleCat({ name, latinName, img }) {
  return (
    <li>
      <p>{name}</p>
      <p>{latinName}</p>
      <div>
        <img src={img} />
      </div>
    </li>
  );
}
