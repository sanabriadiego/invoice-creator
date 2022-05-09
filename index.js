const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const washItemEl = document.getElementById("wash-item")
const mowItemEl = document.getElementById("mow-item")
const pullItemEl = document.getElementById("pull-item")
const removeWashEl = document.getElementById("remove-wash")
const removeMowEl = document.getElementById("remove-mow")
const removePullEl = document.getElementById("remove-pull")
const paymentDetailsEl = document.getElementById("payment-details")
const totalAmountEl = document.getElementById("total-amount")
const sendBtnEl = document.getElementById("send-btn")

let taskArray =[]
let totalCount = 0

function addWashItem(){
    taskArray.push(1)
    totalCount += 10
    renderTasks()
    washBtn.removeEventListener("click", addWashItem)
}

function addMowItem(){
    taskArray.push(2)
    totalCount += 20
    renderTasks()
    mowBtn.removeEventListener("click", addMowItem)
}

function addPullItem(){
    taskArray.push(3)
    totalCount += 30
    renderTasks()
    pullBtn.removeEventListener("click", addPullItem)
}

function removeWashItem(){
    removeTask(1)
    totalCount -= 10
    renderTasks()
    washItemEl.style.display = "none"
    washBtn.addEventListener("click", addWashItem)
}

function removeMowItem(){
    removeTask(2)
    totalCount -= 20
    renderTasks()
    mowItemEl.style.display = "none"
    mowBtn.addEventListener("click", addMowItem)
}

function removePullItem(){
    removeTask(3)
    totalCount -= 30
    renderTasks()
    pullItemEl.style.display = "none"
    pullBtn.addEventListener("click", addPullItem)
}

function updateCost(){
    totalCount === 0 ? paymentDetailsEl.textContent = "" : paymentDetailsEl.textContent = "We accept cash, credit card, or PayPal"
    totalAmountEl.textContent = `$${totalCount}`
}

function removeTask(elem) {
    const index = taskArray.indexOf(elem);
    if (index > -1) {
        taskArray.splice(index, 1);
    }
}

function renderTasks(){
    
    for(let i=0; i<taskArray.length; i++){
        if(taskArray[i] === 1){
            washItemEl.style.display = "flex"
            
        }else if(taskArray[i] === 2){
            mowItemEl.style.display = "flex"

        }else {
            pullItemEl.style.display = "flex"
        }
    }

    updateCost()
}

function sendInvoice(){
    removeWashItem()
    removeMowItem()
    removePullItem()
    taskArray.length = 0
    totalCount = 0
    updateCost()
}

washBtn.addEventListener("click", addWashItem)
mowBtn.addEventListener("click", addMowItem)
pullBtn.addEventListener("click", addPullItem)
removeWashEl.addEventListener("click", removeWashItem)
removeMowEl.addEventListener("click", removeMowItem)
removePullEl.addEventListener("click", removePullItem)
sendBtnEl.addEventListener("click", sendInvoice)


