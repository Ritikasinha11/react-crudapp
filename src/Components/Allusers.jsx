import { TableBody, TableCell, TableHead, TableRow ,Table, makeStyles, Button} from "@material-ui/core";
import { useEffect,useState } from "react";
import { deleteUser, getUsers } from "../Service/api";
import { Link } from 'react-router-dom'

const useStyle=makeStyles({
    table:{
    width:'90%',
    margin:'50px 0 0 50px'
    },
    thead:{
        '&>*':{
            background:'#000000',
            color:'#FFFFFF',
            fontSize:20
        }
    },
    row:{
        '& > *':{
            fontSize:20
        }
    }
})
const Allusers=()=>{
      const [users,setUsers]=useState([]);
      const classes=useStyle();
    useEffect(() => {
        getAllusers();
   },[])
    const getAllusers= async() =>{
      const response = await  getUsers();
      console.log(response.data);
      setUsers(response.data);
    }

    const deleteUserData=async(id) => {
        await deleteUser(id);
        getAllusers();
    }
    return(
       <Table className={classes.table}>
           <TableHead>
               <TableRow className={classes.thead}>
               <TableCell>Id</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Username</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Phone</TableCell> 
               <TableCell></TableCell> 
                   </TableRow>
           </TableHead>
           <TableBody>
               {
                   users.map(user=>(
                    <TableRow className={classes.rows}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button variant="contained" color="primary" style={{marginRight:10}} component ={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                    </TableCell>
                </TableRow>

                   ))
               }
           </TableBody>
       </Table>
    )
}
export default Allusers;