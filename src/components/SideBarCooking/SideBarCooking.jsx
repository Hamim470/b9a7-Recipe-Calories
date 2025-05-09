import Count from "../Count/Count";

const SideBarCooking = ({ cooking,idx }) => {
    const { name, calories, time } = cooking;
    
    return (
        <tbody>
            <tr>
                <td className="p-2" colSpan={1}>{idx+1}</td>
                <td className="p-2" colSpan={1}>{name}</td>
                <td className="p-2" colSpan={1}>{time} minutes</td>
                <td className="p-2" colSpan={1}>{calories} calories</td>
            </tr>
            
        </tbody>
    );
};

export default SideBarCooking;