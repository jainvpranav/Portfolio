
// Navbar
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


// Projects
let projectname = [
    'SHIFT',
    'ROCKVED',
    'PingWave',
    'Akelebecar',
    'Todo',
    'RSM',
    'ISTE',
    'Memory Lane',
    'Grey Texts'
];
let projectimg = [
    './assets/projects/big-sale.gif',
    './assets/projects/rocket-launch.gif',
    './assets/projects/vulcan-salute.gif',
    './assets/projects/jeep.gif',
    './assets/projects/checklist.gif',
    './assets/projects/supermarket.gif',
    './assets/projects/sailing.gif',
    './assets/projects/camera.gif',
    './assets/projects/lock.gif'
];
let projectdescription = [
    'Your AI Fashion Designer',
    'Wanna Learn Vedic Mathematics? Hop in',
    'Your custom secure chatroom🤫',
    'Reduce your carbonfootprint',
    'To not get your work done on time',
    'Manage your retail Store!',
    'ISTE Events',
    'Refresh your memories',
    'Shhh! None knows!'
];
// ⦾ ⦿
let projectlongdescription = [
    [//Shift
        // '⦾  Your AI Fashion Designer',
        // '⦾  Prompt your design to tailor your clothes', 
        // '⦾  PaLM for feature extraction', 
        // '⦾  Vision AI for Image Generation', 
        // '⦾  Custom Tailor support.',
        // "⦾  SHIFT is like your personal fashion genie! Just tell it what you want to wear, and it'll create a one-of-a-kind dress just for you, perfect for any occasion. It's like magic, but with AI!",
        // "⦾  Need More Ideas? Want It Made? No Problem: SHIFT can also show you similar dresses from around the web to spark your imagination. And when you're ready to make your dream dress a reality, it can even connect you with a real-life tailor to make it happen!"
        "Skills: Generative AI, PaLM API, Vision AI, Flask",
        "⦾  SHIFT: your AI fashion genie for unique, occasion-perfect dresses.",
        "⦾  Tell SHIFT your dream dress, and it creates the perfect design with AI magic.",
        "⦾  Need inspiration? SHIFT shows similar dresses for sparking ideas.",
        "⦾  Ready to make it real? SHIFT connects you with a tailor to bring your dream dress to life."
    ],
    [//Rockved
        // '⦿  Your Fun Mathematics Teacher', 
        // '⦿  Learn Vedic Mathematics through Games', 
        // '⦿  Learn About ISRO too!', 
        // '⦿  A fun journey of learning', 
        // '⦿  Games in Unity and JS', 
        // '⦿  Specialised Learning modules and Games'
        "Skills: HTML, CSS, JavaScript, Supabase(PostgreSQL)",
        "⦿  Learn Vedic Math with ROCKVED: interactive space-themed games built with Unity & JS.",
        "⦿  Conquer ancient math secrets while exploring wonders of ISRO.",
        "⦿  Seamless learning platform powered by HTML, CSS, and Supabase tracks progress and unlocks new challenges.",
        "⦿  Redefine education: master Vedic Math with cosmic games on ROCKVED!"
    ],
    [//PingWave
        // '⦾  A custom chatroom built form scratch', 
        // '⦾  Built using Supabase', 
        // '⦾  Responsive Design'
        "Skills: HTML, CSS, JavaScript, Supabase(PostgreSQL)",
        "⦾  Crafted a real-time chatroom with HTML, CSS, and JS for seamless conversations.",
        "⦾  Supabase powers the backend, storing messages and user data like a pro.",
        "⦾  Built to dive deep into Supabase and unleash its web app magic."
    ],
    [//Akelebecar
        // '⦿  An initiative towards reducing the carbon footprint', 
        // '⦿  Made using Php', 
        // '⦿  A model to be easy on the pocket of frequent travellers', 
        // '⦿  A model to reduce the traffic gradually in metro cities.',
        "Skills: HTML, CSS, JavaScript, PHP, MySQL",
        "⦿  Eco-carpool app: save cash, shrink your carbon footprint, and plant trees along the way.",
        "⦿  Connects drivers and riders, optimizes routes, and measures your environmental impact.",
        "⦿  Map Box and Distance Matrix API fuel seamless navigation and accurate calculations.",
        "⦿  Research-backed carbon footprint logic puts sustainability at the core."
    ],
    [//Todo
        // '⦾  A simple Todo List for daily use', 
        // '⦾  Made using Firebase', 
        // '⦾  Stepping stone in JS'
        "Skills: HTML, CSS, JavaScript, Firebase",
        "⦾  Tame your to-do list with this user-friendly app",
        "⦾  Firebase Realtime Database keeps tasks synced and updated in real time, so you're always in the know.",
        "⦾  Access your to-dos anytime, anywhere with Netlify hosting, keeping you on track from any device."
    ],
    [//RSM
        // '⦿  A Retail Store Management Software', 
        // '⦿  Made using MySQL, Php', 
        // '⦿  Hosted on 000WebHostApp'
        "Skills: HTML, CSS, JavaScript, PHP, MySQL, 000WebHost",
        "⦿  Streamlined inventory: Tackle stock with ease thanks to intuitive data entry and organization.",
        "⦿  Organized customers: Manage your customer base efficiently with dedicated tools and records.",
        "⦿  Powerful framework: Built on a robust foundation of skeleton, forms, and SQL for smooth operations.",
        "⦿  Empowered retailers: Take control of your small business with this all-in-one website solution."
    ],
    [//ISTE
        // '⦾  A simple informative website for a small ISTE event'
        "Skills: HTML, CSS, JavaScript",
        "⦾  20-hour blitz: Built a captivating static webpage in record time, proving efficiency on the fly.",
        "⦾  Visual feast: HTML, CSS, and JS conjured an eye-catching and interactive site, not just boring text.",
        "⦾  Engaged participants: Kept event attendees informed and excited with clear and captivating presentations.",
        "⦾  Information flow: Streamlined delivery of crucial event notifications, ensuring everyone stay in the loop."
    ],
    [//MemoryLane
        "Skills: HTML, CSS, JavaScript, Firebase",
        '⦿  A digital gallery for locking in the memories of our dear seniors'
    ],
    [//GreyTexts
        "Skills: HTML, CSS, JavaScript, Firebase",
        '⦿  A small site for sending out Anonymous messages for fun'
    ]
];
let projectlink = [
    'https://github.com/jainvpranav/SHIFT',
    'https://crewrockved.netlify.app/index1.html',
    'https://pingwave.netlify.app/',
    'https://github.com/jainvpranav/Akele-beCar',
    'https://todoapp232.netlify.app/',
    'https://retailstoremanagement.000webhostapp.com/',
    'https://jainvpranav.github.io/ISTE/',
    'https://memorylane23.netlify.app/',
    'https://greytexts.netlify.app/'
];
const cardcontainer = document.getElementById("cardcontainer");
for (var i = 0; i < projectname.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("onclick", `projectextracontainerbuild(${i})`);
    let projectnameh1 = document.createElement("h1");
    let projectimgimg = document.createElement("img");
    let projectdescp = document.createElement("h3")

    card.className += "card";
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
//Project Extra Container
const projectextracontainer = document.getElementById("projectextracontainer");
const projectextraclose = document.getElementById("projectextraclose");
const projectextraimg = document.getElementById("projectextraimg");
const projectextraname = document.getElementById("projectextraname");
const projectextradescription = document.getElementById("projectextradescription");
const projectextralink = document.getElementById("projectextralink");
const textdata = document.getElementById("textdata");

function projectextracontainerbuild(index) {

    // projectextracontainer.innerHTML = ``;
    projectextraimg.innerHTML = '';
    projectextraname.innerHTML = '';
    projectextradescription.innerHTML = '';
    projectextralink.innerHTML = '';
    projectextracontainer.innerHTML = `<img src="./assets/close.png" alt="Close" class="projectextraclose" onclick="closeprojectextracontainer()">`;

    let projectextraimgele = document.createElement("img");
    projectextraimgele.src = `${projectimg[index]}`;
    projectextraimgele.alt = `${projectname[index]}`;

    projectextraimg.append(projectextraimgele);

    let projectextranameh1 = document.createElement("h1");
    projectextranameh1.innerHTML = `${projectname[index]}`;

    projectextraname.append(projectextranameh1);

    let projectdescul = document.createElement("ul");
    for (var i = 0; i < projectlongdescription[index].length; i++) {
        let projectdescpli = document.createElement("li");
        projectdescpli.innerText = projectlongdescription[index][i];
        projectdescul.append(projectdescpli);
    }

    projectextradescription.append(projectdescul);


    let projectlinka = document.createElement("a");
    projectlinka.href = projectlink[index];
    projectlinka.setAttribute("target", "_blank");
    projectlinka.innerHTML = `Come Check this <img src="./assets/projects/external-link.png" alt="External Link">`;

    projectextralink.append(projectlinka);

    textdata.append(projectextraname)
    textdata.append(projectextradescription)
    textdata.append(projectextralink)

    projectextracontainer.append(projectextraimg);
    projectextracontainer.append(textdata);

    projectextracontainer.style.display = "flex";
}

function closeprojectextracontainer() {
    projectextracontainer.style.display = "none";
}


//Experience
let exprole = [
    'Lead',
    'Aiml Intern',
    'Junior Web Developer',
    'C Developer'
];
let expcompany = [
    'Google Developer Student Clubs GMIT',
    'DLithe',
    'Zummit InfoLabs',
    'DeCatalyst'
];
let expduration = [
    'August 2023 - Present',
    'August 2023 - September 2023',
    'March 2022 - July 2022',
    'February 2022 - April 2022'
];
let expdescription = [
    '"The techie you need to inspire, motivate and support."',
    '"A sneak peek at Data Science"',
    '"Pilot web development Internship"',
    '"C Dev Internship, learning pointers"'
];
let expimg = [
    './assets/experience/gdsc.jpg',
    './assets/experience/dlithe.png',
    './assets/experience/zummit.png',
    './assets/experience/decatalyst.jpg'
];
let explongdescription = [
    [//GDSC
        'Skills: Public Speaking, Motivator, Team Collaboration',
        'Dynamic GDSC Lead adept at fostering team collaboration and driving impactful tech initiatives to propel innovation and student engagement.',
        'Inspirational leader leveraging exceptional motivational skills to cultivate a high-performing community, while effectively managing and orchestrating diverse projects for maximum impact.'
    ],
    [//DLithe
        'Skills: Machine Learning Basics',
        'Developed and implemented machine learning algorithms to backtest stock trading strategies, including moving averages, momentum indicators, and technical analysis.',
        'Received Best Performer and Best Outgoing Intern awards for consistently delivering high-quality work, and demonstrating technical expertise.'
    ],
    [//Zummit
        'Skills: Web Development',
        'Designed captivating UIs in Figma by actively soliciting client input and delivering optimal solutions.',
        'Mastered Agile methodologies to consistently generate high-quality deliverables.',
        'Skillfully managed Git repositories for multiple projects, ensuring seamless version control and collaboration.',
        'Executed Scrum methodologies to gain deep insights into client needs and expedite project completion.'
    ],
    [//DeCatalyst
        'Skills: C',
        'Cultivated and nurtured productive relationships with team members, fostering a collaborative and supportive work environment.',
        'Spearheaded the technical planning and requirements gathering phases, guiding the team towards comprehensive and effective project strategies.'
    ]
]

const experiencemaincontainer = document.getElementById("experiencemaincontainer");
for (var i = 0; i < exprole.length; i++) {
    let experiencecard = document.createElement("div");
    experiencecard.className = "experiencecard";
    experiencecard.setAttribute("onclick", `expextracontainerbuild(${i})`);
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
//Experience Extra Container
const expextracontainer = document.getElementById("expextracontainer");
const expextraimg = document.getElementById("expextraimg");
const exptextdata = document.getElementById("exptextdata");

function expextracontainerbuild(index) {

    expextraimg.innerHTML = '';
    exptextdata.innerHTML = '';

    let expextraimgele = document.createElement("img");
    expextraimgele.src = `${expimg[index]}`;
    expextraimgele.alt = `${expcompany[index]}`;
    expextraimg.append(expextraimgele);
    
    let expextrah1 = document.createElement("h1");
    expextrah1.innerHTML = `${exprole[index]}`;
    let expextrah3 = document.createElement("h3");
    expextrah3.innerHTML = `${expcompany[index]}`;
    let expdescul = document.createElement("ul");
    for (var i = 0; i < explongdescription[index].length; i++) {
        let expdescpli = document.createElement("li");
        expdescpli.innerText = explongdescription[index][i];
        expdescul.append(expdescpli);
    }
    exptextdata.append(expextrah1);
    exptextdata.append(expextrah3);
    exptextdata.append(expdescul);
    

    expextracontainer.append(expextraimg);
    expextracontainer.append(exptextdata);
    expextracontainer.style.display = "flex";
}

const closeexpextracontainer = () => {
    expextracontainer.style.display = "none";
}


//Awards
