import { FormControl, FormGroup, InputLabel, Input,Button,makeStyles ,Typography} from '@material-ui/core';
import react,{useState} from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {addUser} from '../Service/api';   

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


const AddUser = () => {
    const[user,setUser]=useState(initialValue);
    const { name,username,email,phone }= user;
    const classes = useStyle();
    const history=useHistory();

    const onValueChange = (e)=>{
        console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const addUserDetails = async()=>{
        await addUser(user);    
        history.push("/alluser")

    }
    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4" color="primary"> Add User</Typography>
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
                <InputLabel>Phone</InputLabel>
                <Input onChange={onValueChange} name="phone"   value={phone}/>
            </FormControl>
            <Button onClick={addUserDetails}>Add User</Button>
        </FormGroup>
        </>
    );
}; export default AddUser;