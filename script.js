var typed = new Typed(".multiple-text", {
    strings: ["a marketer.", "a writer.", "an editor.", "a strategist.", "a leader.", "a team member.", "your next hire."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

//PORTFOLIO//
const accordion = document.getElementsByClassName('contentBx');

for (i=0; i<accordion.length;i++) {
    accordion[i].addEventListener('click', function(){
     this.classList.toggle('active')   
    })
}