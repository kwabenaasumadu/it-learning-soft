import React from "react";
import FirstHeader from "./firstHeader";
import SecondHeader from "./secondHeader";
import Showcase from "./showcase";
import Categories from "./categories";

function Index() {
  return (
    <>
      <div>
        <FirstHeader />
        <SecondHeader />
        <Showcase />
        <Categories />
      </div>
    </>
  );
}

export default Index;
