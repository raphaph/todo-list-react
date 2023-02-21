import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import styles from './Mytasks.module.css'
import { Tasks } from './Tasks'
import { Check, PlusCircle } from 'phosphor-react';
import nextId from "react-id-generator";



export function Mytasks() {
    const [isCheckedState, setIsChecked] = useState(false);
    const [tasks, setNewTask] = useState([
        {
            id: "id0",
            text: "Adicione uma tarefa",
            isChecked: isCheckedState,
        }
    ]);
    const [countTask, setCountTask] = useState(tasks.length)
    const [textTask, setNewTextTask] = useState('');
    const [countCheckedState, setCountCheckedState] = useState(0)

    function onChangeTextTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTextTask(event.target.value);
    }

    function createNewTask(event: FormEvent) {
        event.preventDefault();
        const newId = nextId()       
        setNewTask([...tasks, 
            {
                "id": newId,
                "text": textTask,
                "isChecked": isCheckedState,
            }
        ])
        setCountTask(countTask + 1);
        console.log(`Task created with id: ${newId}`)
    }

    function deleteTask(id: string) {
        const tasksWithoutDeleted = tasks.filter(task => {
            return task.id !== id;
        })
        setNewTask(tasksWithoutDeleted)
        setCountTask(countTask - 1);
        console.log('Task deteled')
    }

    function countChecked(isChecked: boolean) {
        
        if (countCheckedState >= 0) {
            if (isChecked) {
                setCountCheckedState(countCheckedState + 1)
            } else if (!isChecked) {
                setCountCheckedState(countCheckedState - 1)
            }
        } 
        
    }

    function deleteAndSubtract(isChecked: boolean) {
        if (isChecked || !isChecked) {
            if (countCheckedState > 0 && isChecked)
                setCountCheckedState(countCheckedState - 1)
        }
    }

    
    function noTasks() {
        if (tasks.length == 0) {
            return (
                <div className={styles.noTasks}>
                    <img src="src\assets\clipboard.png" alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )
        }
    }

    return (
        <>
            <form
                onSubmit={createNewTask}>
                <div className={styles.newTask}>
                    <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeTextTask} required></input>
                    <div className={styles.buttonSubmit}>
                        <button type="submit">Criar <PlusCircle size={16} className={styles.icon} /></button>
                    </div>
                </div>
            </form>
            <div className={styles.myTasks}>
                <div className={styles.lineInfo}>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <p>{countTask}</p>
                    </div>
                    <div className={styles.finishedTasks}>
                        <strong>Concluídas</strong>
                        <p>{countCheckedState} de {countTask}</p>
                    </div>
                </div>
                <div className={styles.areaTasks}>
                    {tasks.map(task => {
                        return (
                            <Tasks
                                id={task.id}
                                key={task.id}
                                text={task.text}
                                isChecked={task.isChecked}
                                onDeleteTask={deleteTask}
                                onChecked={countChecked}
                                onDeleteAndSubtract={deleteAndSubtract}
                            />
                        )
                    })}

                </div>

            </div>
            {noTasks()}
        </>

    )
}