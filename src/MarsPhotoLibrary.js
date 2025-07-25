import {useState,useEffect} from "react";   

export default function MarsPhotoLibrary() {
    const [mars,setMars] =useState({});

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=>response.json())
        .then(data=>{
            setMars(data);
        })
    },[])

    return(

        <div className="container">
            <h2>Mars Photos</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos?.map(photo=>{
                          return(  
                                <tr key={photo}>
                                    <td>{photo.id}</td>
                                    <td>{photo.camera.full_name}</td>
                                    <td>{photo.rover.name}</td>
                                    <td><img src={photo.img_src} width="100" height="100" /></td>
                                </tr>
                          )
                            
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}