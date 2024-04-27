"use client";

import { useQueryParam } from "@src/hooks/useQueryParam";
import styles from "./FilterBar.module.css";
import DropDownSearch from "@src/components/shared/DropDownSearch/DropDownSearch";
import { getServies } from "@src/_lib/companies";
import { useQuery } from "@tanstack/react-query";

const FilterBar = () => {
    const { singleValue, searchParams } = useQueryParam();
    const service = searchParams.get("service") || "";
    const { data } = useQuery({
        queryKey: ["get/services"],
        queryFn: getServies,
    });
    const handleChange = (value) => {
        singleValue({
            target: {
                name: "service",
                value: data?.find((s) => s?.title === value)?.slug || "",
            },
        });
    };
    return (
        <section className={styles.section}>
            <label className={styles.label} htmlFor="subjects">
                <h1 className={styles.searchTitle}>
                    {" "}
                    اختار من اكثر من 1500+ شركة خدمات صيانة
                </h1>
                <DropDownSearch
                    currentValue={data?.find((s) => s?.slug === service)?.title || ""}
                    options={data?.map((val) => val.title)}
                    placeholder="  ابحث عن الخدمة التي تريدها "
                    callBack={(value) => handleChange(value)}
                />
            </label>
        </section>
    );
};

export default FilterBar;
