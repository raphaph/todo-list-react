import { Trash } from 'phosphor-react';
import { useState } from 'react'
import { Checkbox } from './Checkbox'
import styles from './Tasks.module.css'

interface taskProps {
    key: number;
    id: number;
    text: string;
    isFinished: boolean;
}



export function Tasks({ text, isFinished }: taskProps ) {    
    
    function deleteItem() {
        console.log('delete')
    }

    return (
        <div className={styles.cardTask}>
            <div className={styles.checkTask}>
                <Checkbox />
                <p>{text}</p>
            </div>
            <Trash size={19} checked={isFinished} className={styles.trash} onClick={deleteItem}/>
        </div>
    )
}