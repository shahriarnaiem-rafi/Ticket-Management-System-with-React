import Card from "../Card/Card";

const Home = ({CardDatas=[],inProgress,setInProgress,cardSelect,selectedCards=[],setSelectedCards,resolved,setResolved,resolvedData,resolvedCards,setResolvedCards}) => {
  return (
    <>
      <section className="md:w-[1200px] md:mx-auto">
        <div className="grid grid-cols-2 gap-10 justify-center items-center text-center min-h-[300px] ">
          <div
            className="p-20 rounded-2xl text-white"
            style={{
              backgroundImage:
                "url('/src/assets/vector1.png'), linear-gradient(to right, #632EE3, #9F62F2)",
            }}
          >
            <p>In-Progress</p>
            <h4 className="text-2xl">{inProgress}</h4>
          </div>
          <div
            className="p-20 rounded-2xl text-white"
            style={{
              backgroundImage:
                "url('/src/assets/vector1.png'), linear-gradient(to right, #09D95F, #096020)",
            }}
          >
            <p>Resolved</p>
            <h4 className="text-2xl">{resolved}</h4>
          </div>
        </div>
      </section>
      <Card CardDatas={CardDatas} inProgress={inProgress} setInProgress={setInProgress} cardSelect={cardSelect} selectedCards={selectedCards} setSelectedCards={setSelectedCards} resolved={resolved} setResolved={setResolved} resolvedData={resolvedData} resolvedCards={resolvedCards} setResolvedCards={setResolvedCards}></Card>
    </>
  );
};

export default Home;
