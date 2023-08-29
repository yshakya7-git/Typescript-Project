
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { Image } from '../../ui(components)/Image';
import { FormSchema } from '../../validations/FormSchema';
import { InputField } from '../../ui(components)/InputField';
import { Button } from '../../ui(components)/buttons/Button';
import { useSessionStore } from '../../store/useSessionStore';


export const LoginPage = () => {

  const navigate = useNavigate();
  const { setUname, setPassword } = useSessionStore();
  return (
  
      <div className="h-screen flex items-center justify-center ">
        <Image />
        <div className='w-[300px] h-[480px] bg-[#f5f5f5] flex flex-col justify-center p-[2rem] items-center'>
          <div className='w-full flex flex-col p-[-2.5rem]'>
            <h3 className='text-2xl font-semibold mb-2 mr-10'>Login</h3>
            <p className='text-sm w-[245px]'>Welcome Back ! Please enter your details.</p>
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
                        placeholder=""
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
                        placeholder="" />
                      {errors.password ? (
                        <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.password}</span>
                      ) : null}
                      
                      <br />
                      <Button>Login</Button>
                    </form>

                  </>


                )
              }}
            </Formik>
          </div>
        </div>
      </div>

   
  )
}