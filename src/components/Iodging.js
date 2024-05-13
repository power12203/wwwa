import React, { useRef } from "react";
import IodgingList from "./IodgingList";
import Menubar from "./Menubar";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 20px auto;
  width: 100%;
  text-align: center;
  padding-top: 150px;
`;

const Iodging = () => {
  const totalItems = useRef(20);
  const itemPerPage = useRef(8);
  return (
    <>
      <header>
        <Menubar />
      </header>
      <hr />
      <div style={{ padding: "0", margin: "0 auto" }}>
        <H1>숙소 리스트</H1>
        <IodgingList
          totalItems={totalItems.current}
          itemPerPage={itemPerPage.current}
        />
      </div>
    </>
  );
};

export default Iodging;
