

const Count = ({timeCount,caloriesCount}) => {
    return (
        <tr>
            <td className="p-2" colSpan={1}></td>
            <td className="p-2" colSpan={1}></td>
            <td className="p-2" colSpan={1}>Total Time = <br />
                {timeCount} minutes</td>
            <td className="p-2" colSpan={1}>Total Calories = <br />
                {caloriesCount} calories</td>
        </tr>
    );
};

export default Count;