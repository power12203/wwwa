import React, { useState } from "react";
import styled from "styled-components";
import imageObject from "../data/Color-data.json";
import Card from "./Card";
import Head from "./Head";
import { Link } from "react-router-dom";

const createArray = (length) => [...Array(length)];

function importAll(imgs) {
  const images = {};
  imgs.keys().map((img, idx) => {
    images[img.replace("./", "")] = imgs(img);
    return 0;
  });
  return images;
}
const imgObject = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);
const images = Object.keys(imgObject).map((filename) => imgObject[filename]);

// console.log(imageList.colors)
for (let i = 0; i < images.length; i++) {
  // console.log(images[i])
  imageObject.colors[i].color = images[i];
}
// console.log(imageList)

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  transition: all 1s;
  transform: translateX(${(props) => props.moveX}px);
`;

function CardList({ count = 8 }) {
  const [imgList, setImgList] = useState(imageObject.colors);
  const [totalX, setTotalX] = useState(267 * count);
  const [moveX, setMoveX] = useState(0);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  const [leftMoveX, setLeftMoveX] = useState(-4);
  const [rightMoveX, setRightMoveX] = useState(4);
  //   console.log(totalX);
  const handleSetMoveX = (direction) => {
    if (direction === "left") {
      if (totalX >= 1050) {
        setMoveX(moveX - 267);
        setTotalX(totalX - 267);
        setRight(1);
      } else if (totalX < 1050) {
        setLeft(0.2);
        setLeftMoveX(0);
        return;
      }
    } else {
      // right
      if (moveX < 0) {
        setMoveX(moveX + 267);
        setTotalX(totalX + 267);
        setLeft(1);
      } else if (moveX === 0) setRight(0.2);
      setRightMoveX(0);
      // setTotalX(267 * count);
      return;
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Head
        left={left}
        right={right}
        leftMoveX={leftMoveX}
        rightMoveX={rightMoveX}
        handleSetMoveX={handleSetMoveX}
      />
      <Div moveX={moveX}>
        {imgList.map((img, idx) => (
          <Card img={img} />
        ))}
      </Div>
    </div>
  );
}

export default CardList;
