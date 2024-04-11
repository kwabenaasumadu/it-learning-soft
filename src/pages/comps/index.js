import React from "react";
import FirstHeader from "./firstHeader";
import SecondHeader from "./secondHeader";
import Showcase from "./showcase";
import Categories from "./categories";
import Blog from "./blog";
import Feedback from "./feedback";
import Footer from "./footer";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Program With Cod</title>
      </Head>
      <div>
        <FirstHeader />
        <SecondHeader />
        <Showcase />
        <Categories />
        <Blog />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}

export default Index;
