import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import readXlsxFile from "read-excel-file";
import Msd from "../MultiSelectDropdown/Msd";
import { Composition } from "atomic-layout";
import PracticeFile from "../ScreenComp/StyledComponents/StyledComponent";
import QuizGame from "../ScreenComp/QuizGame/QuizGame";
import PlayGame from "../ScreenComp/QuizGame/PlayGame";

const MainNavigation = () => {
  // console.log(selectedId);
  // const credential = useSelector((state) => state.auth.credential);
  // // console.log(credential);
  // const token = credential?.accessToken;
  // console.log(token);
  const areasMobile = `
  thumbnail
  content
  actions
`;
  return (
    <>
      <Routes>
        <Route path="/" element={<QuizGame />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </>
  );
};

export default MainNavigation;
