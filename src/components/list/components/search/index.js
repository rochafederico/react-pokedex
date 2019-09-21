import React, { Component } from 'react'

export default class SearchComponent extends Component {
    state = {
        text = ''
    }
    onChange($event){
        this.setState({ text = $event.target.value }, () => this.props.onChange(this.state.text));
    }
    render() {
        return (
            <input value={this.state.text} onChange={this.onChange} />
        )
    }
}
