
{// Navbar
const navabr2 = document.getElementsByClassName("navbar2");
const hamburger = document.getElementById("hamburger");
window.addEventListener("resize", () => {
    if (screen.width > 700)
        navabr2[0].style.display = "none";
})
hamburger.addEventListener("click", () => {
    if (navabr2[0].style.display != "block" && screen.width < 700) {
        navabr2[0].style.display = "block";
        hamburger.src = "./assets/close.png";
    } else {
        navabr2[0].style.display = "none";
        hamburger.src = "./assets/hamburger.png";
    }

})
}


{// Projects
let projectname = ['SHIFT', 'ROCKVED', 'PingWave','Akelebecar', 'Todo', 'RSM', 'ISTE', 'Memory Lane', 'Grey Texts'];
let projectimg = ['./assets/projects/big-sale.gif', './assets/projects/rocket-launch.gif', './assets/projects/vulcan-salute.gif', './assets/projects/jeep.gif', './assets/projects/checklist.gif', './assets/projects/supermarket.gif', './assets/projects/sailing.gif', './assets/projects/camera.gif', './assets/projects/lock.gif'];
let projectdescription = ['Your AI Designer', 'Wanna Learn Vedic Mathematics? Hop in', 'Your custom secure chatroom🤫', 'Reduce your carbonfootprint', 'To not get your work done on time', 'Manage your retail Store!', 'ISTE Events', 'Refresh your memories', 'Shhh! None knows!'];
const cardcontainer = document.getElementById("cardcontainer");
for (var i = 0; i < projectname.length; i++) {
    let card = document.createElement("div");
    let projectnameh1 = document.createElement("h1");
    let projectimgimg = document.createElement("img");
    let projectdescp = document.createElement("h3")

    card.className += "card ";
    projectnameh1.className += "projectname";
    projectimgimg.className += "projectimg";
    projectdescp.className += "projectdescription"

    projectnameh1.innerHTML = `${projectname[i]}`;
    projectimgimg.src = `${projectimg[i]}`;
    projectimgimg.alt = `${projectname[i]}`;
    projectdescp.innerHTML = `${projectdescription[i]}`;

    card.append(projectnameh1);
    card.append(projectimgimg);
    card.append(projectdescp);

    cardcontainer.append(card);
}
}

{//Experience
let exprole = ['Lead', 'Aiml Intern', 'Junior Web Developer', 'C Developer'];
let expcompany = ['Google Developer Student Clubs GMIT', 'DLithe', 'Zummit InfoLabs', 'DeCatalyst'];
let expduration = ['August 2023 - Present', 'August 2023 - September 2023', 'March 2022 - July 2022', 'February 2022 - April 2022'];
let expdescription = ['"The techie you need to inspire"', '"A sneak peek at Data Science"', '"Pilot web development Internship"', '"C Dev Internship, learning pointers"'];
let expimg = [ './assets/experience/gdsc.jpg', './assets/experience/dlithe.png', './assets/experience/zummit.png', './assets/experience/decatalyst.jpg'];

const experiencemaincontainer = document.getElementById("experiencemaincontainer");

for(var i=0; i< exprole.length; i++) {
    let experiencecard = document.createElement("div");
    experiencecard.className = "experiencecard";

    let expimgdiv = document.createElement("div");
    expimgdiv.className += "expimgdiv"; 

    let experienceimg = document.createElement("img");
    experienceimg.className += "experienceimg"
    experienceimg.src = `${expimg[i]}`

    let experiencerole = document.createElement("h1");
    experiencerole.className += "experiencerole";
    experiencerole.innerHTML = `${exprole[i]}`

    let experiencecompany = document.createElement("h3");
    experiencecompany.className += "experiencecompany";
    experiencecompany.innerHTML = `${expcompany[i]}`

    let experienceduration = document.createElement("h3");
    experienceduration.className += "experienceduration";
    experienceduration.innerHTML = `${expduration[i]}`

    let experiencedescription = document.createElement("h2");
    experiencedescription.className += "experiencedescription";
    experiencedescription.innerHTML = `${expdescription[i]}`

    expimgdiv.append(experienceimg)

    experiencecard.append(expimgdiv);
    experiencecard.append(experiencerole);
    experiencecard.append(experiencecompany);
    experiencecard.append(experienceduration);
    experiencecard.append(experiencedescription);

    experiencemaincontainer.append(experiencecard)
}
}
