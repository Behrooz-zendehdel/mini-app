import { useProductsActions } from "../../Providers/ProductsProvider";
import React, { useState } from 'react';


const Filter = () => {
    const dispatch = useProductsActions();
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        dispatch({ type: "filter", event: e })
        setValue(e.target.value)
    }
    return (
        <div>
            <p>filter product based on : </p>
            <div>
                order by:
                <select onChange={changeHandler}
                    value={value} >
                    <option value="">All</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;