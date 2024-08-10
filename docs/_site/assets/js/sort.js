if(!localStorage.sortDirection)
	localStorage.sortDirection = 1;
if(!localStorage.sortProp)
	localStorage.sortProp = "updated";

document.getElementById("sort-" + localStorage.sortProp).classList.add("btn-secondary");
document.getElementById("sort-" + localStorage.sortProp).classList.remove("btn-outline-secondary");
const dirButton = document.getElementById("sort-direction");
dirButton.innerText = parseInt(localStorage.sortDirection) ? dirButton.dataset.descending : dirButton.dataset.ascending;
sort();

function toggleSortDirection() {
	localStorage.sortDirection ^= 1;
	document.getElementById("sort-direction").innerText = parseInt(localStorage.sortDirection) ? dirButton.dataset.descending : dirButton.dataset.ascending;
	sort();
}

function sort(prop) {
	if(prop) {
		document.getElementById("sort-" + prop).classList.remove("btn-outline-secondary");
		document.getElementById("sort-" + prop).classList.add("btn-secondary");
		document.getElementById("sort-" + localStorage.sortProp).classList.add("btn-outline-secondary");
		document.getElementById("sort-" + localStorage.sortProp).classList.remove("btn-secondary");
		localStorage.sortProp = prop;
	}

	const cards = document.getElementsByClassName("card");
	const sorted = [];
	for(i = 0; i < cards.length; i++)
		sorted.push(cards[i]);
	sorted.sort(function(l, r) {
		if(localStorage.sortProp == "stars") // integers
			return (((l.dataset[localStorage.sortProp] - r.dataset[localStorage.sortProp]) < 0) ^ localStorage.sortDirection) ? -1 : 1;
		else // strings
			return ((l.dataset[localStorage.sortProp].toLowerCase() < r.dataset[localStorage.sortProp].toLowerCase()) ^ localStorage.sortDirection) ? -1 : 1;
	});
	const container = document.getElementById("card-container");
	container.innerHTML = "";
	sorted.forEach(function(r) {
		const col = document.createElement("div");
		col.classList = "col mb-3";
		col.appendChild(r);
		container.appendChild(col);
	});
}
