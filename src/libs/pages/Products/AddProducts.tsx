import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ProductForm } from "../../validations/ProductForm";
import { InputField } from "../../ui(components)/InputField";
import { Button } from "../../ui(components)/buttons/Button";
import { useProductStore } from "../../store/useProductStore";

export const AddProducts = () => {
    const { setTitle, setDescription, setPrice } = useProductStore();
    const navigate = useNavigate();
    return (
        <div className="items-center ml-[40rem] mt-10 fixed">
            <div className="">
                <h3 className={classNames("font-bold mt-[4rem]")}>AddProducts Form using Formik and Yup validation</h3>
                <br />
                <Formik initialValues={{ title: '', description: '', price: 0 }}
                    validationSchema={ProductForm}
                    onSubmit={(values) => {
                        setTitle(values.title);
                        setDescription(values.description);
                        setPrice(values.price);
                        navigate("/viewProducts");
                        console.log(values.title, 'hello');
                    }}>
                    {({ errors, handleSubmit, handleChange, values }) => {
                        return (
                            <div className="">
                                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded pl-[1.5rem] pr-[2rem] pt-[1rem] pb-[2rem]  mb-4">

                                    <InputField type="text"
                                        label="Title : "
                                        value={values.title}
                                        name="title"
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                    {errors.title ? (
                                        <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.title}</span>
                                    ) : null}

                                    <br />

                                    <InputField
                                        type="text"
                                        label="Description : "
                                        value={values.description}
                                        name="description"
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                    {errors.description ? (
                                        <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.description}</span>
                                    ) : null}

                                    <br />

                                    <InputField type="number"
                                        label="Price : "
                                        value={values.price}
                                        name="price"
                                        onChange={handleChange}
                                        placeholder="" />
                                    {errors.price ? (
                                        <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.price}</span>
                                    ) : null}

                                    <br />
                                    <Button>Submit</Button>
                                </form>

                            </div>


                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}
