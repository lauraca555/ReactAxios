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
        /*Axios.get("http://api.icndb.com/jokes/random")
            .then((response) => {
                this.setState({value : response.data.value, isLoaded:true });
            })
            .catch((error) => {
                console.log(error);
            })*/
        
            /*const user = {
                name : 'toto'
            }

            Axios.post('https://jsonplaceholder.typicode.com/users', user)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })*/
                    
                    this.getJoke();
                    
                }
                getJoke  = async () => {
                    const response = await Axios.get("http://api.icndb.com/jokes/random");
                    this.setState({value : response.data.value, isLoaded:true });

                }       


    render (){
        if (!this.state.value) return <h4>Loading ...</h4>
        return (
            <h1>{ this.state.value.joke}</h1>
        )
    }

}

export default TestAxios;

