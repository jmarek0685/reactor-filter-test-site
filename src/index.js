import React from "react";
import ReactDOM from 'react-dom';
import {  Input } from "mdbreact";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dogs: [],
	  search: ""
    };
  }

  //Fetch is where we do the API call to retrieve the data from a public API
  //https://github.com/toddmotto/public-apis 
  //The heroku hosted rest service is calling 
  componentDidMount() {
    fetch("https://polar-atoll-30396.herokuapp.com/v1/get-dogs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dogs: result.dogs
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
   const { error, isLoaded, dogs, search } = this.state;
   
   //This does the filtering by comparing the user provided input of (search) and compares it with each breed name.
   //It also converts both to lowercase first to allow for case neutral matching
   const filtereddogs = dogs.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  
    //Alphabetize the filtered dogs
    filtereddogs.sort((a, b) => a.name.localeCompare(b.name));


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
  
      //This is what will result as the JSX html output.
      return (
		  <div>
       <h1>Search from a list of dog breeds</h1>  <br/>
		  <Input icon="search" onChange={this.onchange} />
        <ul>
          {filtereddogs.map(item => (
            <li key={item.id}>
              {item.name} 
            </li>
          ))}
        </ul>
		</div>
      );
    }
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));