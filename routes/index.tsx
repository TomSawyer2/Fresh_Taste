/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navigator from "../islands/Navigator.tsx";
import Main from "../islands/Main.tsx";

export default function Home() {
  return (
    <div class={tw`w-screen h-screen`}>
      <div class={tw`flex flex-col items-center justify-center`}>
        <Navigator />
        <Main />
      </div>
    </div>
  );
}
