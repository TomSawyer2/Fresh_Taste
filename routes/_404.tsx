/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function _404() {
  return (
    <div class={tw`w-screen h-screen flex flex-col items-center justify-center`}>
      <p class={tw`text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500`}>
        This page is missing
      </p>
      <p class={tw`text-center text-2xl pt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500`}>
        return to <a href="/">Home Page</a>
      </p>
    </div>
  );
}
