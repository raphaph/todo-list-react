import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css'

interface taskOnly {
    id: string;
    text: string;
    onDeleteTask: (task: string) => void;
} 

export function Tasks({ id, text, onDeleteTask }: taskOnly) {

    function handleDeleteTask() {
        onDeleteTask(text);
    }
    
    const [isChecked, setIsChecked] = useState(false);
    
    function checkboxTag() {    
        if (isChecked == false) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
        console.log(isChecked ? 'Task finished' : 'Task unchecked')
    }

    return (
        <div className={styles.cardTask}>
            <div className={styles.checkTask}>
                <label className={styles.container}>
                    <input 
                        id="inputCheckbox" 
                        title="checkbox" 
                        type="checkbox" 
                        onChange={checkboxTag} 
                        checked={isChecked}>
                    </input>
                    
                    <div className={styles.checkmark}></div>
                </label>
                <p className={isChecked ? styles.checkedText : styles.uncheckedText}>{text}</p>
            </div>
            <button 
                title="trashButton" 
                onClick={handleDeleteTask}>
                <Trash size={19} 
                className={styles.trash}/>
            </button>
        </div>
    )
}