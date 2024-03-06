import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 20px;
  border-radius: 50%;
`;
const Div = styled.div`
  margin: 200px auto;
  width: 800px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  overflow: hidden;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.position}px);
`;

const moveX = 270;
const Auto = () => {
  const [position, setposition] = useState(0);
  const [direction, setdirection] = useState("RIGHT");
  useEffect(() => {
    const autoslide = setInterval(() => {
      if (position === 0 && direction === "RIGHT") {
        //첫번째칸

        setdirection(false);
      } else if (position === -540) {
        //두번째칸
        setposition(position - moveX);
      } else if (position === -270 && direction === false) {
        setposition(position + 270);
        setdirection(true);
      }
    }, 2000);
    return () => {
      clearInterval(autoslide);
    };
  }, [position]);

  return (
    <Div>
      <Div2 position={position}>
        <div>
          <Img src="./imge/dog.gif"></Img>
        </div>
        <div>
          <Img src="./imge/img1.jpg"></Img>
        </div>
        <div>
          <Img src="./imge/img2.jpg"></Img>
        </div>
        <div>
          <Img src="./imge/img3.jpg"></Img>
        </div>
        <div>
          <Img src="./imge/img1.jpg"></Img>
        </div>
      </Div2>
    </Div>
  );
};

export default Auto;

// const Slide = document.querySelector(".bbq");
// let cnt = 0;
// const cats = document.querySelectorAll(".kfc");
// let timeInterval = setInterval(() => {
//   if (cnt === 0) {
//     Slide.style.transform = `translateX(-500px)`;
//     cnt++;
//   } else if (cnt === 1) {
//     Slide.style.transform = `translateX(0px)`;
//     cnt++;
//   } else if (cnt === 2) {
//     Slide.style.transform = `translateX(-500px)`;
//     cnt = 0;
//   }
// }, 2000);
