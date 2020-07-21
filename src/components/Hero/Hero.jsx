import React from "react";
import styled from "styled-components";
import Rocket1 from "../../assets/Rocket1.png";

const SectionHero = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 100px;

  height: 100%;

  span {
    width: 110px;
    height: 110px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #000;
    border-radius: 50%;
  }
`;

const UlHero = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: middle;
  place-items: center;
  height: 100vh;

  img {
    margin-top: 450px;
  }
`;
const Hero = () => {
  /*
  <li className='scroll' data-rate='2' data-direction='vertical'>
            lax
  </li>

  <span className='scroll' data-rateY='1' data-rateX='8.5' data-direction='horizontal'></span>
           */
  window.addEventListener("scroll", function (e) {
    const target = document.querySelectorAll(".scroll");
    var index = 0,
      length = target.length;

    for (index; index < length; index++) {
      var pos = window.pageYOffset * target[index].dataset.rate;

      if (target[index].dataset.direction === "vertical") {
        target[index].style.transform = `translate3d(0px,${pos}px,0px)`;
      } else {
        var posX = window.pageYOffset * target[index].dataset.ratex;
        var posY = window.pageYOffset * target[index].dataset.ratey;
        target[index].style.transform = `translate3d(${posX}px,${posY}px,0px)`;
      }
    }

    console.log(pos);
  });
  return (
    <>
      <SectionHero>
        <UlHero>
          <img
            src={Rocket1}
            alt=''
            className='scroll'
            data-rate='-5'
            data-direction='vertical'
          ></img>
        </UlHero>
      </SectionHero>
      <section></section>
    </>
  );
};

export default Hero;