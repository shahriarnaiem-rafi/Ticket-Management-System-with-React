const ShowCardData = ({ datas }) => {
  return (
    <div className="w-full bg-base-100 shadow-sm rounded-xl p-4">
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="font-bold">{datas.title}</h2>
        <p style={{ 
            padding:"5px",
            borderRadius:"10px",
            backgroundColor: datas.status==="Open"?"lightgreen":"lightyellow",

        }}><i class="fa-solid fa-circle " style={{
            color:datas.status==="Open"?"green":"yellow"
        }}></i>{datas.status}</p>
      </div>

      <p className="my-3">{datas.description}</p>

      <p>
        {datas.id}
        <span className="text-red-500 ml-6" style={{
           color: datas.priority==="High"
           ?"lightred"
           :datas.priority==="Medium"
           ?"lightyellow":"lightgreen",
           
        }}>
          {datas.priority} Priority
        </span>
      </p>

      <div className="flex flex-row items-center justify-end w-full mt-4 gap-2">
        <p>{datas.customer}</p>
        <p>{datas.createdAt}</p>
      </div>
    </div>
  );
};

export default ShowCardData;