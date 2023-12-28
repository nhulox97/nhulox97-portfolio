import React from "preact/compat";
import { $isNavOpen } from "@Stores/ui";
import { useStore } from "@nanostores/preact";
import useWindowDimensions from "@Hooks/useWindowDimensions";

export default function Nav() {
  const isNavOpen = useStore($isNavOpen);
  const toggleNav = () => $isNavOpen.set(!isNavOpen);

  const { width } = useWindowDimensions();
  const showNav = width && width > 725;

  if (!isNavOpen && !showNav) {
    return null;
  }

  return (
    <ul className={"nav-links"}>
      <li onClick={toggleNav} className={"nav-element"}>
        <a href="#bio">About</a>
      </li>
      <li onClick={toggleNav} className={"nav-element"}>
        <a href="#skills">Experience</a>
      </li>
      <li onClick={toggleNav} className={"nav-element"}>
        <a href="#skills">Skills</a>
      </li>
      <li onClick={toggleNav} className={"nav-element"}>
        <a href="#contact">Contact</a>
      </li>
      <li onClick={toggleNav} className={"nav-element"}>
        <a>Blog</a>
      </li>
    </ul>
  );
}
