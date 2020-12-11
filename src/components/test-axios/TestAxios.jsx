import React from 'react'; 
import Axios from 'axios';

class TestAxios extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            joke: ""
        }
    }

    componentDidMount() {
        Axios.get("http://api.icndb.com/jokes/random")
            .then((response) => {
                this.setState({joke : response.data.value.joke });
            });
    }

    render (){
        return (
            <h1>{ this.state.joke}</h1>
        )
    }

}

export default TestAxios;

