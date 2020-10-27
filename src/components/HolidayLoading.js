import React from "react";

function HolidayLoading(Component) {
    return function HolidayLoading({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p>Fetching data now...</p>
        )
    }
}
export default HolidayLoading;