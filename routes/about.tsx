/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navigator from "../islands/Navigator.tsx";

export default function Greet() {
  return (
    <div class={tw`w-screen h-screen`}>
      <Navigator />
      <p>This is about page</p>
    </div>
  );
}
