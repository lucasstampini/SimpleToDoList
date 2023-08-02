const btnAdd = document.getElementById('plusButton')
const task = document.getElementById('addToDo')
const containerTasks = document.querySelector('.container-tasks')



btnAdd.addEventListener('click', function(){
    const container = document.createElement('div')
    container.classList.add('container')
    const pTask = document.createElement('p')
    pTask.classList.add('task')
    const dBtn = document.createElement('div')
    dBtn.classList.add('buttons')
    const btnTick = document.createElement('button')
    btnTick.classList.add('tick')
    const btnErase = document.createElement('button')
    btnErase.classList.add('erase')
    const tick = document.createElement('i')
    tick.classList.add('gg-check')
    const erase = document.createElement('i')
    erase.classList.add('gg-trash')
    containerTasks.appendChild(container)
    container.appendChild(pTask)
    container.appendChild(dBtn)
    dBtn.appendChild(btnTick)
    dBtn.appendChild(btnErase)
    btnTick.appendChild(tick)
    btnErase.appendChild(erase)
    pTask.innerText = task.value
    task.value = ''
    
    btnTick.addEventListener('click', function(){
        if(btnTick.parentElement.previousElementSibling.style.textDecoration == 'line-through'){
            btnTick.parentElement.previousElementSibling.style.textDecoration = 'none'
        }
        else{
            btnTick.parentElement.previousElementSibling.style.textDecoration = 'line-through'
        }
    })
    
    btnErase.addEventListener('click', function(){
        container.remove()
        pTask.remove()
        dBtn.remove()
        btnTick.remove()
        btnErase.remove()
    })

    
})




