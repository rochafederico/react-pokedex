import React, { Component } from 'react'
import styles from './card.module.css';

const pokemons = require('json-pokemon');

export default class CardPokemonComponent extends Component {
    constructor(props){
        super(props);
    }
    
    agregarCero = (value)=> value.toString().length < 3 ? this.agregarCero("0" + value) : value;
    getColor=(){}
    render() {
        return (
            <div className={styles.card}>
                <h4>{this.props.pokemon.name}</h4>
                <ol>
                    {this.props.pokemon.typeList.map(type => <li>{type}</li>)}
                </ol>
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+this.agregarCero(this.props.pokemon.id)+'.png'} />
            </div>
        )
    }
}
