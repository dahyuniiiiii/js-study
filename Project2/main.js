//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check버튼을 클릭하는 순간 true false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로
//진행중 end 탭을 누르면, 언더바가 이동한다
//end탭은, 끝난 아이템만, ing탭은 진행중인 아이템만
//all탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input"); //html에서 아이디로 들고와주세요
let addButton = document.getElementById("add-button");
let taskList =[] //여기에 아이템 추가
addButton.addEventListener("click",addTask); //버튼에 이벤트주고 addTask함수 불러오기

function addTask(){
    let task = { //객체
        id: randomIdGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    }
    taskList.push(task);
    render();
}



function render(){ //tasklist를 그려줌
    let resultHTML ="";
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete==true){
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button onclick="deleteTask('${taskList[i].id}')">delete</button>
            </div>
        </div>`;
        }else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button onclick="deleteTask('${taskList[i].id}')">delete</button>
            </div>
        </div>`;
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for(let i=0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete; //반대편 value가져옴
            break;
        }
    }
    render();
}
function deleteTask(id){
    for(let i=0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    render();
}
function randomIdGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}