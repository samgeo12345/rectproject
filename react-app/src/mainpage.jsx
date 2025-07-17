import './mainpage.css'
import Counter from './counter.jsx'
import Book from './book.jsx'
function Mainpage(){
    return(
        <>
        <div className="mainpage">
            <nav className="Header">
            <div className="maincontent">
                <input type="text" placeholder="Search"/>
                <i className="fas fa-search"></i>
            </div>
            </nav>
            <Book/>
        </div>
        </>
    )
}
export default Mainpage