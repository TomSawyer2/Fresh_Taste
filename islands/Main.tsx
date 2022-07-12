/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Main() {
  return (
    <div class={tw`max-w-screen-md px-4 mx-auto`}>
      <img alt="Deno pic" src="https://buttondown.s3.amazonaws.com/images/63776d4a-476a-45f3-8fed-6059e06c5920.png" />
			<h1 class={tw`font-extrabold text-5xl leading-10 tracking-tight text-gray-900 text-center`}>Deno</h1>
			<div class={tw`mt-10`}>
				<h2 class={tw`font-bold text-2xl`}>What's Deno</h2>
				<p class={tw`my-4 text-gray-600`}>
					Deno is a fast, secure, and featureful open source runtime for JavaScript. It's used by developers to build fast, secure, and featureful web applications.
				</p>
				<h2 class={tw`font-bold text-2xl`}>Why Deno</h2>
				<p class={tw`my-4 text-gray-600`}>Try something new</p>
			</div>
		</div>
  );
};
