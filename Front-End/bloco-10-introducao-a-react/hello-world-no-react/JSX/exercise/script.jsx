import React from "react";

const textJSX = "Hello, JSX";
const element = <h1> {textJSX} </h1>

export default function App() {
  return (
    <div className="App">{element}</div>
  )
}