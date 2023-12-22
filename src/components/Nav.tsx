import React from "preact/compat";
import { $isNavOpen } from "@Stores/ui";
import { useStore } from "@nanostores/preact";
import useWindowDimensions from "@Hooks/useWindowDimensions";

export default function Nav() {
  const isNavOpen = useStore($isNavOpen);
  const { width } = useWindowDimensions();
  const showNav = width && width > 725;

  if (!isNavOpen && !showNav) {
    return null;
  }

  return (
    <ul className={"nav-links"}>
      <li className={"nav-element"}>
        <a href="#me">About</a>
      </li>
      <li className={"nav-element"}>
        <a href="#bio">Experience</a>
      </li>
      <li className={"nav-element"}>
        <a>Contact</a>
      </li>
      <li className={"nav-element"}>
        <a>Blog</a>
      </li>
    </ul>
  );
}
