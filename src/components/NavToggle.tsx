import React from "preact/compat";
import { useStore } from "@nanostores/preact";
import { MenuIcon, XIcon } from "lucide-preact";
import { $isNavOpen } from "@Stores/ui";

export default function NavToggle() {
  const isNavOpen = useStore($isNavOpen);
  const toggleNav = () => $isNavOpen.set(!isNavOpen);

  return (
    <button onClick={toggleNav} className={"nav-toggle"}>
      {isNavOpen ? <XIcon /> : <MenuIcon />}
    </button>
  );
}
