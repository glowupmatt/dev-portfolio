import { Builder } from "@builder.io/react";
import HoverCard from "./builderComponents/HoverCard";

Builder.registerComponent(HoverCard, {
  name: "HoverCard",
  inputs: [
    { name: "title", type: "text" },
    { name: "link", type: "text" },
  ],
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
});
