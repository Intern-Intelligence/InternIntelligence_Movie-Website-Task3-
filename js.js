let form=document.querySelector('form');
let images=document.querySelector('.images');
let loadervar=document.getElementsByClassName('container')[0];
let navbar=document.getElementsByClassName('navbar')[0];
let banner=document.getElementsByClassName('banner')[0];
let footer=document.getElementsByClassName('footer-container')[0];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let querry=form.querySelector('input').value;
    console.log(querry);
    API(querry);
    form.querySelector('input').value=""
    
})
 async function API(querry){
    const req=await fetch(`https://api.tvmaze.com/search/shows?q=${querry}`)
 let movies=await req.json();
 console.log(movies);
 
   makeimages(movies);
 
}
function makeimages(movies) {
   for (let movie of movies) {
       let imageSrc = movie.show.image ? movie.show.image.medium : "default.jpg"; // Default image agar null ho
       
       const move_pics = `
       <div class="insert2">
           <div class="insert">
               <a href="${movie.show.officialSite || '#'}" target="_blank" class="rd1">
                   <img src="${imageSrc}" alt="Poster">
               </a>
               <h2>${movie.show.name || "No Title Available"}</h2>
               <h3>${movie.show.premiered || "No Release Date"}</h3>
               <p class="details">${movie.show.summary || "No Summary Available"}<br></p>
               <a href="${movie.show.officialSite || '#'}" class="rd">Official Site</a>
           </div>
       </div>
       `;

       images.insertAdjacentHTML("afterbegin", move_pics);
   }
   querry.value = "";
}

// loadervar.hidden=true
let body=document.getElementById('rdj');
body.hidden=true
function showspinner(){

  body.style.display="none"
  banner.style.display="none"
  navbar.style.display="none"
  footer.style.display="none"
  loadervar.style.display="block"
 
}
function hidespinner(){
  banner.style.display="block"
  footer.style.display="block"
  navbar.style.display="block"
loadervar.style.display="none"
    body.style.display="block"
}
showspinner();
setTimeout(hidespinner,4000);
