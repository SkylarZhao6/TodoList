import React from "react";

const Holiday = (props) => {
    const { holidays } = props;

    if (!holidays || holidays.length === 0) return <p>No holidays found.</p>;

    return (
        <ul>
            <h2>Holidays in Canada this year</h2>
            {" \n "}
            {holidays.map((holiday) => {
                return (
                    <li key={holiday.date}>
                       <span>{holiday.name}</span>
                       {" \t "}
                       <span>{holiday.date}</span> 
                    </li>
                )
            })}
        </ul>
    )
}
export default Holiday;