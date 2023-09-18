import './style.css'
import {contentHeading, addProjectForm, pageLoader} from './components';  

contentHeading.textContent = 'Inbox'; 

function component() {
    const addProjects = document.querySelector('.add-projects'); 

    pageLoader(); 

    addProjects.addEventListener('click', function() {
        addProjectForm(); 
        
    })
}

component(); 