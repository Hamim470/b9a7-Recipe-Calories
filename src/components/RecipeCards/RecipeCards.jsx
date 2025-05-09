import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import SideBar from "../SideBar/SideBar";
import { toast, ToastContainer } from "react-toastify";



const RecipeCards = () => {
    const [cards, setCards] = useState([]);
    const [exploreCard, setExploreCard] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);


    const notify=()=>toast('Already Added');

    const handleExploring = (recipe_id, recipe_name, calories, preparing_time) => {
        if (!exploreCard.find(data => data.id === recipe_id)) {
            setExploreCard([...exploreCard, { id: recipe_id, name: recipe_name, calories: calories, time: preparing_time }]);
        }
        else{
            notify();
        }
    }
    return (
        <section className="text-gray-600 text-center mx-6 my-20">
            <h1 className="text-3xl font-bold md:text-5xl mb-6 text-gray-950">Our Recipes</h1>
            <p className="mb-10">Develop Precision in Baking, Grilling, Sautéing, and Seasoning While Exploring 150+ Recipes From Around the World to Elevate Your Cooking to Expert Level</p>
            <div className="md:flex  gap-5">
                <div className="grid md:grid-cols-2 md:w-3/5 gap-4">
                    {
                        cards.map(card => <RecipeCard handleExploring={handleExploring} card={card}></RecipeCard>)
                    }
                </div>
                

                
                <SideBar exploreCard={exploreCard}></SideBar>
                    


            </div>

               <ToastContainer />     

        </section>
    );
};

export default RecipeCards;