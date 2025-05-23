import { useState } from "react";


const SideBarCook = ({ data, handleCooking, idx,handleCount }) => {
    const { name, calories, time } = data;
    const [count, setCount] = useState([]);
    return (

        <tr>
            <td colSpan={1} className="  ">{idx + 1}</td>
            <td colSpan={1} className="  p-2 ">{name}</td>
            <td colSpan={1} className="  p-2 ">{time} min</td>
            <td colSpan={1} className="  p-2 ">{calories} cal</td>
            <td colSpan={1} className="  p-2 ">
                <button onClick={() => { 
                    handleCooking(name, calories, time),
                    handleCount(calories,time)
                 }} className="bg-blue-600 text-gray-950 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition hover:text-blue-600">Prepering</button>
            </td>

        </tr>
    );
};

export default SideBarCook;