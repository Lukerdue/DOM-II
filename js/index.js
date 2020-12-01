// Your code goes here

//--------------Adding dark mode------- event listen count 3(ones just real small)
//create button for darkmode
let darkButton = document.createElement('button');
darkButton.textContent = "Dark Mode";
darkButton.addEventListener('mouseOver', function(){
    darkButton.style.backgroundColor = "darkgrey";
})

darkButton.addEventListener('click', function(e){
    e.stopPropagation();
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

darkButton.addEventListener('dblclick', function(){
    document.querySelector('body').style.backgroundColor = "white";
    let ps = document.querySelectorAll('p')
    document.querySelector('h1').style.color='black';
    let hs = document.querySelectorAll('h4')
    ps.forEach(s=>{s.style.color = 'black'});
    hs.forEach(s=>{s.style.color="black"});
    document.querySelector('footer').style.backgroundColor = "";
    document.querySelector('header').style.backgroundColor = '';
    let hstwo = document.querySelectorAll("h2")
    hstwo.forEach(s=>{s.style.color="black"});
    let nava = document.querySelectorAll('nav a');
    nava.forEach(a=>{a.style.color = "black"});

})

document.querySelector('nav').appendChild(darkButton);

//------------keypress------ COUNT: 4
window.addEventListener('keydown', event=>{
    if(event.key = "b"){
        document.querySelector('.content-destination img').src = "https://images.unsplash.com/photo-1601056645961-53cc55864cb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80";
    }
})

//-----------------------------wheel COUNT: 5
document.querySelector('#headerImg').addEventListener('wheel', function(){
    document.querySelector('#headerImg').src = "https://images.unsplash.com/photo-1560404695-ae3c5fcbf6be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80";
})

//---------------resize
window.addEventListener('resize', function(){
    console.log('resiezed')
    document.querySelector('#blue').style.border = "5px solid gray"
})

//---------------load
window.addEventListener('load', function(){
    window.alert('Hi Idk what to do now so here have this');
})

//-----------scroll---------COUNT: 8
window.addEventListener('scroll', function(){
    if(document.body.scrollTop > 50|| document.documentElement.scrollTop > 50){
        console.log('scroll triggered')
        document.querySelector('header').style.display = "none"
    }
})
//Focus / blur -------------------------
let email = document.createElement('input')
email.type = "text";
email.style.margin= "10px";
email.lable = "Join our email list"

email.addEventListener('focus', function(e){
e.target.style.boxShadow = "5px 2px 3px gray"
})
email.addEventListener('blur', function(e){
    e.target.style.boxShadow = ""
})

document.querySelector('footer').appendChild(email)

//nesting two similar events for propogation purposes
window.addEventListener('click', function(e){
    document.body.style.backgroundColor = "dodgerblue";
})

//stop nav items from refreshing the page
let navLinks = document.querySelectorAll('nav a')
for(i=0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
    })
}