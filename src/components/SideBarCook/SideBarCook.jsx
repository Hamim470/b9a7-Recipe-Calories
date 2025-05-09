

const SideBarCook = ({ data }) => {
    const { name, calories, time } = data;
    return (

        <tr>
            <td colSpan={1} className="  ">1</td>
            <td colSpan={1} className="  p-2 ">{name}</td>
            <td colSpan={1} className="  p-2 ">{time} min</td>
            <td colSpan={1} className="  p-2 ">{calories} cal</td>
            <td colSpan={1} className="  p-2 ">
                <button onCanPlay={()=handleCooking(name,calories,time)} className="bg-blue-600 text-gray-950 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition hover:text-blue-600">Prepering</button>
            </td>

        </tr>
    );
};

export default SideBarCook;