import { AppBar, Toolbar, Typography,makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const useStyle = makeStyles({
    header:{
        background:"#111111",
        position:"static"
    },
    tabs:{
      color:"#FFFFFF",
      textDecoration: "none",
      margin:"20px",
      fontSize:"20px"
    }
});

const NavBar = () => {
    const classes = useStyle();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
           <NavLink className={classes.tabs} to="/" >codeever</NavLink>
           <NavLink className={classes.tabs} to="/alluser" >All User</NavLink>
           <NavLink className={classes.tabs} to="/adduser" >Add User</NavLink>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
