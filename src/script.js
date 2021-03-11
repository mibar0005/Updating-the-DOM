import "./styles.css";
/**
  Write the addheadings() function here
*/

const addHeadings = () => {
  
  const articleTags = document.querySelectorAll('article');

  for(let article of articleTags) {

    let content = article.innerText;
    console.log(content);
    const headerTwo = document.createElement('h2');
    headerTwo.innerText=content;
    article.appendChild(headerTwo);

  }
}

/**
  Write the styleTutorialsAndArticles() function here
*/

function styleTutorialsAndArticles() {
   let elements = document.querySelectorAll(".articles article");
   
   elements.forEach(element => {
     if (element.innerText.includes("Article")){
       element.classList.add("article");
     } else {
       element.classList.add("tutorial");
     }
   })
  
//    for(let article of Array.from(elements.values())) {
//     if(article.innerText.includes("Article")){
//       article.classList.add(".article");
//       console.log(article.innerHTML);
//      }
     
//    else if(article.innerText.includes("Tutorial")) {
//     article.classList.add(".tutorial"); 
//     console.log(article.innerText);
//    }
//   }
//  return elements;
 }

/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials(){
  
  const newElement = document.createElement("section")
  newElement.classList.add("tutorials")
  document.querySelector(".container").appendChild(newElement)
  
  //Selected the tutorial container 
  const tutorialContainer = 
  document.querySelector('.tutorials');
  //Select all of the articles that contain .tutorial
  const tutorials = document.querySelectorAll('.tutorial');
  //Run a loop to append each child to the tutorial
    tutorials.forEach( tutorial => tutorialContainer.appendChild(tutorial));
}




/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();