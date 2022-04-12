import { FormControl, FormGroup, InputLabel,Input, Button,makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { adduser } from "../Service/api";
import {useHistory} from 'react-router-dom';

const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '&>*':{
            marginTop:20
        }
    }
})
const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}
const Adduser=()=>{
    const [user,setUser]=useState(initialValues);
    const {name,username,email,phone}=user;
    const classes=useStyle();
    const history=useHistory();
    const onValuechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value })
    }

    const addUserDetails= async()=>{
       await adduser(user);
       history.push('./all');
    }
    return(
       <FormGroup className={classes.container}>
           <Typography variant="h4">Add User</Typography>
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=> onValuechange(e)} name='name' value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel>Username</InputLabel>
               <Input onChange={(e)=> onValuechange(e)} name='username' value={username}/>
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=> onValuechange(e)} name='email' value={email}/>
           </FormControl>
           <FormControl>
               <InputLabel>Phone</InputLabel>
               <Input onChange={(e)=> onValuechange(e)} name='phone' value={phone}/>
           </FormControl>
           <Button variant="contained" onClick ={() => addUserDetails()} color="primary">Add User</Button>
       </FormGroup> 
    )
}
export default Adduser;