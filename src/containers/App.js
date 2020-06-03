import React from 'react';
import {connect} from 'react-redux';
import Petlist from '../components/Petlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchfield, requestRobots} from '../actions';

const mapStateToProps = state => {
    return{
        searchfield: state.searchRobots.searchfield,
        pets: state.requestRobots.pets,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
        onrequestRobots:() =>dispatch(requestRobots())
    };
}

class App extends React.Component{

    componentDidMount(){
        this.props.onrequestRobots();
    }


    render(){
        const {searchfield, onSearchChange, pets} = this.props;
        const filteredPets = pets.filter(pets => {
            return pets.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
            <div className= 'tc'>
                <h1 className= 'f1'>Pet Adoption</h1>
                <Searchbox searchChange ={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Petlist pets={filteredPets}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

