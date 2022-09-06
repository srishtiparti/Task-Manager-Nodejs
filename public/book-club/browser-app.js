const btn = document.querySelector('.submit-btn')
const loadingDOM = document.querySelector('.loading-text')
const bookname = document.querySelector('.task-input')
const tasksDOM = document.querySelector('.tasks')
const loadingTextDOM = document.querySelector('.loading-text')
const formAlertDOM = document.querySelector('.form-alert')
const deleteBtn = document.querySelector('.delete-btn')

/***************************   Fetch all the books from database    ****************************************/

const showBooks = async() => {

    // making the containerwith text "loading...." visible
    // using axios for async http req  


    loadingDOM.style.visibility = 'visible'
    try {
        const {
            data: { books },
        } = await axios.get("/api/v1/books")
        if (books.length < 1) {
            tasksDOM.innerHTML = "<h5>No items in the list </h5>"
            loadingDOM.style.visibility = 'hidden'
            return
        }
        const allbooks = books.map((book) => {
            const { read: completed, _id: taskID, name } = book
            return `<div class='single-task ${completed && 'task-completed'}'>
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class= 'task-links'>
            <!-- edit link -->
              <a href="task.html?id=${taskID}"  class="edit-link">
              <i class="fas fa-edit"></i>
              </a>
              <!-- delete btn -->
              <button type="button" class="delete-btn" data-id="${taskID}">
              <i class="fas fa-trash"></i>
              </button>
              </div>
            </div>`
        }).join('')
        tasksDOM.innerHTML = allbooks
    } catch (error) {
        tasksDOM.innerHTML = "<h5>Something went wrong, Please try again Later</h5>"
    }
    loadingDOM.style.visibility = 'hidden'
}
showBooks()

/***************************   Post element in database using form   ****************************************/

btn.addEventListener('click', async(e) => {
    e.preventDefault()
    const bname = bookname.value
    try {
        await axios.post('/api/v1/books', { name: bname })
        showBooks()
        bookname.value = ''
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = 'Success,Book Added'
    } catch (error) {
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = 'Error, Please try again'
    }
    setTimeout(() => {
        formAlertDOM.style.display = 'none'
        formAlertDOM.classList.remove('text-success')
    }, 3000)
})

/***************************   Deleting book from database    ****************************************/
// 

tasksDOM.addEventListener('click', async(e) => {
    if (e.target.parentElement.classList.contains('delete-btn')) {
        // get id that needs to be delete from parent
        const id = e.target.parentElement.dataset.id
        try {
            await axios.delete(`api/v1/books/${id}`)
            showBooks()
            formAlertDOM.style.display = 'block'
            formAlertDOM.textContent = 'Book Deleted'
        } catch (error) {
            formAlertDOM.style.display = 'block'
            formAlertDOM.textContent = 'Delete Failed, Please try again'
        }
        setTimeout(() => {
            formAlertDOM.style.display = 'none'
            formAlertDOM.classList.remove('text-success')
        }, 3000)
    }

})