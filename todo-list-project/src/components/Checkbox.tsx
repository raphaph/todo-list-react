import styles from './Checkbox.module.css'

export function Checkbox() {
    return (
        <label className={styles.container}>
            <input title="checkTask" type="checkbox"></input>
                <div className={styles.checkmark}></div>
        </label>
    )
}