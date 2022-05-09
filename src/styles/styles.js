

import { makeStyles } from "@material-ui/core"; 
import { padding } from "@mui/system";

const useStyles = makeStyles((theme)=>{
    return {
        container:{
            backgroundColor:theme.palette.background.paper,
            padding: theme.spacing(8,0,6)
        },
        icon:{
            marginRight:theme.spacing(2),
        },
        buttons:{
            margin:'2rem'
        },
        cardGrid:{
            padding:'20px', 
       
        },
        card:{
            height:'100%',
            display:'flex',
            flexDirection:'column'
        },
        cardMedia:{
            paddingTop:'56.25%'
        },
        cardContent:{
            flexGrow:1
        },


    }
});

export default useStyles