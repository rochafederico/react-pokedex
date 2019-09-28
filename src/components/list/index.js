import React, { Component } from 'react'

import SearchComponent from './components/search';
import styles from './list.module.css';
import CardPokemonComponent from './components/card-pokemon';

const getPokemons = require('json-pokemon/getPokemon');
const pokemons = getPokemons();

class ListComponent extends Component {
    constructor(props) {
        super(props)

        var types = ["All"]
        pokemons.forEach(x => x.typeList.forEach(y => types.push(y)));
        types = types.filter((value, i, self) => self.indexOf(value) === i);

        this.state = { pokemons, types }
    }

    searchChange = (text, type) => {
        var result = pokemons;
        if (text)
            result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
        if (type && type != "All")
            result = result.filter(x => x.typeList.includes(type));
        this.setState({
            pokemons: result
        });
    }

    renderList = () =>
        this.state.pokemons.map((item, i) =>
            <CardPokemonComponent key={'pokemon'+i} pokemon={item}></CardPokemonComponent>
        );

    render() {
        return (<>
            <header className={styles.header}>
                <h1>Pokedex</h1>
                <SearchComponent onChange={this.searchChange} types={this.state.types}></SearchComponent>
            </header>
            <section className={styles.section}>
                {this.renderList()}
            </section>
        </>)
    }
}

export default ListComponent
