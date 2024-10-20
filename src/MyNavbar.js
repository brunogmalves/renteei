import './MyNavbar.css';
//             
function MyNavbar() {
    return(
        <div id="nav_container">
            <a href='/home' id='main_logo'><img src='./logo.png' width={150} height={150}></img></a>
            <ul id='nav_ul'>
                <li id='nav_li'><a href="/home" id='nav_a'>Home</a></li>
                <li id='nav_li'><a href='/reservation' id='nav_a'>Reservation</a></li>
                <li id='nav_li'><a href="/support" id='nav_a'>Support</a></li>
                <li id='nav_li'><a href="/contact" id='nav_a'>Contact</a></li>       
            </ul>
            <a href="/login" id='user_login'><img src='./user.svg' /></a>
        </div>
    )
}

export default MyNavbar