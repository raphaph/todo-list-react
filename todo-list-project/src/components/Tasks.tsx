import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css'

interface taskOnly {
    text: string;
    onDeleteTask: (task: string) => void;
} 

export function Tasks({ text, onDeleteTask }: taskOnly) {

    function handleDeleteTask() {
        onDeleteTask(text);
    }

    return (
        <div className={styles.cardTask}>
            <div className={styles.checkTask}>
                <label className={styles.container}>
                    <input id="inputCheckbox" title="checkbox" type="checkbox"></input>
                    <div className={styles.checkmark}></div>
                </label>
                <p className={styles.taskText}>{text}</p>
            </div>
            <button title="trashButton" onClick={handleDeleteTask}><Trash size={19} className={styles.trash}/></button>
        </div>
    )
}