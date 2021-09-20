const btnToggle = document.querySelector("#toggle-button")
const sidebar = document.querySelector('#sidebar')


function toggle(e){    
    sidebar.classList.toggle('open')
}


btnToggle.addEventListener('click', toggle)