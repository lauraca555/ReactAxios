import React from 'react';
import apiMovie from '../../api/apiMovie2';


class TestAxios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded : false,
        }
    }

    componentDidMount() {
        apiMovie.get('/discover/movie')
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
    }
    

    render() {
        if(!this.state.value) return  <h4>Loading...</h4>

        return(
            <h1>{ this.state.value.joke }</h1>
        )
    }
}

export default TestAxios;