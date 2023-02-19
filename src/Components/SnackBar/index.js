import React from "react";
import {Alert, Snackbar} from "@mui/material";


const SnackBar=({isOpen, setIsOpen})=>{
    return(
        <Snackbar open={isOpen} autoHideDuration={2000}
                  anchorOrigin={{horizontal: "center", vertical: "bottom"}}
                  onClose={() => setIsOpen(false)}>
            <Alert severity="success" sx={{width: '100%'}}>
                Form was successfully submitted!
            </Alert>
        </Snackbar>
    )
}


export default SnackBar;