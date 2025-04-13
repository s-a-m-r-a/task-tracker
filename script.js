// --empty input--
window.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");

    const listInput = document.createElement("input");
    listInput.setAttribute("type", "text");
    listInput.classList.add("list-input");

    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clear-btn");
    clearBtn.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.append(listInput, clearBtn);
    taskList.append(listItem);
});

// --sort button--
let incOrder = true;

document.getElementById("sort-btn").addEventListener("click", () => {
    const taskList = document.getElementById("task-list");
    const sortBtn = document.getElementById("sort-btn");

    const tasks = [...taskList.children];

    tasks.sort( (a,b) => {

        const inputA = a.querySelector("input");
        const inputB = b.querySelector("input");

        const textA = inputA ? inputA.value.trim().toLowerCase() : a.textContent.trim().toLowerCase();
        const textB = inputB ? inputB.value.trim().toLowerCase() : b.textContent.trim().toLowerCase();

        return incOrder ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });

    tasks.forEach( task => 
        taskList.append(task));

    sortBtn.classList.toggle("inc", !incOrder);
    sortBtn.classList.toggle("dec", incOrder);

    incOrder = !incOrder;
});

// --clear button--
document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("input").value = "";
});

// --add button--
document.getElementById("add-btn").addEventListener("click", () => {
    let inputBox = document.getElementById("input");
    let taskList = document.getElementById("task-list");

    let listItem = document.createElement("li");

    if (inputBox.value.trim() === "") {
        let listInput = document.createElement("input");
        listInput.setAttribute("type", "text");
        listInput.classList.add("list-input");

// clear-btn for list inputs
        let clearBtn = document.createElement("button");
        clearBtn.classList.add("clear-btn");
        clearBtn.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.append(listInput, clearBtn);
        
    } else {
        
        listItem.textContent = inputBox.value;

        let clearBtn = document.createElement("button");
        clearBtn.classList.add("clear-btn");
        clearBtn.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.append(clearBtn);
    }

    taskList.append(listItem);
    inputBox.value = ""; 
});