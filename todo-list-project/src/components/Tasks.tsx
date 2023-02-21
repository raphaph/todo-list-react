import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css'

interface taskOnly {
    id: string;
    text: string;
    isChecked: boolean;
    onDeleteTask: (task: string) => void;
    onChecked: (box: boolean) => void;
    onDeleteAndSubtract: Function;
} 

export function Tasks({ id, text, onDeleteTask, onChecked, onDeleteAndSubtract }: taskOnly) {

    function handleDeleteTask() {
        onDeleteTask(id);
        onDeleteAndSubtract(isChecked)
    }
    
    const [isChecked, setIsChecked] = useState(false);
    
    function checkboxTag() {    
        if (isChecked == false) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
        console.log(isChecked ? 'Task finished' : 'Task unchecked')
        onChecked(!isChecked);
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