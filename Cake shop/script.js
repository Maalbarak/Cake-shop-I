var year = new Date().getFullYear();
var date = `coding with &copy; maalbaracksempai ${year}`;
document.getElementsByTagName('span')[21].innerHTML= date;



const searchIcon=document.querySelector('.search-icon');
const searchForm=document.querySelector('.search-form');
searchIcon.addEventListener("click",() => { 
	searchForm.classList.add("active");
	cartItemsContainer.classList.remove("active");
});


const cartIcon=document.querySelector('.cart-icon');
const cartItemsContainer=document.querySelector('.cart-items-container');
cartIcon.addEventListener("click",() => { 
	cartItemsContainer.classList.add("active");
	searchForm.classList.remove("active");
});
