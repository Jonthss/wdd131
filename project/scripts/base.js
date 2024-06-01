const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Array for storing recipes. Ended up having a lot of issues trying to make a button to display and hide the list of ingredients, so I'm not using it anymore.
const recipes = [
    {
        recipeName: "Tokyo",
        recipeImg: "images/tokyo.jpg",
        cookingSteps: "https://www.japan.travel/en/destinations/kanto/tokyo/"
    },
    {
        recipeName: "Kyoto",
        recipeImg: "images/Kyoto.jpg",
        cookingSteps: "https://www.godairyfree.org/recipes/baked-pecan-crusted-chicken-strips"
    },
    {
        recipeName: "Osaka",
        recipeImg: "images/Osaka.jpg",
        cookingSteps: "https://www.japan-guide.com/e/e2157.html"
    },
    {
        recipeName: "Mount Fuji",
        recipeImg: "images/Mount_Fuji.jpg",
        cookingSteps: "https://www.japan.travel/en/fuji-guide/"
    },
    {
        recipeName: "Shirakawa-go",
        recipeImg: "images/Shirakawa-go.jpg",
        cookingSteps: "https://www.japan-guide.com/e/e5950.html"
    },
    {
        recipeName: "Hiroshima",
        recipeImg: "images/Hiroshima.jpg",
        cookingSteps: "https://dive-hiroshima.com/en/"
    },
    {
        recipeName: "Nara",
        recipeImg: "images/Nara.jpg",
        cookingSteps: "https://www.visitnara.jp/"
    },
    {   
        recipeName: "Nikko",
        recipeImg: "images/Nikko.jpg",
        cookingSteps: "https://www.visitnikko.jp/"
    },
    {
        recipeName: "Kanazawa",
        recipeImg: "images/Kanazawa.jpg",
        cookingSteps: "https://www.japan-guide.com/e/e2167.html"
    },
    {
        recipeName: "Hakone",
        recipeImg: "images/Hakone.jpg",
        cookingSteps: "https://www.hakonenavi.jp/international/en/"
    },
    {
        recipeName: "Okinawa",
        recipeImg: "images/Okinawa.jpg",
        cookingSteps: "https://www.japan-guide.com/list/e1247.html"
    },
    {
        recipeName: "Hokkaido",
        recipeImg: "images/Hokkaido.jpg",
        cookingSteps: "https://visitokinawajapan.com"
    }
]

function DisplayRandomRecipes(recipeList) {
    for (var i = 0; i < 4; i++) {
        let randomRecipe = recipeList[Math.floor(Math.random() * recipeList.length)]
        let box = document.querySelector(".recipe-box")
        box.innerHTML +=`<div class="random-card">
            <figure>
                <img src=${randomRecipe.recipeImg} alt="${randomRecipe.recipeName}" loading=lazy width = 150 height=180>
            </figure>
            <h3>${randomRecipe.recipeName}</h3>
            <a href="${randomRecipe.cookingSteps}" target="_blank"><button class="full-recipe">Full Recipe</button><a/>
        </div>`
    }
}
DisplayRandomRecipes(recipes)