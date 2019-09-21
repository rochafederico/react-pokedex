import React, { Component } from 'react'
import { Link } from "react-router-dom";

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>

                <h1>Lista</h1>
                <ol>
                    <li><Link to="/detalle/1">Uno</Link></li>
                    <li><Link to="/detalle/2">Dos</Link></li>
                </ol>
            </React.Fragment>
        )
    }
}

export default ListComponent
