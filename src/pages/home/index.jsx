import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  const backgroundImageUrl = "https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?size=626&ext=jpg";
  return (
    <div
      className="py-8 container mx-auto flex flex-wrap justify-center items-center gap-10 relative "
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '85vh',maxWidth:'100vw' }}
    >
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="no-results text-center ">
          <p className="lg:text-4xl text-xl text-white font-extrabold animate-bounce font-serif">
          "Savor Every Bite: Explore Endless Flavors with Our Recipe website!"
          </p><br />
          <div className="text-right">
          <cite className="lg:text-4l text-xl text-white font-mono"> created by Hitesh,Shanmukha,Krishna</cite>
          </div>
          
        </div>
        
      )}
    </div>
  );
}
