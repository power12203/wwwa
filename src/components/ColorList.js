import React, { useState } from "react";
import imageList from "../data/Color-data.json";
import Color from "./Color";

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
  imageList.colors[i].color = images[i];
}
console.log(imageList);
// 이미지 업그레이드

function ColorList() {
  const [colors, setcolors] = useState(imageList.colors);
  // console.log(colors)
  const handleSetcolors = (id) => {
    const newColor = colors.filter((color) => color.id !== id);
    //필터에 조건에 만족하는 아이템 만가져오는 방식
    setcolors(newColor);
  };
  const onHandleRating = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating: rating + 1 } : color
    );
    setcolors(newColors);
  };

  return (
    <>
      {colors.length ? (
        colors.map((color, idx) => (
          <div>
            <Color
              key={idx}
              color={color}
              handleSetcolors={handleSetcolors}
              onHandleRating={onHandleRating}
            />
          </div>
        ))
      ) : (
        <div>No colors(Add a color)</div>
      )}
    </>
  );
}

export default ColorList;
