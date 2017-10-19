const totalItems = CheeseDatabase.length
const itemsPerPage = 2
const numberOfPages = Math.ceil(totalItems / itemsPerPage)
const paginationEl = document.getElementById("cheesePaginator")
const cheeseEl = document.getElementById("cheeseDisplayer")

// Build the DOM string for the pagination links in the footer
let paginationString = "<ul>"
for (var i = 0; i < numberOfPages; i++) {
    paginationString += ` <li><a class="cheese-page" id="page-${i+1}" href="#">${i+1}</a></li>`
}
paginationString += "</ul>"

// Update the DOM with the unordered list we just built
paginationEl.innerHTML = paginationString


/*
    Function that will be invoked each time the user clicks
    on one of the pagination links at the bottom of the page
*/
function produceCheese (event) {
    // Clear the cheeses first before displaying the new ones
    cheeseEl.innerHTML = ""

    // Which number did the user click on?
    const pageNumber = parseInt(event.target.innerHTML)

    // Determine which items to display by slicing the array
    const itemsToDisplay = CheeseDatabase.slice(
        (pageNumber - 1) * itemsPerPage, 
        pageNumber * itemsPerPage
    )

    // Display a <section> representation of each data object
    for (let i = 0; i < itemsToDisplay.length; i++) {
        let currentCheese = itemsToDisplay[i];
        cheeseEl.innerHTML += `
        <section class="${currentCheese.consistency}">
        <h1>${currentCheese.type}</h1>
        <h4>Is it smelly? ${currentCheese.smelly}</h4>
        <h4>It is ${currentCheese.consistency} to the touch</h4>
        </section>
        `
    }
}

// Get the array of pagination anchor tags we added to the DOM
const cheeseLinks = document.getElementsByClassName("cheese-page")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < cheeseLinks.length; j++) {
    let thisCheeseEl = cheeseLinks[j];
    thisCheeseEl.addEventListener("click", produceCheese, false);
}












