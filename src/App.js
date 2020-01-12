import React from "react";
import ReactDOM from 'react-dom';
import {  Input } from "mdbreact";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: [],
	  search: ""
    };
  }

  //Fetch is where we do the API call to retrieve the data from a public API
  //https://github.com/toddmotto/public-apis 
  componentDidMount() {
    fetch("https://api.jikan.moe/v3/search/anime?q=onepunch&sort=ascending&order_by=title")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
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
   const { error, isLoaded, results, search } = this.state;
   const filteredResults = results.filter(item => {
	   //alert(item.title.toLowerCase()); //Uncomment to troubleshoot outside of debugger
      return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  
    //Alphabetize the filtered results
    filteredResults.sort((a, b) => a.title.localeCompare(b.title));


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
  
      //This is what will result as the JSX html output.
      return (
		  <div>
        <img alt="One Punch" src={require('./imgs/OnePunchMan.jpg')} /> <br/>
       <h1>Search through "One Punch" results</h1>  <br/>
		  <Input label="label" icon="search" onChange={this.onchange} />
        <ul>
          {filteredResults.map(item => (
            <li key={item.mal_id}>
              {item.title} 
            </li>
          ))}
        </ul>
		</div>
      );
    }
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));