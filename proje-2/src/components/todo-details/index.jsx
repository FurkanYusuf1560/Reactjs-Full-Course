import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetails({setOpenDialog ,todoDetails, openDialog, setTodoDetails}){
    return <Fragment>
        <Dialog onClose={() =>setOpenDialog(false)} open={openDialog}>
            <DialogTitle>
                {todoDetails?.todo}
            </DialogTitle>
            <DialogActions>
                <Button onClick={()=>{
                    setTodoDetails(null)
                    setOpenDialog(false)
                }}>Close</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}