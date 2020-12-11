import React from 'react'; 

class TestAxios extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded : false
        }
    }

    render (){
        return (
            <h1>Axios</h1>
        )
    }

}

export default TestAxios;

