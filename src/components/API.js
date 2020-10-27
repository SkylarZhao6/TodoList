import React, { useEffect, useState } from "react";

import Holiday from "./Holiday";
import HolidayLoading from "./HolidayLoading";

function API() {
    // Pass data into loading logic
    const Holidays = HolidayLoading(Holiday);
    // default arguments values for HolidayLoading
    const [appState, setAppState] = useState({
        loading: false,
        holidays: null
    });

    useEffect(() => {
        setAppState({loading: true});
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const URL = "https://date.nager.at/api/v2/publicholidays/2020/CA";
        fetch(proxyurl + URL)
            .then((res) => res.json())
            .then((holidays) => {
                setAppState({loading: false, holidays: holidays});
            })
    }, [setAppState]);

    return (
        <div>
          <div>
            <Holidays isLoading={appState.loading} holidays={appState.holidays} />
          </div>
        </div>
      );
}

export default API;