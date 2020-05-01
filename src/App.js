import React, { Component } from 'react';

import {Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';

import {fetchData} from './api';

import Avatar from '@material-ui/core/Avatar';

class App extends Component {
    state = {
        data : {},
        country : '',
    }

    async componentDidMount()
    {
        const fetchedData = await fetchData();
        this.setState({data : fetchedData})
    }

    handleCountryChange = async (country) =>
    {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);

        this.setState({data : fetchedData, country : country});
    }

    render() {

        const {data, country} = this.state;

        return (
            <div className = {styles.container}>

                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Chart data = {data} country = {country}/>

                <Avatar alt="Remy Sharp" src="./img/prayas.jpg" />
            
            </div>
         );
    }
}

export default App;