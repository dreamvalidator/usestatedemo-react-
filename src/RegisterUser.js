import { useState } from "react"

export default function RegisterUser(){
    const[users]=useState([
        {userId:'user1'},
        {userId:'user2'},
        {userId:'user3'},
        {userId:'user4'}
    ]);
    const [userMsg,setUserMsg]=useState('');
    const[isUserValid,setUserValid]= useState(false)

    function handleUserValid(e){
        for(var user of users){
        if(user.userId==e.target.value){
            setUserMsg('user id  is not available');
            setUserValid(false);
            break;
        }
        else{
            setUserMsg('user id is available');
            setUserValid(true);
        }
        }
    }
    return(
        <div className="container-fluid">
        <dl>
        <dt>userId</dt>
        <dd><input type="text" onKeyUp={handleUserValid} /></dd>
        <dd className={(isUserValid==true)?'text-success':'text-danger'}>{userMsg}</dd>
        </dl>
        </div>
    
)
}