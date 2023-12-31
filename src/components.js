sessionStorage.getItem('projects'); 
sessionStorage.getItem('inbox'); 
sessionStorage.removeItem('projects');
const contentHeading = document.querySelector('.content-heading');
let addTasks = document.querySelector('.add-tasks');
const sessionProjects = JSON.parse(sessionStorage.getItem('projects'));
const projects = []; 
if(sessionProjects !== null) {
    for(let i = 0; i < sessionProjects.length; i++) {
        projects.push(sessionProjects[i]); 
    }
}
const inboxTaskArray = []; 
const sessionInbox = JSON.parse(sessionStorage.getItem('inbox')); 
if(sessionInbox !== null) {
    for(let i = 0; i <  sessionInbox.length; i++) {
        inboxTaskArray.push(sessionInbox[i]);
    }
}
const inboxPage = document.querySelector('#inbox'); 
const projectList = document.querySelector('.projects-list'); 

const task = (title,dueDate) => {
    let status = 'incomplete'; 
    return {title,dueDate, status}  
}

class Page{
    constructor(name, array ) {
        this.name = name; 
        this.array = array; 
    }
}

function emptyElement(item) {
    const element = document.querySelector(`.${item.className}`); 
    while(element.firstElementChild) {
        element.removeChild(element.firstElementChild); 
    }
}

function addProjectForm() {
    const projectList = document.querySelector('.projects-list');
    const parent = document.querySelector('.add-projects-container'); 
    const addProjects = document.querySelector('.add-projects');
    addProjects.style.display = "none"; 
    const projectForm = document.createElement('form'); 
    projectForm.classList.add('addition-form'); 
    projectForm.style.display = 'grid'; 
    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text'); 
    const buttons = document.createElement('div'); 
    buttons.classList.add('buttons'); 
    const submitProjectButton = document.createElement('button'); 
    submitProjectButton.setAttribute('type', 'button'); 
    submitProjectButton.classList.add('add-button'); 
    submitProjectButton.textContent = 'Add Project'; 
    const cancelProjectButton = document.createElement('button'); 
    cancelProjectButton.setAttribute('type', 'button'); 
    cancelProjectButton.classList.add('cancel-button'); 
    cancelProjectButton.textContent = 'Cancel'; 
    buttons.appendChild(submitProjectButton); 
    buttons.appendChild(cancelProjectButton); 
    projectForm.appendChild(projectName); 
    projectForm.appendChild(buttons); 
    parent.appendChild(projectForm); 

    submitProjectButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        emptyElement(projectList); 
        const newProject = new Page(projectName.value, []); 
        projects.push(newProject);
        sessionStorage.removeItem('projects'); 
        sessionStorage.setItem('projects', JSON.stringify(projects)); 
        projectForm.style.display = 'none'; 
        addProjects.style.display = "flex"; 
        renderProjectList(); 
    })

    cancelProjectButton.addEventListener('click', function() {
        projectForm.style.display = 'none'; 
        addProjects.style.display = 'flex'; 
    })
    
}

function renderProjectList() {
    
    const projectList = document.querySelector('.projects-list'); 
    for(let project of projects) {
        const projectCard = document.createElement('li'); 
        projectCard.classList.add('project-card'); 
        projectCard.setAttribute('data-key', projects.indexOf(project)); 
        projectCard.textContent = `${project.name}`;
        projectList.appendChild(projectCard); 
        projectCard.addEventListener('click', function() {
            pageLoader(projectCard.getAttribute('data-key')); 
        })
        inboxPage.addEventListener('click', function() {
            pageLoader(); 
            
        })
    }
}

function pageLoader(index) {
    const contentGrid = document.querySelector('.content-grid'); 
    emptyElement(projectList); 
    renderProjectList();
    emptyElement(contentGrid);
    if(index) {
        renderArray(projects[index].array); 
    }else {
        renderArray(inboxTaskArray); 
    }
    let addTasks = document.querySelector('.add-tasks'); 
    let newAddTasks = addTasks.cloneNode(true); 
    addTasks.replaceWith(newAddTasks);
    if(index) {
        contentHeading.textContent = projects[index].name; 
        newAddTasks.addEventListener('click', function() {
            addTaskForm(projects[index].array); 
        })
        renderArray(projects[index].array); 
    }else if(!index) {
        contentHeading.textContent = "Inbox"; 
            newAddTasks.addEventListener('click', function() {
            addTaskForm(inboxTaskArray); 
        })
    }
}

