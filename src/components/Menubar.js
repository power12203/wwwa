import React from "react";
import styled from "styled-components";
// import myimage from "../img/화면 캡처 2024-03-04 104510.png"
import { Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0 auto;
  z-index: 1000;
`;
const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  margin-top: 0 auto;
  background-image: url(./imge/벚꽃.gif);
  /* background-size: cover; */
  border-bottom: 1px solid #000;
`;
const MenuUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  list-style: none;
`;

const MenuULLiLink = styled(Link)`
  font-style: 40px;
  color: black;
  &:hover {
    color: red;
  }
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  font-size: 30px;
`;
const Img = styled.img`
  width: 40px;
  height: 50px;
  border-radius: 50%;
`;
const User = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Menubar() {
  return (
    <Header>
      <HeaderInner>
        <div
          className="logo"
          style={{
            width: "200px",
            textAlign: "center",
            textShadow: "2px 6px 2px gray",
          }}
        >
          <h1
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Img src="imge/fhrh.png" width="40px" height="50px" />
            <Link style={{ textDecoration: "none", color: "#ffb2f5" }}>
              Jeong Gil
            </Link>
          </h1>
        </div>
        <div className="meun">
          <MenuUL>
            <li>
              <MenuULLiLink>추천장소</MenuULLiLink>
            </li>
            <li>
              <MenuULLiLink>먹거리소개</MenuULLiLink>
            </li>
            <li>
              <MenuULLiLink>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/숙소"
                >
                  숙소
                </Link>
              </MenuULLiLink>
            </li>
            <li>
              <MenuULLiLink>예약</MenuULLiLink>
            </li>
          </MenuUL>
        </div>
        <User className="user">
          <Img src="imge/user.gif" />
          <Link style={{ textDecoration: "none", color: "black" }}>로그인</Link>
        </User>
      </HeaderInner>
    </Header>
  );
}
