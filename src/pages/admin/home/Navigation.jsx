import '../../../asset/admin/css/style.css'
import Content from './Content'

const Navigation = () => {
    return (
        <>
            <div className="wrapper">   
                <nav id="sidebar">
                    <div className="title">Side Menu</div>
                    <ul className="list-items">
                        <li><a href="#"><i className="fas fa-home"></i>Dashboard</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Vehicle</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Brand</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Customer</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Employee</a></li>
                        <li><a href="#"><i className="fas fa-home"></i>Transaction</a></li>
                    </ul>
                </nav>
            </div>
            <Content/>
        </>
    )
}

export default Navigation