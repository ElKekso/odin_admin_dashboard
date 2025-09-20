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
    icons.push(document.createElement("i"));
    icons.push(document.createElement("i"));
    icons.push(document.createElement("i"));

    icons.forEach(element => {
        icon_container.appendChild(element);
    });

    article.appendChild(heading);
    article.appendChild(p);
    article.appendChild(icon_container);

    return article;
}

projects_list = document.querySelector(".projects");

projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));