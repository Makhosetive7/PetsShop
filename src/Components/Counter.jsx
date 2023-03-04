import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";
import { FaCheck } from "react-icons/fa";

const Counter = () => {

    useEffect(() => {
        new PureCounter();
        AOS.init({
          duration: 2000,
          delay: 0,
          offset: 120,
          easing: "ease",
          once: true,
          mirror: true,
          anchorPlacement: "top-bottom",
        });
        AOS.refresh();
      });

  return (
    <Container>

          <div className="section-second">
            <div className="counter-container">
              <div className="counter-cell">
                <div
                  data-purecounter-start="0"
                  data-purecounter-end="6"
                  data-purecounter-duration="20"
                  className="purecounter"
                >
                  6
                </div>
           
                <div className="counter-info">
                  YEARS OF <br />
                EXPERIENCE
                </div>
              </div>
              <div className="counter-cell">
                <div
                  data-purecounter-start="0"
                  data-purecounter-end="800"
                  data-purecounter-duration="18"
                  className="purecounter"
                >
                  800
                </div>
            
                <div className="counter-info">
                  SALES& <br />
                UP-TO-DAY
                </div>
              </div>
              <div className="counter-cell">
                <div
                  data-purecounter-start="0"
                  data-purecounter-end="200"
                  data-purecounter-duration="15"
                  className="purecounter"
                >
                  200
                </div>
           
                <div className="counter-info">
                  SATISFIED <br />
                  CUSTOMERS
                </div>
              </div>
            </div>
          </div>
\
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: 0.1px;
  



  .section-head {
    margin-top: 5%;
    height: 380px;
    width: 100%;
  }

  
  .counter-container {
    margin-top: 1.2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    
  }
  .counter-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    margin-left: 2em;
    
  }
  .counter-cell .purecounter {
    font-size: 3em;
    letter-spacing: 0.125rem;
    font-weight: 900;
    text-align: center;
    color: yellow;
  }
  .counter-cell .counter-info {
    font-size: 1.5em;
    letter-spacing: 0.125rem;
    font-weight: 500;
    text-align: center;
    margin-right: 1em;
  }

  @media screen and (max-width: 1009px) {
    .section-head {
      height: auto;
    }
    .section-first h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    .section-first h2 {
      font-size: 1.7rem;
    }
    .counter-container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  @media screen and (max-width: 642px) {
    .counter-container {
      text-align: center;
      place-items: center;
    }
    .counter-cell {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .section-first h1 {
      font-size: 1.7rem;
    }
    .section-first h2 {
      font-size: 1.4rem;
    }
    .counter-cell .counter-info {
      font-size: 1.3rem;
    }
  }
`;

export default Counter;