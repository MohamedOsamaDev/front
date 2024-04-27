"use client";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import styles from "./Form.module.css";
import { logInVal } from "./schema";
import ErrorMessage from "@src/components/shared/ErrorMessage/ErrorMessage";
import { signUp } from "@src/_lib/sign-up";
import Link from "next/link";
import toast from "react-hot-toast";
import { logIn } from "@src/_lib/log-in";
import useAuth from "@src/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const Form = () => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: joiResolver(logInVal) });
    const { signIn } = useAuth()
    const router = useRouter();
    const next = useSearchParams().get('next') || '/';
    const handler = async (form) => {
        setLoading(true)
        toast.promise(logIn(form), {
            loading: "saveing...",
            success: async (res) => {
                await signIn({ jwt: res?.jwt, next })
                setLoading(false)
                return `success`;
            },
            error: (error) => {
                setLoading(false)
                return `${error}`
            },
        });
    };
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit((data) => handler(data))}
        >
            <label className={styles.label} htmlFor="identifier">
                بريد إلكتروني
                <input
                    className={` input`}
                    type="email"
                    name="email"
                    id="#email-signup"
                    autoComplete="new-email"
                    {...register("identifier")}
                    placeholder="  بريد إلكتروني *"
                />
                <ErrorMessage message={errors?.email?.message} />
            </label>
            <label className={styles.label} htmlFor="password">
                كلمة المرور
                <input
                    className={` input`}
                    type="password"
                    name="password"
                    id="#password"
                    {...register("password")}
                    placeholder="كلمة المرور *"
                    autoComplete="new-password"
                />
                <ErrorMessage message={errors?.password?.message} />
            </label>
            <span className={styles.polices_box}>
                <p className="">نسيت كلمة المرور ؟ مفيش مشكلة</p>
                <Link className={styles.link} href={'/forget-password'} >دوس هنا عشان تغير كلمة المرور</Link>
            </span>
            <button disabled={loading} className={styles.button} type="submit">
                تسجيل دخول
            </button>
        </form>
    );
};

export default Form;
