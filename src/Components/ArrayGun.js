import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function ArrayGun() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [output, setOutput] = React.useState();

    function arrMaykr() {
        var list = document.getElementById("outlined-multiline-static").value.split("\n");
        if (list.length > 1) {
            const wQuotes = list.map(input => `"${input}"`);
            const finalArray = `[${wQuotes}]`;
            setOutput(finalArray);
            setOpen(true);
            return;
        }
    }
    return (
        <div>
            <h1>Make a list here:</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} className="NoDoubtPut">
                    <Item className="screenText">
                        <TextField id="outlined-multiline-static" label="Input" multiline rows={10} defaultValue="" placeholder="
                        Put
                        Your
                        List
                        Here
                        And
                        Click
                        The
                        Button
                        To Begin
                        "></TextField>
                    </Item>
                    <Item><Button onClick={arrMaykr}>Click to build array</Button></Item>
                </Stack>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="modal-modal-description" variant="h6" component="h6">
                            {output}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ArrayGun;