
import football from "./football.json"
import templatefootball from "./template-football.hbs"
console.log(templatefootball);



const listRef = document.querySelector(".list")
// listRef.innerHYML = templatefootball({football})
function createitemsmarkup (array) {
    const item = array.map(({name, image, team, position, rating}))
    return `<li class="item">
        <img src="${image}" alt="${name}" class="images">
        <h2 class="title">${name}</h2>
        <h3 class="subtitle">${team}</h3>
        <p class="text">${position}</p>
        <p class="number">${rating}</p>
    </li>`
    .join("")
    listRef
}