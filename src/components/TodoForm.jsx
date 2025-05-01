import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

  const [Value, setValue] = useState("");
  const [Category, setCategory] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!Value || !Category) return;
    addTodo(Value, Category);
    setValue("");
    setCategory("");
  }

  return <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
             type="text" 
             placeholder="Digite o título" 
             value={Value}
             onChange={(e) => setValue(e.target.value)}/>
            <select value={Category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
  </div>;
  
}

export default TodoForm;
