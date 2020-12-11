import React from 'react'; 
import Axios from 'axios';

class TestAxios extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            
        }
    }

    componentDidMount() {
        Axios.get("http://api.icndb.com/jokes/random")
            .then((response) => {
                this.setState({value : response.data.value, isLoaded:true });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render (){
        if (!this.state.value) return <h4>Loading ...</h4>
        return (
            <h1>{ this.state.value.joke}</h1>
        )
    }

}

export default TestAxios;

