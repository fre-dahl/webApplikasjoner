
// This is so much bad practice, haha. Just forced it to work.
// I wanted to make the listeners and elements dynamic, but time prevented me.
// the mess works. refactor later.

//Modal
const modal = document.getElementById("todoModal");
//Buttons modal
const openModalBtn = document.getElementById("createTodoBtn");
const closeModalBtn = document.getElementById("modalClose");
const submitTodoBtn = document.getElementById("submitTodoBtn");
//Buttons cards
const completeBtn1 = document.getElementById("completeBtn1");
const completeBtn2 = document.getElementById("completeBtn2");
const completeBtn3 = document.getElementById("completeBtn3");
const deleteBtn1 = document.getElementById("deleteBtn1");
const deleteBtn2 = document.getElementById("deleteBtn2");
const deleteBtn3 = document.getElementById("deleteBtn3");
//Card content
const cardContent1 = document.getElementById("cardContent1");
const cardContent2 = document.getElementById("cardContent2");
const cardContent3 = document.getElementById("cardContent3");
//Table
const table = document.getElementById("tableEntry");
//InputText
const inputTitle = document.getElementById("inputTitle");
const inputDesc = document.getElementById("inputDesc");
const inputAuthor = document.getElementById("inputAuthor");
//Listeners
openModalBtn.addEventListener("click",openModal);
closeModalBtn.addEventListener("click",closeModal);
submitTodoBtn.addEventListener("click",createCard);
completeBtn1.addEventListener("click", complete1);
completeBtn2.addEventListener("click", complete2);
completeBtn3.addEventListener("click", complete3);
deleteBtn1.addEventListener("click", delete1);
deleteBtn2.addEventListener("click", delete2);
deleteBtn3.addEventListener("click", delete3);
window.addEventListener("click",clickOutsideModal);

const todoCards = new Cards();
const todoTable = new Table();


function complete1() {
    todoCards.complete(0);
}
function complete2() {
    todoCards.complete(1);
}
function complete3() {
    todoCards.complete(2);
}

function delete1() {
    todoCards.delete(0);
}
function delete2() {
    todoCards.delete(1);
}
function delete3() {
    todoCards.delete(2);
}

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    inputTitle.value = "";
    inputDesc.value = "";
    inputAuthor.value = "";
}

function clickOutsideModal(event) { 
    if(event.target == modal) closeModal();
}

function createCard(){
    let title = inputTitle.value;
    let desc = inputDesc.value;
    let author = inputAuthor.value;
    todoCards.newTodo(new Todo(title,desc,author));
    closeModal();
}

function Table(){

    this.todoArr = [];

    this.add = function(t) {
        this.todoArr.push(t);
        this.newEntry(t);
    }

    this.sort = function() {

    }

    this.newEntry = function(t){

        let title = document.createElement('td');
        let desc = document.createElement('td');
        let author = document.createElement('td'); 
        let date = document.createElement('td'); 

        title.textContent = t.title;
        desc.textContent = t.description;
        author.textContent = t.author;
        date.textContent = t.dateOfCompletion;

        let entry = document.createElement('tr');
        entry.appendChild(title);
        entry.appendChild(author);
        entry.appendChild(desc);
        entry.appendChild(date);

        table.appendChild(entry);
    }
}

function Cards(){
    const viewMax = 3;
    const queueMax = 10;
    this.numCards = 0;
    this.inView = [];
    this.inQueue = [];

    this.newTodo = function(t) {
        if(!(this.inQueue.length >= queueMax)) {
            this.inView.unshift(t);
            this.numCards++;
            if(this.inView.length > viewMax ) {
                this.inQueue.unshift(this.inView.pop());
            }
            this.updateHtml();
        }
    }

    this.updateHtml = function() {
    
        if (cardContent1.hasChildNodes()) {
            cardContent1.removeChild(cardContent1.childNodes[0]);
        }
        if (cardContent2.hasChildNodes()) {
            cardContent2.removeChild(cardContent2.childNodes[0]);
        }
        if (cardContent3.hasChildNodes()) {
            cardContent3.removeChild(cardContent3.childNodes[0]);
        }
        for (i = 0; i < this.inView.length; i++) {
            let title = document.createElement('h1');
            let desc = document.createElement('p');
            let author = document.createElement('p');

            let e = this.inView[i];
            title.textContent = e.title;
            desc.textContent = e.description;
            author.textContent = e.author;

            let container = document.createElement('div');
            container.appendChild(title);
            container.appendChild(desc);
            container.appendChild(author);

            switch(i) {
                case 0: cardContent1.appendChild(container); break;
                case 1: cardContent2.appendChild(container); break;
                case 2: cardContent3.appendChild(container); break;
            }
        }

    }

    this.complete = function(i) {
        if(this.inView[i] === undefined) return;
        todo = this.inView.splice(i,1)[0];
        todo.transfer();
        this.numCards--;
        if(this.inQueue.length > 0)this.inView.push(this.inQueue.shift());
        this.updateHtml();
    }

    this.delete = function(i) {
        if(this.inView[i] === undefined) return;
        this.inView.splice(i,1);
        this.numCards--;
        if(this.inQueue.length > 0)this.inView.push(this.inQueue.shift());
        this.updateHtml();
    }

}

function Todo(title, description, author) {
    this.description = description;
    this.author = author;
    this.title = title;
    this.isComplete = false;
    this.dateOfCompletion = "";
  
  
    this.transfer = function() {
      if (!this.isComplete) {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let sep = ".";
        let s = d.toString() + sep +
                m.toString() + sep +
                y.toString();
        this.dateOfCompletion = s;
        this.isComplete = true;
        
        todoTable.add(this);
      }
    
    }
  }