import { PlusCircle }  from 'phosphor-react'
import styles from './InputTask.module.css'


export function NewTask() {
    return (
        <div className={styles.newTask}>
            <input type="text" placeholder="Adicione uma nova tarefa"></input>
            <div className={styles.buttonSubmit}>
                <button title="inputNewTask" type="submit">Criar <PlusCircle size={16} className={styles.icon}/></button>
            </div>
        </div>
    )   
}