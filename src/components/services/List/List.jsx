"use client";
import Card from "../Card/Card";
import styles from "./List.module.css";
import useinfinityQuery from "@src/hooks/useinfinityQuery";
import data_lectures from "./data_lectures.test";
import { getCompanies } from "@src/_lib/getCompanies";
import { useQueryParam } from "@src/hooks/useQueryParam";
import InfinteScroll from "@src/utils/InfintyScroll";

const List = ({ }) => {
    const { searchParams } = useQueryParam();
    const query = searchParams.get("service") || "";
    const { data, fetchNextPage, hasNextPage, isLoading } = useinfinityQuery({
        Key: ["get/services", query],
        next: getCompanies,
    });
    return (
        <section className={`${styles.section} flex-all-c gap20 f-column `}>
            <h1 className={styles.title}>الشركات</h1>
            <div className={`${styles.list} flex al-i-c wrap gap20 pb20 `}>
                <InfinteScroll isLoading={isLoading} hasMore={hasNextPage} next={fetchNextPage}  >
                    {data?.map((val, ind) => (
                        <Card key={ind} item={val} />
                    ))}
                </InfinteScroll>
            </div>
        </section>
    );
};

export default List;