function addTaskForm(array) {
    const parent = document.querySelector('.content-top'); 
    const addTasks = document.querySelector('.add-tasks'); 
    addTasks.style.display = "none";

    const taskForm = document.createElement('form');
    taskForm.style.display = "grid"; 
    taskForm.classList.add('addition-form'); 
    const inputTitle = document.createElement('input'); 
    inputTitle.setAttribute('type', 'text'); 
    const inputDate = document.createElement('input'); 
    inputDate.setAttribute('type', 'date');
    const addButton = document.createElement('button'); 
    addButton.classList.add('add-button'); 
    addButton.textContent = "Add"; 
    addButton.setAttribute('type', 'submit'); 
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button'); 
    cancelButton.textContent = "Cancel"; 
    cancelButton.classList.add('cancel-button'); 
    const buttons = document.createElement('div'); 
    buttons.classList.add('buttons'); 
    buttons.appendChild(addButton); 
    buttons.appendChild(cancelButton); 
    parent.appendChild(taskForm); 
    taskForm.appendChild(inputTitle);
    taskForm.appendChild(inputDate); 
    taskForm.appendChild(buttons); 

    cancelButton.addEventListener('click', function() {
        taskForm.style.display = "none"; 
        addTasks.style.display = "flex"; 
    })

    addButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        const newTask = task(inputTitle.value, inputDate.value); 
        
        taskForm.style.display = "none";             
        addTasks.style.display = "flex"; 
        if(array === inboxTaskArray) {
            addTaskToLibrary(inboxTaskArray, newTask); 
            sessionStorage.removeItem('inbox'); 
            sessionStorage.setItem('inbox', JSON.stringify(inboxTaskArray));

        }else {
            inboxTaskArray.push(newTask); 
            sessionStorage.removeItem('inbox'); 
            sessionStorage.setItem('inbox', JSON.stringify(inboxTaskArray));
            addTaskToLibrary(array, newTask); 
            removeTaskFromDOM(array); 
        }
    })
}

function addTaskToLibrary(array, task) {
    array.push(task); 
    sessionStorage.removeItem('projects'); 
    sessionStorage.setItem(`projects`, JSON.stringify(projects));
    renderArray(array); 
}

function removeTaskFromArray(array1, index) {
    array1.splice(index, 1); 
    sessionStorage.removeItem('projects'); 
    sessionStorage.removeItem('inbox'); 
    sessionStorage.setItem('projects', JSON.stringify(projects)); 
    sessionStorage.setItem('inbox', JSON.stringify(inboxTaskArray)); 

}

function removeTaskFromDOM(array) {
    const radios = document.querySelectorAll('.complete-task');

    radios.forEach((radio) => radio.addEventListener('click', function() {
        const radios = document.querySelectorAll('.complete-task'); 
        renderArray(array); 
    }))
}

function renderArray(array) {

    const contentGrid = document.querySelector('.content-grid'); 
    emptyElement(contentGrid); 
    for(let item of array) {
        const taskDisplay = document.createElement('div'); 
        taskDisplay.classList.add("task-display"); 
        taskDisplay.setAttribute('data-key', `${array.indexOf(item)}`); 
        const taskTitle = document.createElement('span'); 
        taskTitle.textContent = item.title; 
        taskTitle.classList.add('task-title'); 
        const taskDisplayRightSide = document.createElement('div'); 
        taskDisplayRightSide.classList.add('task-display-right-side'); 
        const priority = document.createElement('div'); 
        const taskDueDate = document.createElement('span');
        taskDueDate.textContent = item.dueDate; 
        const statusRadio = document.createElement('input'); 
        statusRadio.setAttribute('type', 'radio'); 
        statusRadio.setAttribute('value', 'complete'); 
        statusRadio.setAttribute('class', 'complete-task'); 
        statusRadio.setAttribute('data-key', `${array.indexOf(item)}`);
        statusRadio.addEventListener('click', function() {
            removeTaskFromArray(array, array.indexOf(item)); 
            renderArray(array);           
        })   
        contentGrid.appendChild(taskDisplay); 
        taskDisplay.appendChild(taskTitle); 
        taskDisplayRightSide.appendChild(taskDueDate); 
        taskDisplayRightSide.appendChild(statusRadio); 
        taskDisplay.appendChild(taskDisplayRightSide); 

    }
} 

export {renderArray, addTaskForm, contentHeading, removeTaskFromDOM, addProjectForm, pageLoader}; 
