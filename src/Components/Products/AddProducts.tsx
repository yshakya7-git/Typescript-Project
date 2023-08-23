import { Formik } from "formik";
import { InputField } from "../lib/InputField";
import { Button } from "../lib/Button";
import { useProductStore } from "../../store/useProduct";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../../validations/ProductForm";
import { TextArea } from "../lib/TextArea";
import classNames from "classnames";

export const AddProducts = () => {
    const { setTitle, setDescription, setPrice } = useProductStore();
    const navigate = useNavigate();

    return (
        <div className="items-center ml-96 mt-10">
            <h3 className={classNames("font-bold")}>AddProducts</h3>
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
                        <div className="m-[20rem] mt-4 fixed">
                            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

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

                                <TextArea
                                    label="Description : "
                                    value={values.description}
                                    name="description"
                                    onChange={handleChange}
                                    placeholder=""
                                    rows={4} />
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
                                <Button primary={true} danger={false} children="Submit"></Button>
                            </form>

                        </div>


                    )
                }}
            </Formik>
        </div>
    )
}
