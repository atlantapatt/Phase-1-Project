const groceries = document.getElementsByClassName('groceries')[0]
const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems')
const userInput = document.getElementById('userInput')
const deletion = document.getElementById('deletion')
const apiButton = document.getElementById("API button")
const userSearch = document.getElementById('userSearch')
const searchGlyph = document.getElementById('magGlass')

// function iterateAPI(array) {
//     for (i=0; i< array.length; i++) {
//         if (meals.meals[0].strMeasure[i]) {
//             return `${meals.meals[0].strMeasurei} of ${meals.meals[0].strIngredienti}`
//         }
//     }
// }

pencil.addEventListener('click', function(){
    addItem()
})

deletion.addEventListener('click', function(){
    allItems.innerHTML = ''
})

userInput.addEventListener('keydown', function(event){
    if(event.key == 'Enter')
        addItem()
})

function addItem(){
    const h2 = document.createElement('h2')
    h2.innerHTML = '- ' + userInput.value
    
    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through'
    })
    allItems.insertAdjacentElement('beforeend', h2)
    userInput.value = ''
}

userSearch.addEventListener('submit', function() {
    searchFunc()
})
searchGlyph.addEventListener('click', function() {
    searchFunc()
})

function searchFunc(event) {
    
    // event.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch.value}`)
    .then(response => response.json())
    .then(response => console.log(response))
    userSearch.value = ''
}

apiButton.addEventListener('click', function() {
    randomAPI()
})

function randomAPI() {
    // event.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => [data].map(meals => {
            //  const html = data.meal 
            const html = `
            <h2>
            Meal: ${meals.meals[0].strMeal}
            </h2>
            <img src = ${meals.meals[0].strMealThumb} width ="200" height="200"/>
            <p>
            ${meals.meals[0].strMeasure1} ${meals.meals[0].strIngredient1} <br>
            ${meals.meals[0].strMeasure2} ${meals.meals[0].strIngredient2} <br>
            ${meals.meals[0].strMeasure3} ${meals.meals[0].strIngredient3} <br>
            ${meals.meals[0].strMeasure4} ${meals.meals[0].strIngredient4} <br>
            ${meals.meals[0].strMeasure5} ${meals.meals[0].strIngredient5} <br>
            ${meals.meals[0].strMeasure6} ${meals.meals[0].strIngredient6} <br>
            ${meals.meals[0].strMeasure7} ${meals.meals[0].strIngredient7} <br>
            ${meals.meals[0].strMeasure8} ${meals.meals[0].strIngredient8} <br>
            ${meals.meals[0].strMeasure9} ${meals.meals[0].strIngredient9} <br>
            ${meals.meals[0].strMeasure10} ${meals.meals[0].strIngredient10} <br>
            ${meals.meals[0].strMeasure11} ${meals.meals[0].strIngredient11} <br>
            ${meals.meals[0].strMeasure12} ${meals.meals[0].strIngredient12} <br>
            ${meals.meals[0].strMeasure13} ${meals.meals[0].strIngredient13} <br>
            ${meals.meals[0].strMeasure14} ${meals.meals[0].strIngredient14} <br>
            ${meals.meals[0].strMeasure15} ${meals.meals[0].strIngredient15} <br>
            ${meals.meals[0].strMeasure16} ${meals.meals[0].strIngredient16} <br>
            ${meals.meals[0].strMeasure17} ${meals.meals[0].strIngredient17} <br>
            ${meals.meals[0].strMeasure18} ${meals.meals[0].strIngredient18} <br>
            ${meals.meals[0].strMeasure19} ${meals.meals[0].strIngredient19} <br>
            ${meals.meals[0].strMeasure20} ${meals.meals[0].strIngredient20} <br>
            </p>
            `
            function iterateAPI(array) {
              [array].filter(function (element) {
                  return element.value !== null
              })
            }
            console.log(iterateAPI(meals.meals[0]))

             document.querySelector('#output').insertAdjacentHTML('afterbegin', html)
             console.log(meals.meals[0])
            
    }))
    
    }

// function fetchedData(apiData) {
//     const APIdata = apiData.meals.map(meal => {
//         return `<p>meal' + ${meal.strMeal}</p>`
//     })
    // const apih2 = document.createElement('h2')
    // apih2.innerHTML = apiData
    // console.log(apiData)
// }
