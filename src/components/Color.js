import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import styled from "styled-components";
const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const Img = styled.img`
  margin: 10px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  transform: translate3d(0, 0, -100px);
`;
const Div = styled.div`
  margin: 0px auto;
  margin-left: 10px;
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  border-radius: 5px;
  background-color: whitesmoke;
`;
const Div1 = styled.div``;

function Color({ color, handleSetcolors, onHandleRating }) {
  console.log(color);
  const handleRat = (rating) => {
    console.log(rating);
    onHandleRating(color.id, rating);
  };
  return (
    <Div1>
      <Section>
        <Div>
          <h1>{color.title}</h1>
          <Img src={color.color} />
          <div>
            <StarRating handleRat={handleRat} />
          </div>
          <p>{color.rating}/5</p>
          <button onClick={() => handleSetcolors(color.id)}>
            <FaTrash />
          </button>
        </Div>
      </Section>
    </Div1>
  );
}

export default Color;
