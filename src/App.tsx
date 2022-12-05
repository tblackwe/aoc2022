import React from "react";
import "./App.css";
import day01 from "./problems/day01";

import * as CUI from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import day05 from "./problems/day05";

function App() {
  console.log(day05());
  const completedDays = [1, 2, 3, 4, 5];
  //const incompleteDays = [];
  const notStartedDays = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ];
  const treeDays = [
    [1],
    [2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25],
  ];
  const { isOpen, onToggle } = useDisclosure();

  const tree = treeDays.map((days) => {
    const row = days.map((day) => {
      let color = completedDays.includes(day)
        ? "green"
        : notStartedDays.includes(day)
        ? "grey"
        : "red";
      const url = `https://adventofcode.com/2022/day${day}`;
      return (
        <>
          <CUI.Badge onClick={onToggle} color={color}>
            {day}
          </CUI.Badge>
        </>
      );
    });
    return <CUI.Stack direction="row">{row}</CUI.Stack>;
  });

  return (
    <div className="App">
      <CUI.Box>
        <CUI.Text as={"h1"} className="App-header">
          Advent of Code 2022
          {tree}
        </CUI.Text>
        <CUI.Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <CUI.Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            fooo
          </CUI.Box>
        </CUI.Slide>
      </CUI.Box>
    </div>
  );
}

export default App;
