import { useState } from "react";

import "./styles.scss";

// Requiring lodash library
import * as _ from "lodash";




const SearchBoxPro = () => {

    const [statusIcon, setStatusIcon] = useState("off");

    const HandleOnChange = (event: any) => {
        setStatusIcon("waiting...");
        debounce_fun(event.target.value);
    };

    const debounce_fun = _.debounce(function (value: any) {
        setStatusIcon("fetching...");
        console.log('Function debounced after 1000ms!', value);
    }, 1000);


    return (
        <section className="search-box-pro__container">
            <input className="search-box-pro__input" type="text" onChange={HandleOnChange} />
            <p>{statusIcon}</p>
        </section>
    )
};

export default SearchBoxPro;