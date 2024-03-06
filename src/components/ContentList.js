import React, { useState } from "react";
import styled from "styled-components";
import Content from "./Content";
import imageList from "../data/Color-data.json";

const Div = styled.div`
  margin: 300px auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

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
  imageList.colors[i].image = images[i];
}
console.log(imageList);
export default function ContentList() {
  const [images] = useState(imgObject);
  return (
    <Div>
      {Object.keys(images).map((filename, idx) => (
        <Content key={idx} img={images[filename]} />
      ))}
    </Div>
  );
}
