import SideBarCook from "../SideBarCook/SideBarCook";
import SideBarCooking from "../SideBarCooking/SideBarCooking";


const SideBar = ({ exploreCard }) => {

    const handleCooking=()=>{
        
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
                    exploreCard.map(data => <SideBarCook data={data}></SideBarCook>)
                }
            </table>

            <h3 className="text-gray-900 text-2xl font-bold mt-8">Currently Cooking: 01</h3>
            <hr className="mx-20 shadow shadow-gray-700/50" />

            <table className="w-full">
                <tr>
                    <th className="p-2" colSpan={1}></th>
                    <th className="p-2" colSpan={1}>Name</th>
                    <th className="p-2" colSpan={1}>Time</th>
                    <th className="p-2" colSpan={1}>Calories</th>
                </tr>
                <tbody>
                    <SideBarCooking></SideBarCooking>
                    <tr>
                        <td className="p-2" colSpan={1}></td>
                        <td className="p-2" colSpan={1}></td>
                        <td className="p-2" colSpan={1}>Total Time = <br />
                            45 minutes</td>
                        <td className="p-2" colSpan={1}>Total Calories = <br />
                            1050 calories</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default SideBar;