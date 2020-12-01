// Your code goes here

//--------------Adding dark mode--------------
//create button for darkmode
let darkButton = document.createElement('button');
darkButton.textContent = "Dark Mode";
darkButton.addEventListener('mouseOver', function(){
    darkButton.style.backgroundColor = "darkgrey";
})

darkButton.addEventListener('click', function(){
    console.log("you clicked a button")
    document.querySelector('body').style.backgroundColor = '#262626';
    let ps = document.querySelectorAll('p')
    document.querySelector('h1').style.color='white';
    let hs = document.querySelectorAll('h4')
    ps.forEach(s=>{s.style.color = 'white'});
    hs.forEach(s=>{s.style.color="lightgray"});
    document.querySelector('footer').style.backgroundColor = "grey";
    document.querySelector('header').style.backgroundColor = 'grey';
    let hstwo = document.querySelectorAll("h2")
    hstwo.forEach(s=>{s.style.color="lightgray"});
    let nava = document.querySelectorAll('nav a');
    nava.forEach(a=>{a.style.color = "darkgray"});
})

document.querySelector('nav').appendChild(darkButton);