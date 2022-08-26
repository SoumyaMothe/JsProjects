const meals=document.getElementById("meals");
const fav=document.getElementById("fav-cont");
const searchTerm=document.getElementById("search-term");
const searchbtn=document.getElementById("search");
getRandomMeal();
fetchFavMeals();
async function getRandomMeal()
{
const resp=await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
const randomMeal1=await resp.json();
const randomMeal=randomMeal1.meals[0];
addMeal(randomMeal,true);


}

async function getMealById(id)
{
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}
async function getMealsBySearch(term) {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
    );

    const respData = await resp.json();
    const meals = respData.meals;

    return meals;
}
function addMeal(mealData,random=false)
{
    const meal=document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML=`
    <div class="meal-header">
    ${random?`<span class="random">Random Recipee</span>`:''}
    
        <img src="${mealData.strMealThumb}" alt="${mealData.Meal}"

    </div>
    <div class="meal-body">
    <h4>${mealData.strMeal}</h4>
    <button class="fav-btn" > <i class="far fa-heart"></i></button>
    </div>
</div>
`
const btn=meal.querySelector(".meal-body .fav-btn");
btn.addEventListener("click",()=>{
    
    if(btn.classList.contains("active"))
    {
    removeMealsfromLS(mealData.idMeal);
    console.log(mealData.idMeal);
    btn.classList.remove("active");
    
    }   //btn.classList.toggle("active"); 

    else
    {
       //console.log(mealData.idMeal);
        addMealTOLS(mealData.idMeal);
        btn.classList.add("active");
       // console.log(mealData.idMeal);
    }
   // fav.innerHTML="";
    fetchFavMeals();
})
;
meals.appendChild(meal);

}
function addMealTOLS(mealId)
{
const mealIds=getMealsFromLS();
localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));

}
function removeMealsfromLS(mealId)
{
const mealIds=getMealsFromLS();
localStorage.setItem('mealIds',JSON.stringify(mealIds.filter(id=>id!==mealId)));

}
function getMealsFromLS()
{
    const mealIds=JSON.parse(localStorage.getItem('mealIds'));
    return mealIds===null?[]:mealIds;
}
async function fetchFavMeals()
{
    fav.innerHTML="";
    const mealIds=getMealsFromLS();
    //const meals=[];
    for(let i=0;i<mealIds.length;i++)
    {
        const mealid=mealIds[i];
   let    meal=await getMealById(mealid);
       console.log(meal);
       addMealTOFav(meal);
      // meals.push(meal);
    }
    
 
}


function addMealTOFav(mealData)
{
  
    console.log(mealData);
    const favmeal=document.createElement("li");
    favmeal.innerHTML=`
    <li><img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" ><span>${mealData.strMeal}</span>
    <button class="clear"><i class="fas fa-window-close"></i></button></li>
`;
const btn=favmeal.querySelector(".clear");
btn.addEventListener("click",()=>{
    removeMealsfromLS(mealData.idMeal);
    fetchFavMeals();
})
fav.appendChild(favmeal);

}
searchbtn.addEventListener('click',async ()=>{
    const searchval=searchTerm.value;
    

  const meals=await getMealsBySearch(searchval);
  console.log("the values to search"+meals);
  
  if (meals) {
    meals.forEach((meal) => {
        addMeal(meal);
    });
}
})