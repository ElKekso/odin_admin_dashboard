function createProjectBlock(heading_text, text) {
    item = document.createElement("li");

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

    item.appendChild(article);
    return item;
}

projects_list = document.querySelector(".projects > ul");

projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));
projects_list.appendChild(createProjectBlock("Super Cool Project", "Wazzuuuppppp"));