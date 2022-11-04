import React from 'react';


class AddContact extends React.Component{
    state={
        name:'' ,
        email:'',
    }

    add =(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert('all the fields are mandatory ');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.state)
    }
    render(){
        return(
            <div className='ui main   padded '>
                
                <form className='ui form' onSubmit={this.add}>
                    <h2>Add Contact </h2>
                    <div className='field form'>
                       <label >Name</label>
                       
                       <input  type='text' name='name' placeholder='name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                
                
                    <div className='field'>
                       <label>Email</label>
                       <input type='email' name='email' placeholder='email' value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                    <h2>Contact Details</h2>
                </form>
            </div>
        )
    }

}

export default AddContact
