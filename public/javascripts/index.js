
let nav_menu = document.getElementsByClassName("nav-main__link")
let menu_element;
let path = window.location.pathname;
let page = path.split("/").pop().split(".").shift();

switch(page){
    case "":
        menu_element = nav_menu[0];
        break;
    case "gallery-page":
        menu_element = nav_menu[1];
        break;
    case "projects-page":
        menu_element = nav_menu[2];
        break;
    case "certifications-page":
        menu_element = nav_menu[3];
        break;
    case "contact-page":
        menu_element = nav_menu[4];
        break;
    default:
        menu_element = nav_menu[0];
}

menu_element.style.cssText = `
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;