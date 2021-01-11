import React from 'react';import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';


export default (props) => {

    let { id } = useParams();

    return (
        <div >
            <h2>Param</h2>
            <h3>Valor: { id }</h3>
        </div>
    )
}