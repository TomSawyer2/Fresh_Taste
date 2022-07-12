/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Navigator() {
  const navlinkStyle = tw`text-lg px-2 text-gray-400 rounded-md leading-loose hover:bg-gray-100 hover:text-black tw-1edrchi cursor-pointer`;
  return (
    <div class={tw`w-screen h-20 flex items-center justify-between`}>
      <span
        class={tw`text-3xl antialiased tracking-wide pl-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500`}
      >
        Fresh_Taste
      </span>
      <div class={tw`pr-6 flex flex-row`}>
        <div class={tw`flex items-center justify-center gap-x-4 font-medium`}>
          <span
            class={navlinkStyle}
            onClick={() => (window.location.pathname = "/")}
          >
            首页
          </span>
          <span
            class={navlinkStyle}
            onClick={() => (window.location.pathname = "/posts")}
          >
            文章
          </span>
          <span
            class={navlinkStyle}
            onClick={() => (window.location.pathname = "/about")}
          >
            关于
          </span>
        </div>
        <div class={tw`h-6 w-6 ml-5 my-auto`}>
          <a href="https://github.com/TomSawyer2" target="_blank">
            <svg class="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
