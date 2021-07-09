import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
// TODO: Should call GET endpoint

const todos = await axios.get('/api/todos')
return todos

}

// TODO: Should call POST endpoint
const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    const newTodo = {
        ...todoBody,
        status: false
    }
    const todo = await axios.post('/api/todos', newTodo)
    return todo
}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    const newTodo = {
        ...todoBody,
        status: true
    }
    const todo = await axios.put(`/api/todos/${todoBody._id}`, newTodo)
    return todo
    
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {

    const res = await axios.delete(`/api/todos/${id}`)
    return res

// TODO: Should call DELETE endpoint
}

export { getTodos, addTodo, updateTodo, deleteTodo }
