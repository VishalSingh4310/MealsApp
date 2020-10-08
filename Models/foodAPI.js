// let foodItem;
// fetch(
//   "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
//   {
//     mode: "no-cors",
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
//       "x-rapidapi-key": "75f9378ca0msh6edb77cdec6313dp1fdfe8jsn8f6e29005367",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     foodItem = data.hints;
//     console.log(foodItem);
//   })

//   .catch((err) => {
//     console.log(err);
//   });

const FoodItem = async () => {
  let foodItem;
  const foodData = await fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
    {
      mode: "no-cors",
      method: "GET",
      headers: {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "75f9378ca0msh6edb77cdec6313dp1fdfe8jsn8f6e29005367",
      },
    }
  );
  const data = await foodData.json();
  console.log(data);
};
export default FoodItem;
