import styled from "styled-components";
import HeroSection from "./components/HeroSection";

function About() {
  const data = {
    name: "ShopEase Ecommerce",
  };

  return (
    <Wrapper className="test">
      <HeroSection myData={data} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background-color: #fff;
`;

export default About;
