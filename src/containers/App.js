import React from 'react';
import Petlist from '../components/Petlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            pets: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(uesr => this.setState({pets : uesr}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filteredPets = this.state.pets.filter(pets => {
            return pets.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className= 'tc'>
                <h1 className= 'f1'>Pet Adoption</h1>
                <Searchbox searchChange ={this.onSearchChange}/>
                <Scroll>
                    <Petlist pets={filteredPets}/>
                </Scroll>
            </div>
        );
    }
}

export default App;

