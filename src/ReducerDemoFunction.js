import { useReducer,useState,useEffect} from "react"; 
import { useFetchData } from "./useFetchData";  

var initialState= {likes: 0, dislikes: 0};
function reducer(state,action){

    switch(action.type){
        case 'like':
            return {likes : parseInt(state.likes +1), dislikes: state.dislikes};
            case 'dislike' :
                return {dislikes: parseInt(state.dislikes +1) ,likes : state.likes};

                default:
                    return state;
    }
}
export default function ReducerDemoFunction(){  
const [state,dispatch]= useReducer(reducer,initialState);
/*const[product,setProduct]=useState('');*/
const{data} =useFetchData('https://fakestoreapi.com/products/2');


/*useEffect(()=>{
    fetch("https://fakestoreapi.com/products/2")
    .then(response=>response.json())
    .then(data=>{
        setProduct(data);
    })
},[]) */

function handleLikeClick(){
    dispatch({type:'like'});
}
function handleDislike(){
    dispatch({type:'dislike'});
}

if (!data) return <p>Loading...</p>;

return(
    <div className="container-fluid">
        <h3>Product-Details</h3>
        {data.title}
        <div className="card p-2" style={{width:'250px'}}>
            <img src={data.image}  className="card-img-top" height={'150px'}/>
        <div className="card-header">
            <p>{data.title}</p>

        </div>
        <div className="card-footer">
        [{state.likes}] <button className="btn btn-primary" onClick={handleLikeClick}>Like</button>
         [{state.dislikes}]<button className="btn btn-danger" onClick={handleDislike}>Dislike</button>
        </div>
        </div>
    </div>
)
}