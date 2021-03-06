const groceries = document.getElementsByClassName('groceries')[0]
const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems')
const userInput = document.getElementById('userInput')
const deletion = document.getElementById('deletion')
const apiButton = document.getElementById("API button")
const userSearch = document.getElementById('userSearch')
const searchGlyph = document.getElementById('magGlass')
const listh2 = allItems.getElementsByTagName('h2')
const h2Items = document.getElementById('items')


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

apiButton.addEventListener('mouseover', function(){
    colorChange()
})
apiButton.addEventListener('mouseout', function(){
    colorChangeBack()
})
function colorChange(){
    apiButton.style.color = 'olive'
}

function colorChangeBack(){
    apiButton.style.color = 'white'
}


function addItem(){
    const h2 = document.createElement('h2')
    h2.setAttribute('id', 'items')
    h2.innerHTML = '- ' + userInput.value
    
    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through'
    })
    allItems.insertAdjacentElement('beforeend', h2)
    userInput.value = ''
}

userSearch.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        document.getElementById('output').innerHTML = ""
        searchFunc()
    }
})
searchGlyph.addEventListener('click', function() {
    document.getElementById('output').innerHTML = ""
    searchFunc()
})

function searchFunc() {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch.value}`)
    .then(response => response.json())
    .then(data => [data].map(meals => {
        const mealsArray = meals.meals[0]
        console.log(mealsArray)
        const html = `
        <h2>
        Meal: ${meals.meals[0].strMeal}
        </h2>
        <img src = ${mealsArray.strMealThumb} width ="200" height="200"/>
        <p>
        ${mealsArray.strMeasure1} ${mealsArray.strIngredient1} <br>
        ${mealsArray.strMeasure2} ${mealsArray.strIngredient2}  <br>
        ${mealsArray.strMeasure3} ${mealsArray.strIngredient3} <br>
        ${mealsArray.strMeasure4} ${mealsArray.strIngredient4} <br>
        ${mealsArray.strMeasure5} ${mealsArray.strIngredient5} <br>
        ${mealsArray.strMeasure6} ${mealsArray.strIngredient6} <br>
        ${mealsArray.strMeasure7} ${mealsArray.strIngredient7} <br>
        ${mealsArray.strMeasure8} ${mealsArray.strIngredient8} <br>
        ${mealsArray.strMeasure9} ${mealsArray.strIngredient9} <br>
        ${mealsArray.strMeasure10} ${mealsArray.strIngredient10} <br>
        ${mealsArray.strMeasure11} ${mealsArray.strIngredient11} <br>
        ${mealsArray.strMeasure12} ${mealsArray.strIngredient12}  <br>
        ${mealsArray.strMeasure13} ${mealsArray.strIngredient13} <br>
        ${mealsArray.strMeasure14} ${mealsArray.strIngredient14} <br>
        ${mealsArray.strMeasure15} ${mealsArray.strIngredient15} <br>
        ${mealsArray.strMeasure16} ${mealsArray.strIngredient16} <br>
        ${mealsArray.strMeasure17} ${mealsArray.strIngredient17} <br>
        ${mealsArray.strMeasure18} ${mealsArray.strIngredient18} <br>
        ${mealsArray.strMeasure19} ${mealsArray.strIngredient19} <br>
        ${mealsArray.strMeasure20} ${mealsArray.strIngredient20} <br>
        </p>
        <h3 text - align="left">
        Instructions:
        </h3>
        <p text-align="left">
        ${mealsArray.strInstructions}
        </p>
        `
        document.querySelector('#output').insertAdjacentHTML('afterbegin', html)

    }))
}

apiButton.addEventListener('click', function(e) {
    e.preventDefault()
    document.getElementById('output').innerHTML = ""
    randomAPI()
    
})

function randomAPI() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => [data].map(meals => { 
            const mealsArray = meals.meals[0]
            
            const html = `
            <h2>
            Meal: ${meals.meals[0].strMeal}
            </h2>
            <img src = ${meals.meals[0].strMealThumb} width ="200" height="200"/>
            <p>
            ${mealsArray.strMeasure1} ${mealsArray.strIngredient1} <br>
            ${mealsArray.strMeasure2} ${mealsArray.strIngredient2}  <br>
            ${mealsArray.strMeasure3} ${mealsArray.strIngredient3} <br>
            ${mealsArray.strMeasure4} ${mealsArray.strIngredient4} <br>
            ${mealsArray.strMeasure5} ${mealsArray.strIngredient5} <br>
            ${mealsArray.strMeasure6} ${mealsArray.strIngredient6} <br>
            ${mealsArray.strMeasure7} ${mealsArray.strIngredient7} <br>
            ${mealsArray.strMeasure8} ${mealsArray.strIngredient8} <br>
            ${mealsArray.strMeasure9} ${mealsArray.strIngredient9} <br>
            ${mealsArray.strMeasure10} ${mealsArray.strIngredient10} <br>
            ${mealsArray.strMeasure11} ${mealsArray.strIngredient11} <br>
            ${mealsArray.strMeasure12} ${mealsArray.strIngredient12}  <br>
            ${mealsArray.strMeasure13} ${mealsArray.strIngredient13} <br>
            ${mealsArray.strMeasure14} ${mealsArray.strIngredient14} <br>
            ${mealsArray.strMeasure15} ${mealsArray.strIngredient15} <br>
            ${mealsArray.strMeasure16} ${mealsArray.strIngredient16} <br>
            ${mealsArray.strMeasure17} ${mealsArray.strIngredient17} <br>
            ${mealsArray.strMeasure18} ${mealsArray.strIngredient18} <br>
            ${mealsArray.strMeasure19} ${mealsArray.strIngredient19} <br>
            ${mealsArray.strMeasure20} ${mealsArray.strIngredient20} <br>
            </p>
            <h3 text - align="left">
            Instructions:
            </h3>
            <p text-align="left">
            ${mealsArray.strInstructions}
            </p>
            `

            console.log(mealsArray)

             document.querySelector('#output').insertAdjacentHTML('afterbegin', html)
            
    }))
    
    }


