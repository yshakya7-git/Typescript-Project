import { Button } from '../lib/Button'
import { InputField } from '../lib/InputField'
import { Formik } from 'formik'
import { FormSchema } from '../../validations/FormSchema'
import { useStore } from '../../store/useStore'
import { useNavigate } from 'react-router-dom';
// import classNames from 'classnames'


export const LoginPage = () => {
 
  const navigate = useNavigate();
  const { setUname, setPassword } = useStore();
  return (
    <>
      <Formik initialValues={{ uname: '', password: '' }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          console.log(values)
          setUname(values.uname);
          setPassword(values.password);
          navigate("/home");

        }}>
        {({ errors, handleSubmit, handleChange, values }) => {
          return (
            <>
              <form onSubmit={handleSubmit}>
                <InputField type="text"
                  label="Username : "
                  value={values.uname}
                  name="uname"
                  onChange={handleChange}
                  placeholder="Please enter your name"
                />
                {errors.uname ? (
                  <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.uname}</span>
                ) : null}

                <br />

                <InputField type="password"
                  label="Password : "
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Please enter your password" />
                {errors.password ? (
                  <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.password}</span>
                ) : null}
                <br />
                <Button  secondary={true} children="Login"></Button>
              </form>

            </>


          )
        }}
      </Formik>


    </>
  )
}
