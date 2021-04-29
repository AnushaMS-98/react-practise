import {Component} from 'react';
import {CardList} from './card-list/card-list.component';
import {SearchBox} from './/search-box/search-box.component';

class Monster extends Component{
    constructor(){
        super();

    this.state = {
        //without using componemtDidMount(Life Cycle method)
        // monsters :[
        //     {
        //         name : "Frankenstein",
        //         id: '1'
        //     },
        //     {
        //         name : "Dracula",
        //         id: '2'
        //     },
        //     {
        //         name : "Zombie",
        //         id: '3'
        //     }
        // ],
        monsters : [],
        searchResult:'',
        myArray :[1,2,3,4,5,6,7,8,9,10]


    } ;   
   // this.handleChange =this.handleChange.bind(this); can eliminate this using arrow function
    }


    handleChange=(e)=>{
        this.setState({searchResult:e.target.value});
    }

    componentDidMount(){fetch('https://jsonplaceholder.typicode.com/users').
    then(response=>response.json()).
    then(users=>this.setState({monsters:users}))
    }


render(){

    const{monsters , searchResult, myArray} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchResult.toLowerCase()));
    
    return(
        <div>
        
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
        </div>
       //</CardList>
    )
}


}
export default Monster;