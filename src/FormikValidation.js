import { useFormik } from "formik";
import * as yup from "yup";
export default function FromikValidation() {

    const formik= useFormik({
        initialValues:{
            username: '',
            age:0,
            email: ''
        },
        validationSchema: yup.object({
            username: yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required')
            .typeError('Must be a string'),
            age: yup.number().required('Required')
            .min(18, 'Must be at least 18'),
            email: yup.string()
            .email('Invalid email address')
            .required('Required')   
        })
    })
    return (
        <div className="container-fluid">
            <h2>Formik Validation Example</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                <dt>User Name</dt>
                <dd>
                    <input {...formik.getFieldProps("username")} type="text"  />   
                </dd>
                <dd className="text-danger">{formik.errors.username}</dd>
                <dt>Age</dt>
                <dd>
                    <input {...formik.getFieldProps("age")} type="text"></input>
                </dd>
                <dd className="text-danger">{formik.errors.age}</dd>
                <dt>Email</dt>
                <dd>
                    <input {...formik.getFieldProps("email")} type="text" />
                </dd>
                <dd className="text-danger">{formik.errors.email}</dd>
                </dl>
                <button >Register</button>
                <alert className="text-success">{formik.isSubmitting ? "Registration Successfully" : null}</alert>
            </form>
        </div>
    )
}       