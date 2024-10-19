import { useState, useEffect } from "react";
import WeatherSearch from "./WeatherSearch";
import FavoriteCities from "./FavoriteCities"; // Corrected import
import bgImage from "./bg.jpg"; // Import the image file

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoritesCities')) || [];
    setFavorites(savedFavorites);
  }, []);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem('favoritesCities', JSON.stringify(updatedFavorites));
    }
  };

  const removeCity = (city) => {
    const updatedCities = favorites.filter((savedCity) => savedCity !== city);
    setFavorites(updatedCities);
    localStorage.setItem('favoritesCities', JSON.stringify(updatedCities));
  };

  return (
    <div
      className="min-h-screen flex-col flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-4">Weather Dashboard</h1>
        <WeatherSearch addFavorite={addFavorite} />
      </div>
      <FavoriteCities favorites={favorites} removeCity={removeCity} />
    </div>
  );
}

export default App;

