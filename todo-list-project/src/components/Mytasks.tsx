import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import styles from './Mytasks.module.css'
import { Tasks } from './Tasks'
import { PlusCircle } from 'phosphor-react';


export function Mytasks() {
    
    const [tasks, setNewTask] = useState([]); 
    const [countTask, setCountTask] = useState(tasks.length)
    const [textTask, setNewTextTask] = useState('');
    const [countChecked, setCountChecked] = useState(0)
    

    function onChangeTextTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTextTask(event.target.value);
    }

    function createNewTask(event: FormEvent) {
        event.preventDefault();
        setNewTask([...tasks, textTask])
        setCountTask(countTask + 1);
        console.log('Task created')
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleted = tasks.filter(task => {
            return task !== taskToDelete;
        })
        setNewTask(tasksWithoutDeleted)
        setCountTask(countTask - 1);
        console.log('Task deteled')
    }
    

    return (
        <>
        <div className={styles.newTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeTextTask}></input>
            <div className={styles.buttonSubmit}>
                <button type="submit" onClick={createNewTask}>Criar <PlusCircle size={16} className={styles.icon}/></button>
            </div>
        </div>
        <div className={styles.myTasks}>
            <div className={styles.lineInfo}>
                <div className={styles.createdTasks}>
                <strong>Tarefas criadas</strong>
                <p>{countTask}</p>
                </div>
                <div className={styles.finishedTasks}>
                    <strong>Concluídas</strong>
                    <p>0 de {countTask}</p>
                </div>
            </div>
            <div className={styles.areaTasks}>
                {tasks.map(task => {
                    return (
                        <Tasks 
                        key={task}
                        text={task}
                        onDeleteTask={deleteTask}
                        />

                    )    
                })}
            </div>
        </div>
        </>
        
    )
}