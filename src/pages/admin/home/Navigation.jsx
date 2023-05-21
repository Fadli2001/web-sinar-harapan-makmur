import '../../../asset/admin/css/style.css'
import { useAuth } from '../../../hooks/UseAuth'
import Content from './Content'

const Navigation = () => {
    const { logout } = useAuth()
    return (
        <>
            <div className="wrapper-admin">
                <nav id="sidebar-admin">
                    <div className="title">Side Menu</div>
                    <ul className="list-items-adm-nav">
                        <li><a href="#"><i className="fas fa-home"></i>Dashboard</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Vehicle</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Brand</a></li>
                        <div className='fixed-bottom mb-3 mx-4'>
                            <button onClick={() => logout()} className='btn btn-outline-light'>Logout</button>
                        </div>  
                    </ul>
                </nav>
            </div>
            <Content />
        </>
    )
}

export default Navigation