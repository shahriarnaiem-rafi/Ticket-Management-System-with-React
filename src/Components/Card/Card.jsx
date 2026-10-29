import React from "react";

const Card = () => {
  return (
    <>
      <section className="md:w-[1200px] md:mx-auto">
        <div className="grid grid-cols-4  ">
          <div className="col-span-3">
            Customer tickets
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="card w-96 bg-base-100 card-md shadow-sm">
                  <div className="card-body">
                    <h2 className="card-title">Medium Card</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                    <div className="justify-end card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>2</div>
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
