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

projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));