console.log("script loaded")

let currentTheme = getTheme();


// initial -->


document.addEventListener("DOMContentLoaded", () => {
    changeTheme();
  });


//TODO 
function changeTheme() {

    // set to web page

    changePageTheme(currentTheme, "");



    // set the listner to change theme button

    const changeThemeButton = document.querySelector('#theme_change_button');

    
    

    changeThemeButton.addEventListener("click", (event) => {

        let oldTheme = currentTheme;

        // remove the current theme


        if (currentTheme === "dark") {
            // theme = light
            currentTheme = "light";
        }
        else {
            // theme = dark
            currentTheme = "dark";
        }

        changePageTheme(currentTheme, oldTheme);
    })
}

//set theme to localstorage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}



//get theme from local storage

function getTheme() {
    let theme = localStorage.getItem("theme");

    return theme ? theme : "light";
}

// Change current page theme

function changePageTheme(theme, oldTheme) {



    // update in local storage
    setTheme(currentTheme);

    // remove the old theme
    if(oldTheme){
        document.querySelector('html').classList.remove(oldTheme);
    }

    // set the current theme  
    document.querySelector('html').classList.add(theme);


    // change  text on button

    document.querySelector('#theme_change_button').querySelector("span").textContent = theme == 'light' ? 'dark' : 'light';

}