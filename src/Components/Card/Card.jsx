import { toast } from "react-toastify";
import ShowCardData from "./ShowCardData";
const Card = ({
  CardDatas = [],
  setInProgress,
  inProgress,
  cardSelect,
  selectedCards = [],
  resolvedData,
  resolvedCards,
}) => {
  return (
    <>
      <section className="md:w-[1200px] md:mx-auto">
        <div className="grid grid-cols-4 gap-5 ">
          <div className="col-span-3 ">
            <h2 className="font-bold">Customer tickets</h2>
            <div className="mt-5 mb-5  grid grid-cols-2 gap-2">
              {CardDatas.map((datas) => (
                <ShowCardData
                  datas={datas}
                  key={datas.id}
                  setInProgress={setInProgress}
                  inProgress={inProgress}
                  cardSelect={cardSelect}
                  resolvedData={resolvedData}
                ></ShowCardData>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-bold">Task Status</h4>

            {selectedCards.length > 0 ? (
              selectedCards.map((datas) => (
                <div
                  key={datas.id}
                  className="mt-3 rounded-lg border p-3 shadow-sm"
                >
                  <h3 className="font-bold">{datas.title}</h3>

                  <button
                    className="w-full bg-green-500 text-white rounded p-2 mt-2"
                    onClick={() =>{ resolvedData(datas),toast("resolved")}}
                  >
                    Complete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400">
                Select a ticket to add to Task Status.
              </p>
            )}

            <h4 className="text-xl font-bold">Resolved Task</h4>
            <div className="text-gray-400">
              {resolvedCards.length > 0 ? (
                resolvedCards.map((datas) => (
                  <div
                    key={datas.id}
                    className="mt-3 rounded-lg  bg-blue-300 border p-3 shadow-sm"
                  >
                    <h3 className="font-bold">{datas.title}</h3>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No resolved tasks yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
