import { Button } from '../lib/Button'
import { InputField } from '../lib/InputField'
import { Formik } from 'formik'
import { FormSchema } from '../../validations/FormSchema'
// import {Navigate} from 'react-router-dom';

export const LoginPage = ({setUser}:any) => {
  // const navigate = useNavigate();
  return (
    <>
      <Formik initialValues={{ uname: '', password: '' }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          console.log(values)
          setUser(values)
          return
        }}>
        {({ errors, handleSubmit, handleChange, values }) => {
          return (
            <>
              <form onSubmit={handleSubmit}>
                <InputField type="text"
                  label="Username"
                  value={values.uname}
                  name="uname"
                  onChange={handleChange}
                  placeholder="Please enter your name"
                />
                {errors.uname ? (
                  <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.uname}</span>
                ) : null}

                <InputField type="password"
                  label="Password"
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Please enter your password" />
                {errors.password ? (
                  <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.password}</span>
                ) : null}
                <Button children="Login"></Button>
              </form>
              
            </>


          )
        }}
      </Formik>


    </>
  )
}
