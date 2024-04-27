"use client";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import styles from "./Form.module.css";
import { RegistrationVal } from "./schema";
import ErrorMessage from "@src/components/shared/ErrorMessage/ErrorMessage";
import { signUp } from "@src/_lib/sign-up";
import DropDown from "@src/components/shared/dropDown/DropDown";
import DropDownSearch from "@src/components/shared/DropDownSearch/DropDownSearch";
const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ resolver: joiResolver(RegistrationVal) });

    const handleSignUp = async (data) => {
        toast.promise(signUp({ data }), {
            loading: "saveing...",
            success: (jwt) => {
                return `success`;
            },
            error: (error) => `${error}`,
        });
    };
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit((data) => handleSignUp(data))}
        >
            {/* start labels */}
            <label className={styles.label} htmlFor="firstName">
                <h1>  الاسم بالكامل رباعي  <b className="c-red">*</b></h1>
                <input
                    className={` input`}
                    type="text"
                    id="#firstName"
                    name="firstName"
                    autoComplete="firstName"
                    {...register("firstName")}
                    placeholder="الاسم بالكامل رباعي *"
                />
                <ErrorMessage message={errors?.firstName?.message} />
            </label>
            <label className={styles.label} htmlFor="email">
                <h1>  بريد إلكتروني <b className="c-red">*</b></h1>
                <input
                    className={` input`}
                    type="email"
                    name="email"
                    id="#email-signup"
                    {...register("email")}
                    autoComplete="new-password"
                    placeholder="  بريد إلكتروني *"
                />
                <ErrorMessage message={errors?.email?.message} />
            </label>
            <label className={`${styles.label} ${styles.textarea}`} htmlFor="email">
                <h1> ايه المشكله ؟<b className="c-red">*</b></h1>
                <textarea
                    className={` input`}
                    type="email"
                    name="email"
                    id="#email-signup"
                    {...register("email")}
                    autoComplete="new-password"
                    placeholder="   التفاصل"
                />
                <ErrorMessage message={errors?.email?.message} />
            </label>
            {/* end labels   */}
            <span className={styles.polices_box}>
                <p className="">
                    تواصل معنا لحل مشكلتك وسنرد عليك في اسرع وقت ممكن
                </p>
            </span>
            <button className={styles.button} type="submit">
                ارسال
            </button>
        </form>
    );
};

export default Form;
