import { useState } from "react";
import SideBarCook from "../SideBarCook/SideBarCook";
import SideBarCooking from "../SideBarCooking/SideBarCooking";
import { toast, ToastContainer } from "react-toastify";
import Count from "../Count/Count";


const SideBar = ({ exploreCard }) => {

    const [cook, setCook] = useState([]);
    const [counts, setCounts] = useState([]);
    const [timeCount,setTimeCount]=useState(0);
    const [caloriesCount,setCaloriesCount]=useState(0);


    const handleCooking = (name, calories, time) => {
        if (cook.find(data => data.name === name)) {
            toast('Already cooking');
        }
        else {
            setCook([...cook, { name: name, calories: calories, time: time }]);
        }
    }

    function handleCount(calories,time){
        if(counts.find(count=>count.calories===calories)){
            toast('Already Prepering')
        }
        else{
            setCounts([...counts,{calories:calories,time:time}]);
            setTimeCount(timeCount+time);
            setCaloriesCount(caloriesCount+calories);
        }
        
    }

    return (
        <div className=" p-5 rounded-xl shadow shadow-gray-950/70 text-gray-700 md:w-2/5 mt-3 md:mt-0 max-h-min">
            <h3 className="text-gray-900 text-2xl font-bold">Want to cook: {exploreCard.length}</h3>
            <hr className="mx-20 shadow shadow-gray-700/50" />

            <table className="min-w-full ">
                <tr>
                    <th colSpan={1} className=" w-10"></th>
                    <th colSpan={1} className="  p-2  ">Name</th>
                    <th colSpan={1} className="  p-2  ">Time</th>
                    <th colSpan={1} className="  p-2  ">Calories</th>
                    <th colSpan={1} className=" w-10"></th>
                </tr>

                {
                    exploreCard.map((data,idx) => <SideBarCook handleCooking={handleCooking} data={data} idx={idx} handleCount={handleCount}></SideBarCook>)
                }
            </table>

            <h3 className="text-gray-900 text-2xl font-bold mt-8">Currently Cooking: {counts.length}</h3>
            <hr className="mx-20 shadow shadow-gray-700/50" />

            <table className="w-full">
                <tr>
                    <th className="p-2" colSpan={1}></th>
                    <th className="p-2" colSpan={1}>Name</th>
                    <th className="p-2" colSpan={1}>Time</th>
                    <th className="p-2" colSpan={1}>Calories</th>
                </tr>
                {
                    cook.map((cooking,idx)=><SideBarCooking cooking={cooking} idx={idx}></SideBarCooking>)
                    
                }
                <Count timeCount={timeCount} caloriesCount={caloriesCount}></Count>
            </table>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SideBar;