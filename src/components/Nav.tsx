import React from "preact/compat";
import { $isNavOpen } from "@Stores/ui.store";
import { useStore } from "@nanostores/preact";
import useWindowDimensions from "@Hooks/useWindowDimensions";

export default function Nav() {
  const isNavOpen = useStore($isNavOpen);
  const { width } = useWindowDimensions();
  const showNav = width && width > 600;

  if (!isNavOpen && !showNav) {
    return null;
  }

  return (
    <ul className={"nav-links"}>
      <li className={"nav-element"}>About</li>
      <li className={"nav-element"}>Experience</li>
      <li className={"nav-element"}>Contact</li>
      <li className={"nav-element"}>Blog</li>
    </ul>
  );
}
