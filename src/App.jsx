import { Suspense, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const url = "./data.json";
  const [CardDatas, setCardDatas] = useState([]);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [resolvedCards, setResolvedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const cardSelect = (datas) => {
    setInProgress((prev) => prev + 1);
    setSelectedCards((prev) => [...prev, datas]);
  };
  const resolvedData = (datas) => {
    setSelectedCards((prev) => prev.filter((card) => card.id !== datas.id));
    setResolvedCards([...resolvedCards,datas]);
    setResolved((prev) => prev + 1);
    setInProgress((prev) => prev - 1);
    
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCardDatas(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h2> data are loading...</h2>}>
        <Home
          resolved={resolved}
          setResolved={setResolved}
          CardDatas={CardDatas}
          inProgress={inProgress}
          setInProgress={setInProgress}
          cardSelect={cardSelect}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          resolvedData={resolvedData}
          resolvedCards={resolvedCards}
          setResolvedCards={setResolvedCards}
        ></Home>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
