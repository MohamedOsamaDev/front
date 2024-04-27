import React from "react";
import Spinner from "../Spinner/Spinner";

const LoadingPage = () => {
    return (
        <div className="w-100 h-100 flex-all-c ShowSmoothEffect f-column">
            <Spinner size={50} />
            <h1 className="font-bold font18 mr15 mt15  color-text-p ">
                جار التحميل...
            </h1>
        </div>
    );
};

export default LoadingPage;
