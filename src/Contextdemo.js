import  React ,{ useState , useContext} from "react";

const userDetailsContext =React.createContext(null);
export default function ContextDemo(){ 
         
    const [userDetails, setUserDetails] = useState({
        userName: "jhon",
        Email: "jon@email.com"       
    });
    return(

        <userDetailsContext.Provider value={userDetails} >
             <div className="container-fluid">
            <h2>Site Index {userDetails.userName}</h2>
           <HeaderComponent />
              
        </div>
             </userDetailsContext.Provider>
       


    )

    
}

function HeaderComponent(){

    const userDetails= useContext(userDetailsContext);
    return(
        <div className="bg-info text-white" style={({height: "150px"})}>
            <h2>Home {userDetails.userName}</h2>
            <NavBarComponent />
        </div>
    )
}
function NavBarComponent(){
var userDetails= useContext(userDetailsContext);
    return(
        <div className="btn-toolbar bg-dark text-white justify-content-between">
        <div className="btn-group">
            <button className="btn btn-dark">Amazon</button>
        </div>
        <div className="btn-group">
            <button className="btn btn-dark">{userDetails.Email}</button>

        </div>
        </div>
    )
}