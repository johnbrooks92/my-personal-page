
const solutionsObject = {
  "solutions":
        [
            {
                "route": "https://sahelpinghands.org",
                "projectName": "Helping Hands",
                "description": "Full-Stack Capstone project rendered utilizing SpringBoot, Java, Spring Security, Thymeleaf and SASS/SCSS.",
                "projectType": "Donation Forum/Database Rendering",
                "creator": "Lening Rodas, Christian Parker, Evan Mead, John Brooks",
                "solutionId": "1"
            },
            {
                "route": "",
                "projectName": "WeatherNova",
                "description": "Weather app made using API calls to the OpenWeatherMap API; Renders instant 7-day forecast upon location selection.",
                "projectType": "API Calls and MapRendering",
                "creator": "John Brooks",
                "solutionId": "2"
            },
            {
                "route": "https://github.com/SFW-FreeDevelopment/LordOfFrames",
                "projectName": "Lord Of Frames",
                "description": "Bot created for use in Discord Server using web API via .NET 6/C# and MongoDB. Outputs instant data responses for real-time command requests.",
                "projectType": "System Programming",
                "creator": "Christopher Plummer, John Brooks",
                "solutionId": "3"
            },
            {
                "route": "",
                "projectName": "Six Degrees of Sandler",
                "description": "API Requests using IMDB to enable CRUD, Search functionality within local database.",
                "projectType": "API/Querying Functionality",
                "creator": "John Brooks, Christian Parker",
                "solutionId": "4"
            },
            {
                "route": "",
                "projectName": "NE: 2",
                "description": "Turn-based fighting system demo using HTML, CSS, JS and jQuery. Expanded roster from 2 to 30 characters utilizing JSON object for enhanced fighting mechanics.",
                "projectType": "Fully Static Video Game",
                "creator": "John Brooks",
                "solutionId": "5"
            },
            {
                "route": "",
                "projectName": "Boom! Roasted",
                "description": "Coffee Ordering Project. Michael Scott-themed.",
                "projectType": "Static Ordering Functionality",
                "creator": "John Brooks, Connor Wulf",
                "solutionId": "6"
            }
        ]
}

solutionsObject.solutions.forEach(res => {
    let route = res.route;
    let projectName = res.projectName;
    let descrip = res.description;
    let projectType = res.projectType;
    let creator = res.creator;


    var card = document.createElement("div");
    card.className = "card";
    var projectTitle = document.createElement("div");
    projectTitle.className = "projectTitle";
    var title = document.createElement("h5");
    title.className = "title";
    card.appendChild(projectTitle);
    projectTitle.appendChild(title);
    title.insertAdjacentHTML('beforeend', projectName);

    var info = document.createElement("div");
    info.className = "projectInfo";
    var desc = document.createElement("p");
    var typing = document.createElement("p");
    var author = document.createElement("p");
    card.appendChild(info);
    info.appendChild(desc);
    info.appendChild(typing);
    info.appendChild(author);
    desc.insertAdjacentHTML('beforeend', descrip);
    typing.insertAdjacentHTML('beforeend', projectType);
    author.insertAdjacentHTML('beforeend', creator);

    var bar = document.createElement("bar");
    bar.className = "bar";
    var emptybar = document.createElement("emptybar");
    emptybar.className = "emptybar";
    var filledbar = document.createElement("filledbar");
    filledbar.className = "filledbar";

    var a = document.createElement("a");
    a.href = route;
    a.appendChild(card);
    var deck = document.createElement("div");
    deck.className = "col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4";
    deck.appendChild(card);
    var deckBox = document.createElement("div");
    deckBox.className = "col-3";
    deckBox.appendChild(deck);
    var deckBoxContainer = document.createElement("div");
    deckBoxContainer.className = "container-fluid row";
    deckBoxContainer.appendChild(deckBox);
    var body = document.getElementById("body");
    body.insertAdjacentHTML('beforeend', projectName);
});

// <div className="container-fluid row">
//
//     <div className="col-3">
//         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4" id="deck">
//
//         </div>
//     </div>
// </div>

// var input = document.getElementById("btn");
// var inputVal = "";
// if (input) {
//     inputVal = input.value;
// }
// <a href="@project.Route" style="text-decoration:none" target="_blank">
//     <div className="card">
//         <div className="projectTitle">
//             <h5 className="title">@project.Name</h5>
//         </div>
//         <div className="projectInfo">
//             <p>@project.Description</p>
//             <p>@project.Type</p>
//             <p>Developers: @project.Creator</p>
//         </div>
//         <div className="bar">
//             <div className="emptybar"></div>
//             <div className="filledbar"></div>
//         </div>
//     </div>
// </a>