import { useState } from "react";

function Trips({ id, image, price, city, cityDescription, removeTour }) {
  let cityDescription1 = `${cityDescription.substring(0, 200)}...`;
  let cityDescription2 = cityDescription;
  const [cityDescriptionn, setDescription] = useState(cityDescription1);
  const [read, setRead] = useState(false);
  function readHandler() {
    setRead(!read);
    if (read) {
      setDescription(cityDescription1);
    } else {
      setDescription(cityDescription2);
    }
  }
  return (
    <div className="w-[400px] max-h-[700px]  rounded-[10px] shadow-[0px_3px_8px_0px_rgba(0,0,0,.24)] p-[5px]">
      <img
        src={image}
        alt=""
        width={"100%"}
        className="border-box p-[5px] h-[300px]"
      />
      <div className="p-4">
        <p className="text-[1.25rem] text-[#1faa59] font-bold">Rs {price}</p>
        <p className="text-[1.5rem] font-bold">{city}</p>
        <div>
          <span>{cityDescriptionn}</span>
          <span
            onClick={readHandler}
            className="text-[#12B7EE] hover:cursor-pointer"
          >
            {read ? "Read Less" : "Read More"}
          </span>
        </div>
      </div>
        <div className="text-center mb-[1rem]">
        <button
          onClick={() => {
            removeTour(id);
          }}
         className="font-bold text-[18px] text-center border-solid border-[1px] border-[#ff0000] bg-[#F5E1E1] hover:bg-[#ff0000] hover:text-white w-[282px] h-[42px] rounded-[10px]">
          Not Interested
        </button>
        </div>
    </div>
  );
}

export default Trips;
