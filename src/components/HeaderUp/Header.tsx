// import settings from "../assets/settings.png"
// import notification from '../assets/notification.png'
import { Link } from 'react-router-dom'
import './Header-icon.css'

export default function HeaderUp() {
    return (
        <header className='header'>
            <div className='text-logo'>
                Devicorn
            </div>
            <section className='icons-select'>
                <Link to="/about">
                    О сайте
                </Link>
                <Link to="/posts">
                    Посты
                </Link>
                
            </section>
            
        </header>
    )
}