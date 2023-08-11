var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input")
var elFrom = document.querySelector(".hero__from");
var elTo = document.querySelector(".hero__to")
var elList = document.querySelector(".hero__list")





// +++++++++++++++++++++++++++++++++++
function rendermovies(data) {
elList.innerHTML = "";
  data.forEach(item => {
    let liElement = document.createElement("li")
    let imgElement = document.createElement("img");
    let h3Element = document.createElement("h3");
    // let descElement = document.createElement("p");
    let rankElement = document.createElement("span");
    let langElement = document.createElement("span");
    let linkElement = document.createElement("a");
    let wrapperElement = document.createElement("div")
    let wrapperrlElement =document.createElement("div")
    let categoriesElement = document.createElement("p")
    let categorWrapElement = document.createElement("div");
    let wrapperImgElement = document.createElement("div");


    imgElement.setAttribute("src", `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`);
    imgElement.setAttribute("alt", `${item.Title}`);
    imgElement.classList.add("hero__img-item")
    linkElement.setAttribute("href", `https://www.imdb.com/title/${item.imdb_id}/`);
    linkElement.setAttribute("target", `_blank`);


    rankElement.textContent = item.imdb_rating;
    h3Element.textContent = item.Title;
    // descElement.textContent = item.summary;
    langElement.textContent = item.language;
    categoriesElement.textContent = "#" + item.Categories;
    linkElement.textContent = "Watch now"


    liElement.classList.add("hero__item");
    wrapperElement.classList.add("hero__content-wrapper");
    h3Element.classList.add("hero__title-item")
    rankElement.classList.add("hero__rank-item");
    wrapperrlElement.classList.add("hero__wrappper-rank-lang");
    langElement.classList.add("hero__lang-item");
    categoriesElement.classList.add("hero__categor")
    categorWrapElement.classList.add("hero__categor-wrapper")
    linkElement.classList.add("hero__link-item")
    wrapperImgElement.classList.add("hero__zoom")

    wrapperImgElement.appendChild(imgElement);
    wrapperrlElement.append(rankElement, langElement);
    categorWrapElement.appendChild(categoriesElement);
    wrapperElement.append(wrapperrlElement ,h3Element, categorWrapElement);
    liElement.append(wrapperImgElement, wrapperElement, linkElement);
    elList.appendChild(liElement);

  });
}
rendermovies(movies)


  elForm.addEventListener("keyup", function(evt) {
    evt.preventDefault();
    
    let elInputValue = elInput.value.trim().toLowerCase();
    let result = movies.filter(function(item) {
      let search_name = item.Title.toLowerCase();
      return search_name.includes(elInputValue);
    })
    rendermovies(result)
  })

  elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let fromValue = elFrom.value;
    let toValue = elTo.value;


    let distance = movies.filter(function(item) {
      if (toValue == "") {
        return fromValue < item.movie_year;
      }
      return fromValue < item.movie_year && toValue > item.movie_year;
    })
    rendermovies(distance)
  })








