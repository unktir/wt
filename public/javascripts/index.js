
let nav_menu = document.getElementsByClassName("nav-main__link")
let menu_element;
let href = window.location.href;
let page = href.split("/").pop();

switch(page){
    case "":
        menu_element = nav_menu[0];
        break;
    case "gallery":
        menu_element = nav_menu[1];
        break;
    case "projects":
        menu_element = nav_menu[2];
        break;
    case "certifications":
        menu_element = nav_menu[3];
        break;
    case "contact":
        menu_element = nav_menu[4];
        break;
    default:
        menu_element = NULL;
}

menu_element.style.cssText = `
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;