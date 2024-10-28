import Image from "next/image";
import { ExampleComponent1 } from "@/components/ExampleComponent";
import { ExampleComponent2 } from "@/components/ExampleComponent";
import { Welcome, WelcomeWithChildren } from "@/components/Welcome";
import { FullName } from "@/components/FullName";
import { ComplexComment, Comment } from "@/components/ComplexComponent";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid9PrrsIvoKdYcA2Cmpo0KQ2UICjPn8Gsmg&s",
  },
};

export default function Home() {
  return (
    <>
      <Welcome />
      <WelcomeWithChildren>
        <h3>Welcome Tristan!</h3>
        <h3>I am 23 years old!</h3>
      </WelcomeWithChildren>
      <FullName first="Tristan" middle="John" last="Elasi" />
      {/* <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      /> */}
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
    </>
  );
}
