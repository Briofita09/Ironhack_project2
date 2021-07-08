import React, { Component } from "react";
import axios from "axios";



class Delete extends Component{
    
    componentDidMount = () => {
        const id = this.props.match.params._id;
        
    
        axios
          .delete(`https://ironrest.herokuapp.com/FelipeEGabriel/${id}/${this.props.match.params.sol_id}`)
          .then((response) => {
            console.log(response);
            this.props.history.push(`/${id}/solucoes`);
          })
          .catch((err) => console.log(err));
      };


    render(){
        return <div>...</div>
    }
}
export default Delete