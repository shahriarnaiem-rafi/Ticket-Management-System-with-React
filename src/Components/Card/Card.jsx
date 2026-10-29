import ShowCardData from "./ShowCardData";
const Card = ({ CardDatas = [] }) => {
  return (
    <>
      <section className="md:w-[1200px] md:mx-auto">
        <div className="grid grid-cols-4 gap-5 ">
          <div className="col-span-3 ">
            <h2 className="font-bold">Customer tickets</h2> 
            <div className="mt-5 mb-5  grid grid-cols-2 gap-2">
              {CardDatas.map((datas) => (
                <ShowCardData datas={datas} key={datas.id}></ShowCardData>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-bold">Task Status</h4>
            <p className="text-gray-400">
              Select a ticket to ad to Task Status.
            </p>
            <h4 className="text-xl font-bold">Resolved Task</h4>
            <p className="text-gray-400">No Resolve tasks yet.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
