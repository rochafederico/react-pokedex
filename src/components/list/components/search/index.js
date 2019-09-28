import React, { Component } from 'react'

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = { text: '', type: '' }
    onChangeText = ($event) => {
        this.setState(
            { text: $event.target.value },
            () => this.props.onChange(this.state.text, this.state.type)
        );
    }
    onChangeType = ($event) => {
        this.setState(
            { type: $event.target.value },
            () => this.props.onChange(this.state.text, this.state.type)
        );
    }
    render() {
        return (<>
            <input value={this.state.text} onChange={this.onChangeText} />
            <select value={this.state.type} onChange={this.onChangeType}>
                {this.props.types.map((x,i) => <option key={'type'+i} value={x}>{x}</option>)}
            </select>
        </>)
    }
}