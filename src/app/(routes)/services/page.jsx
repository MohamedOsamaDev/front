import FilterBar from "@src/components/services/filterBar/FilterBar";
import styles from "./page.module.css";
import List from "@src/components/services/List/List";
import { AuthManger } from "@src/contexts/AuthManager";

const page = () => {
    return (

        <main className={`${styles.section} section ShowSmoothEffect `}>
            <div className="coverHeader" />
            <div className="coverHeader" />
            <FilterBar />
            <List />
        </main>

    );
};

export default page;
