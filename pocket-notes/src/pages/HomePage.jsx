//before adding any group to show notes poster and groups and to create groups
import React from "react";
import AllGroup from "../components/AllGroup/AllGroup";
import PosterArea from "../components/PosterArea/PosterArea";

export default function HomePage() {
  return (
    <AllGroup>
      <PosterArea />
    </AllGroup>
  );
}
