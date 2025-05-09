import { CiClock2 } from "react-icons/ci";
import { FaDotCircle, FaFire } from "react-icons/fa";


const RecipeCard = ({ card, handleExploring }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card;
    return (
        <div className="text-left p-5 rounded-xl shadow shadow-gray-950/70 space-y-3">
            <div className="  aspect-square ">
                <img className="w-full h-full object-cover object-center rounded-xl" src={recipe_image} alt="" />
            </div>
            <h1 className="text-gray-900 font-semibold">{recipe_name}</h1>
            <p>{short_description}</p>
            <p className="text-gray-900 font-semibold">Ingredients: {ingredients.length}</p>
            <ul>
                {
                    ingredients.map((ingredient, idx) =>
                        <li className="flex items-center" key={idx}><FaDotCircle className="inline h-3 pr-2"></FaDotCircle>{ingredient}</li>
                    )
                }
            </ul>
            <div className="flex gap-5">
                <p className="flex items-center gap-2"><CiClock2 className="inline"></CiClock2>{preparing_time} minutes</p>
                <p className="flex items-center justify-center gap-2"><FaFire className="inline"></FaFire> {calories} calories</p>
            </div>
            <button onClick={() => handleExploring(recipe_id, recipe_name, calories, preparing_time)} className="bg-blue-600 text-gray-950 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition hover:text-blue-600">Explore More</button>
        </div>
    );
};

export default RecipeCard;