import React from "react";
import styled from "styled-components";
import Rocket1 from "../../assets/Rocket1.png";
import Astronaut from "../../assets/Astronaut.png";
import IgIcon from "../../assets/ig-icon.png";
import YtIcon from "../../assets/yt-icon.png";
import TwIcon from "../../assets/tw-icon.png";

const DivHero = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 140px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: middle;
  place-items: center;

  div {
    position: relative;
    width: 100%;
  }

  #p-text1 {
    font-size: 30px;
    font-weight: bold;
    color: #000;
    margin: 20px;
    margin-bottom: 10px;
  }

  #astronaut {
    float: right;
  }

  #rocket-1 {
    text-align: center;
    margin-bottom: 10px;
  }

  #p-text2 {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    margin: 40px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    #p-text1 {
      font-size: 30px;
      font-weight: bold;
      color: #000;
      margin: 50px;
      margin-bottom: 30px;
    }
    #p-text2 {
      color: #fff;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      padding-right: 25px;
    }
  }
`;

const DivSocial = styled.div`
  background-color: #cfe4;
  display: flex;
  position: fixed;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: flex-end;
  bottom: 0;
  right: 0;

  img {
    width: 60px;
    margin-bottom: 1rem;
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
      <DivHero>
        <div>
          <img
            src={Astronaut}
            alt=''
            id='astronaut'
            className='scroll'
            data-rate='10'
            data-direction='vertical'
          ></img>
          <p id='p-text1' className='scroll' data-rate='12' data-direction='vertical'>
            SE EL CAMBIO INNOVADOR QUE QUIERES VER EN EL MUNDO
          </p>
          <img
            src={Rocket1}
            alt=''
            id='rocket-1'
            className='scroll'
            data-rate='-13'
            data-direction='vertical'
          ></img>
          <p id='p-text2' className='scroll' data-rate='-1' data-direction='vertical'>
            No te pieras la misión de colonizar el mundo digital
          </p>
          <DivSocial>
            <img src={IgIcon} alt=''></img>
            <img src={YtIcon} alt=''></img>
            <img src={TwIcon} alt=''></img>
          </DivSocial>
        </div>
      </DivHero>
    </>
  );
};

export default Hero;
