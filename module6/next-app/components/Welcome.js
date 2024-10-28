// export function Welcome(props) {
//   return (
//     <div className="Welcome">
//       <h3>Welcome {props.name || "Queens"}!</h3>
//       <h3>I am {props.age || "25"}!</h3>
//     </div>
//   );
// }

export function Welcome({ name = "Monarch", age = "Time Itself" }) {
  return (
    <div className="Welcome">
      <h3>Welcome {name}!</h3>
      <h3>I am {age}!</h3>
    </div>
  );
}

export function WelcomeWithChildren(props) {
  return <div className="Welcome">{props.children}</div>;
}
