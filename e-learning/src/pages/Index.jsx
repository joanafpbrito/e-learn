import Login from "../components/Login";
import Ad180 from "../components/Ad180";
import Admin from "../components/admin";
import User from "../components/User";
import Teacher from "../components/Teacher";


function Index() {
let loggedIn = false;
let content;
localStorage.getItem("role") ? loggedIn=true : loggedIn=false; 

if ( localStorage.getItem("role")=== '180') {
    content = <Ad180/>;
} 
 if ( localStorage.getItem("role")=== 'admin') {
    content = <Admin/>;
} 
 if (localStorage.getItem("role") === 'user') {
    content = <User/>;
} 
 if ( localStorage.getItem("role")=== 'teacher') {
    content = <Teacher/>;
}

console.log(content);
console.log(loggedIn);

 
    return(
        <>

        {loggedIn ? content : <Login/> }
        
        </>
    );
}

export default Index;