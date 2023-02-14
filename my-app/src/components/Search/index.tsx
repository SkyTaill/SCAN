import React from 'react';

import css from "./index.module.css"


import { useAppSelector } from 'src/hook';



function Search() {

    var autorize = useAppSelector(state => state.autorize)
    //const autorize = false

    return (
        <div>


        </div>
    );


}

export default Search;
