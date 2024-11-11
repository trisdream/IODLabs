export default function SingleCat({ name, latinName, img, alt }) {
  return (
    <li>
      <p>{name}</p>
      <p>{latinName}</p>
      <div>
        <img src={img} alt={alt} />
      </div>
    </li>
  );
}
