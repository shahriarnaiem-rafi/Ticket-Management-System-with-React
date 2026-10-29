import { Suspense, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const url = "./data.json";
  const [CardDatas,setCardDatas]=useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => 
      setCardDatas(data));
  },[]);
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h2> data are loading...</h2>}>
        <Home CardDatas={CardDatas}></Home>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
