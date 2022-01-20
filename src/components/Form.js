import React from "react";

class Form extends React.Component{

    constructor(){
        super();
        this.state={
            name: null,
            email: null
        }
    }

    formSubmit(){
        console.log(this.state);
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1>Contact Us!</h1>
                <div className="formField">
                    <input type="text"  name= "fullName" placeholder="Full Name"
                        onChange={(e)=>this.setState({name:e.target.value})}
                    />
                </div>
                <div>
                    <input type="email"  name= "eMailID" placeholder="Email ID"
                        onChange={(e)=>this.setState({email:e.target.value})}
                    />
                </div>
                <button onClick={()=>this.formSubmit()}>Submit</button>
            </div>
        )
    }
}


export default Form