"use client";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import styles from "./Form.module.css";
import { requsetVal } from "./schema";
import ErrorMessage from "@src/components/shared/ErrorMessage/ErrorMessage";
import DropDownSearch from "@src/components/shared/DropDownSearch/DropDownSearch";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getServies } from "@src/_lib/companies";
import { appendObjectToFormData } from "@src/utils/ConvertToFromData";
import toast from "react-hot-toast";
import { createOrder } from "@src/_lib/request";
import Popup from "./popup/Popup";
const Form = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ resolver: joiResolver(requsetVal) });

    console.log("🚀 ~ Form ~ errors:", errors)
    const handler = async (data) => {
        const form = appendObjectToFormData(data)
        toast.promise(createOrder(form), {
            loading: "saveing...",
            success: (res) => {
                return `تم الارسال بنجاح`;
            },
            error: (error) => `${error}`,
        });
    };
    const { data } = useQuery({
        queryKey: ["get/services"],
        queryFn: getServies,
    });
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        setValue("media", selectedFile);
    };

    return (
        <>
            <form
                className={styles.form}
                onSubmit={handleSubmit((data) => handler(data))}
            >
                {/* start labels */}
                <label className={styles.label} htmlFor="services">
                    <h1>
                        الخدمة<b className="c-red">*</b>
                    </h1>
                    <DropDownSearch
                        className={""}
                        currentValue={data?.find((s) => s?.id === watch("services"))?.title || ""}
                        options={data?.map((val) => val.title)}
                        placeholder="  اختار الخدمة *"
                        callBack={(value) => setValue("services", data.find((val) => val?.title === value)?.id)}
                    />
                    <ErrorMessage message={errors?.services?.message} />
                </label>
                <label className={styles.label} htmlFor="governorate">
                    <h1>
                        {" "}
                        المحافظة<b className="c-red">*</b>
                    </h1>
                    <DropDownSearch
                        className={""}
                        currentValue={watch("governorate")}
                        options={["high_school_year", "high_school_", "year"]}
                        placeholder="المحافظة"
                        callBack={(value) => setValue("governorate", value)}
                    />
                    <ErrorMessage message={errors?.governorate?.message} />
                </label>
                <label className={styles.label} htmlFor="Region">
                    <h1>
                        {" "}
                        المنطقة<b className="c-red">*</b>
                    </h1>
                    <DropDownSearch
                        className={""}
                        currentValue={watch("region")}
                        options={["high_school_year", "high_school_", "year"]}
                        placeholder="المنطقة"
                        callBack={(value) => setValue("region", value)}
                    />
                    <ErrorMessage message={errors?.Region?.message} />
                </label>
                <label className={styles.label}>
                    <h1> صورة لشرح المشكلة</h1>
                    <input
                        type="file"
                        name="myImage"
                        placeholder="ارفع صورة"
                        onChange={handleChange}
                        accept="image/png, image/gif, image/jpeg"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                    />
                    <button
                        className={` ${styles.fileDesc} input-file input`}
                        onClick={handleClick}
                    >
                        اختار صورة
                        <span className={`${styles.fileTitle} ml10  mr15 `}>
                            {watch('media')?.name?.substring(0, 20)}
                        </span>
                    </button>
                    <ErrorMessage message={errors?.media?.message} />
                </label>
                <label className={`${styles.label} ${styles.textarea}`} htmlFor="information">
                    <h1>
                        {" "}
                        ايه المشكله ؟<b className="c-red">*</b>
                    </h1>
                    <textarea
                        className={` input`}
                        name="information"
                        id="#desc"
                        {...register("information")}
                        autoComplete="new-password"
                        placeholder="   التفاصل"
                    />
                    <ErrorMessage message={errors?.information?.message} />
                </label>
                {/* end labels   */}
                <span className={styles.polices_box}>
                    <p className="">ارسل طلب وسيتم الرد عليك في اسرع وقت من خلال الشركة </p>
                </span>
                <button className={styles.button} type="submit">
                    ارسال طلب
                </button>
            </form>
            <Popup />
        </>
    );
};

export default Form;
