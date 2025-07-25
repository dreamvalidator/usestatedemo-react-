import { useFormik } from "formik"
export default function FormikDemo(){

    const formik =useFormik({
        initialValues: {
            UserName:'',
            Password:'',
            City:''
        },
        onSubmit : values =>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">

<form onSubmit={formik.handleSubmit}>
    <h2>Register User</h2>
    <dl>
        <dt>UserName</dt>
        <dd>
            <input type="text" onChange={formik.handleChange} name="UserName" value={formik.values.UserName} />
        </dd>   
        <dt>Password</dt>
        <dd>
            <input type="password" onChange={formik.handleChange} value={formik.values.Password}   name="Passsword"   />
        </dd>
        <dt>City</dt>
        <dd>
            <select onChange={formik.handleChange} value={formik.values.City}>
                <option>Hyd</option>
                <option>Chennai</option>
                <option>Banglore</option>
            </select>
        </dd>
    </dl>
    <button type="submit">Register</button>
</form>
        </div>
    )
}