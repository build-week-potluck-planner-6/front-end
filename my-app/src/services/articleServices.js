import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const articleServices = () => {
    axiosWithAuth.get('https://potluckbuildweek.herokuapp.com/api/potlucks')
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
}

export default articleServices