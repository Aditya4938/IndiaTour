import React, {useState} from "react";
import Trips from "./components/Trips";
import data from "./data";
const App = () => {
    const [tour,setTour]=useState(data);
    function tourHandler(id){
        console.log("tour : ",tour);
        setTour(tour.filter((index)=>{return index.id!==id}));
    }

    function refreshHandler(){
        setTour(data);
    }

    if(tour.length===0){
        return(
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center  ">
                <div >
                    <p className="font-bold text-[24px] text-center mb-4">No Tours Left</p>
                    <button onClick={refreshHandler} className="w-[208px] h-[40px]  bg-[#f0f0f0]">Refresh</button>
                </div>
            </div>
        )
    }
    return(
        <div className="w-[100vw] h-[100vh] flex flex-col  " >
            <h1 className="my-[3rem] font-bold self-center w-min-[525px]text-center text-[48px] rounded-[10px] border-[5px] border-dashed border-[#0111A0] px-[76px] py-[7px]">Plan With Aditya</h1>
            <div className="flex flex-wrap mx-auto max-w-[90%] gap-8 justify-between">
            {tour.map((item,index)=>(
              <Trips id={item.id}  image={item.image} price={item.price} city={item.name} cityDescription={item.info} removeTour={tourHandler}/>
            ))}
            </div>
        </div>
    )
};

export default App;
