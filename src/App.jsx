import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import RecipeCards from './components/RecipeCards/RecipeCards'


function App() {

  return (
    <div className='bg-white font-1' >
      <Navbar></Navbar>
      <Hero></Hero>
      <RecipeCards></RecipeCards>
    </div>
    
  )
}

export default App
