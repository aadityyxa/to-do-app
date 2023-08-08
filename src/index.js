import './style.css'
import {inbox} from './pages/inbox.js'
import {addTaskForm, addTaskToLibrary, renderArray, contentHeading, addProjectForm, pageLoader} from './components';  

contentHeading.textContent = 'Inbox'; 
const addTasks = document.querySelector('.add-tasks'); 

function component() {
    const addProjects = document.querySelector('.add-projects'); 

    // addTasks.addEventListener('click', function() {
    //     addTaskForm(); 
    // })
    // landingPage(); 
    pageLoader(); 

    addProjects.addEventListener('click', function() {
        addProjectForm(); 
        
    })
}
    
inbox();

component(); 