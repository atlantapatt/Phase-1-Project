const groceries = document.getElementsByClassName('groceries')[0]
const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems')
const userInput = document.getElementById('userInput')
const deletion = document.getElementById('deletion')
const apiButton = document.getElementById("API button")
const userSearch = document.getElementById('userSearch')
const searchGlyph = document.getElementById('magGlass')

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

function randomAPI(event) {
    // event.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => fetchedData(data.meals))
    
}

function fetchedData(apiData) {
    const apih2 = document.createElement('h2')
    apih2.innerHTML = apiData
    console.log(apiData)
}
