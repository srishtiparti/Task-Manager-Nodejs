const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
console.log(id)
const showTask = async() => {
    try {
        const {
            data: { book },
        } = await axios.get(`/api/v1/books/${id}`)
        const { _id: bookID, completed, name } = book

        taskIDDOM.textContent = bookID
        taskNameDOM.value = name
        tempName = name
        if (completed) {
            taskCompletedDOM.checked = true
        }
    } catch (error) {
        console.log(error)
    }
}

showTask()