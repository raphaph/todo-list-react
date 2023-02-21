import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import styles from './Mytasks.module.css'
import { Tasks } from './Tasks'
import { PlusCircle } from 'phosphor-react';
import nextId from "react-id-generator";

export function Mytasks() {

    const [tasks, setNewTask] = useState(['Adicione uma tarefa', 'Remova uma tarefa', 'Remova todas as tarefas', 'De check em uma tarefa']);
    const [countTask, setCountTask] = useState(tasks.length)
    const [textTask, setNewTextTask] = useState('');

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
                        <p>0 de {countTask}</p>
                    </div>
                </div>
                <div className={styles.areaTasks}>
                    {tasks.map(task => {
                        const id = nextId()
                        return (
                            <Tasks
                                id={id}
                                key={id}
                                text={task}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}

                </div>

            </div>
            {noTasks()}
        </>

    )
}