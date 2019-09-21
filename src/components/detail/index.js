import React, { Component } from 'react'

class DetailComponent extends Component {

    render() {
        return (
            <div>
                Detalle {this.props.match.params.id}
            </div>
        )
    }
}

export default DetailComponent
