import { useState } from 'react'
import styles from './Mytasks.module.css'
import { Tasks } from './Tasks'

const tasks = [
    {
        id: 1,
        text: "Atualizar a query de merchant experience",
        isFinished: true
    },
    {
        id: 2,
        text: "Desenvolver dashboard com elementos UX usando html css.",
        isFinished: true
    },
    {
        id: 3,
        text: "Enviar email detalhado do projeto de migração do db",
        isFinished: false
    }
  ]


export function Mytasks() {
    
    const [countTask, setCountTask] = useState(tasks.length)  
    
    return (
        <div className={styles.myTasks}>
            <div className={styles.lineInfo}>
                <div className={styles.createdTasks}>
                <strong>Tarefas criadas</strong>
                <p>{countTask}</p>
                </div>
                <div className={styles.finishedTasks}>
                    <strong>Concluídas</strong>
                    <p>2 de {countTask}</p>
                </div>
            </div>
            <div className={styles.areaTasks}>
                {tasks.map(task => {
                    return (
                        <Tasks 
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            isFinished={task.isFinished}
                        />
                    )
                })}
            </div>
        </div>
    )
}