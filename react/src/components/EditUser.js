import { FormControl, FormGroup, InputLabel,Input,Button,makeStyles ,Typography} from '@material-ui/core';
import {useEffect, useState} from "react";
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {editUser, getUsers} from '../Service/api';  


const initialValue = {
    name: '' ,
    username: '' ,
    email: '',
    phone:''

};

const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:"5% 0 0 25%",
        "& > *":{
            marginTop:"30px"
        }
    }
});


const EditUser = () => {
    const[user,setUser]=useState(initialValue);
    const { name,username,email,phone }= user;
    const classes = useStyle();
    const {id}=useParams();
    const history=useHistory();
    // var 
    
    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData= async()=>{
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e)=>{
        console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    } 
    const editUserDetails = async()=>{
        await editUser(id,user);
        history.push("/alluser")

    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4" color="primary"> Edit User</Typography>
            <FormControl >
                <InputLabel>Name</InputLabel>
                <Input onChange={onValueChange} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={onValueChange} name="username" value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={onValueChange} name="email"  value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel >Phone</InputLabel>
                <Input onChange={onValueChange} name="phone"  value={phone} />
            </FormControl>
            <Button onClick={editUserDetails}>edit User</Button>
        </FormGroup>
    );
}; export default EditUser;