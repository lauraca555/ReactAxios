import React from 'react'; 
import Axios from 'axios';

class TestAxios extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded : false
        }
    }

    componentDidMount() {
        Axios.get("http://api.icndb.com/jokes/random");
    }

    render (){
        return (
            <h1>Axios</h1>
        )
    }

}

export default TestAxios;

