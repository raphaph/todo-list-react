import style from './Header.module.css'
import logoTodo from '../assets/logo.png'

export function Header() {
    return (
        <div className={style.header}>
            <img src={logoTodo} alt="logo"/>
        </div>
    )
}