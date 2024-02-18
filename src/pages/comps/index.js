import React from "react";
import FirstHeader from "./firstHeader";
import SecondHeader from "./secondHeader";
import Showcase from "./showcase";
import Categories from "./categories";
import Blog from "./blog";
import Feedback from "./feedback";
import Footer from "./footer";

function Index() {
  return (
    <>
      <div>
        <FirstHeader />
        <SecondHeader />
        <Showcase />
        <Categories />
        <Blog />
        <Feedback />
        <Footer/>
      </div>
    </>
  );
}

export default Index;
