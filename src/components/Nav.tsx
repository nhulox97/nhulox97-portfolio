import React from "preact/compat";
import { $isNavOpen } from "@Stores/ui.store";
import { useStore } from "@nanostores/preact";

export default function Nav() {
  const isNavOpen = useStore($isNavOpen);

  if (!isNavOpen) {
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
