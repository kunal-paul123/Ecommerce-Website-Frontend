import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";

function Home() {
  const data = {
    name: "ShopEase",
  };

  return (
    <Wrapper className="test">
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #fff;
`;

export default Home;
