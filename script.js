function createProjectBlock(heading_text, text) {
    article = document.createElement("article");
    article.setAttribute("class", "project_block");
    
    heading = document.createElement("h2");
    heading.textContent = heading_text;

    p = document.createElement("p");
    p.textContent = text;

    icon_container = document.createElement("div");
    //replace icons with actual fontawesome icons
    icons = [];
    icons.push(getIcon("fa-regular", "fa-star", "fa-xl"));
    icons.push(getIcon("fa-regular", "fa-eye", "fa-xl"));
    icons.push(getIcon("fa-solid", "fa-share-from-square", "fa-xl"));

    

    icons.forEach(element => {
        icon_container.appendChild(element);
    });

    article.appendChild(heading);
    article.appendChild(p);
    article.appendChild(icon_container);

    return article;
}

function getIcon(source, icon_name, sizing) {
    icon = document.createElement("i");

    icon.classList.add(source);
    icon.classList.add(icon_name);
    icon.classList.add(sizing);
    
    return icon;
}

projects_list = document.querySelector(".projects");

projects_list.appendChild(createProjectBlock("Take over the Government", "Taking over the government is going to help sustain our goals in the long run"));
projects_list.appendChild(createProjectBlock("Learn Dragon Riding", "An important skill for a skilled marksman and makes the difference between pure brutes and an elite force"));
projects_list.appendChild(createProjectBlock("Aquire a superior vocabulary", "To earn the trust of the fellow britishman in the British East India Company"));
projects_list.appendChild(createProjectBlock("Burger Pommes auf was?", "Burger Pommes auf die EINS mach die Pommes in den Burger rein McDonalds geht zu jeder Zeit Burger Pommes auf die EINS"));
projects_list.appendChild(createProjectBlock("Apo R-E-Ds Pläne an Mimi leaken", "Den einzig Echten mal wieder hacken und gucken was er wieder für Schabernack getrieben hat ;)"));
projects_list.appendChild(createProjectBlock("Mhhh lecki Spezi", "Spezi Spezi Spezi lecki lecki lecki bitte gib mir mehr ich brauche diesen Lebenssaft"));