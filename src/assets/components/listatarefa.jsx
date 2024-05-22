import { useState } from "react";

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);
        setTarefas(novasTarefas)
    };

    return (
        <div className="conteiner">
            <h1 id="titulo">Lista De Tarefas</h1>
            <div className="box">
                <div className="input-container">
                    <input 
                        type="text" 
                        value={novaTarefa}
                        onChange={(e) => setNovaTarefa(e.target.value)}
                        placeholder="Atribuir uma nova Tarefa"
                    />
                    <button onClick={adicionarTarefa}>Atribuir</button>
                </div>
                <ul>
                    {tarefas.map((tarefa, index) =>
                    <li key={index}>
                        {tarefa}{''}
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ListaDeTarefas;
