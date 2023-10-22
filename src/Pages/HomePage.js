import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import ListButtons from "./indatas"
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IDForApi from "./MetaMask/ContractAPI"
import React from 'react';




export default function HomePage() {


    const [value, setValue] = React.useState(0);
    const [outputFunctions, setOutputFunctions] = React.useState([
                                                                    [],
                                                                    [],
                                                                    [],
                                                                    [],
                                                                    [],
                                                                    []
                                                                ]);

    
    const [errorAccountNotLogged, setErrorAccountNotLogged] = React.useState([ [], [], [], [], [], []]);
    const [sendTransactionAllert, setSendTransactionAllert] = React.useState([ [], [], [], [], [], []]);



    // Input ???
    const [inputFunctions1, setInputFunctions1] = React.useState([ [], [], [], [], [], [] ]);
    const [inputFunctions2, setInputFunctions2] = React.useState([ [], [] ]);
    const [inputFunctions3, setInputFunctions3] = React.useState([ [], [] ]);
    const [inputFunctions4, setInputFunctions4] = React.useState([ [], [], [], [], [], [], [], [] ]);
    const [inputFunctions5, setInputFunctions5] = React.useState([ [], [], [] ]);




    const handleChange = (event, newValue) => { setValue(newValue); };

    // ListButtons
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    
    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    
    const [account, setAccount] = React.useState("");


    function handleChangeTextField(indexIntExt, indexInt, indexVr, event) {

        // console.log("indexIntExt, indexInt: " + indexIntExt + " " + indexInt + "  --  " + indexVr )
        // console.log("event: " + event.target.value);

        let cp = [...inputFunctions1];
        // console.log(cp);

        if (indexIntExt == 1) { let copy = [...inputFunctions1]; copy[indexInt][indexVr] = event.target.value; setInputFunctions1(copy); }
        if (indexIntExt == 2) { let copy = [...inputFunctions2]; copy[indexInt][indexVr] = event.target.value; setInputFunctions2(copy); }
        if (indexIntExt == 3) { let copy = [...inputFunctions3]; copy[indexInt][indexVr] = event.target.value; setInputFunctions3(copy); }
        if (indexIntExt == 4) { let copy = [...inputFunctions4]; copy[indexInt][indexVr] = event.target.value; setInputFunctions4(copy); }
        if (indexIntExt == 5) { let copy = [...inputFunctions5]; copy[indexInt][indexVr] = event.target.value; setInputFunctions5(copy); }

    }

    async function executeOrder66 (indexIntExt, indexInt) {
        console.log("indexIntExt: " + indexIntExt);
        console.log("indexInt: " + indexInt);
        console.log("account: " + account);
        console.log("account logged ? : " + (account != ""));

        // manage inputs !!! 
        let inputArr = [];



        if (indexIntExt == 1) inputArr = inputFunctions1[indexInt];
        if (indexIntExt == 2) inputArr = inputFunctions2[indexInt];
        if (indexIntExt == 3) inputArr = inputFunctions3[indexInt];
        if (indexIntExt == 4) inputArr = inputFunctions4[indexInt];
        if (indexIntExt == 5) inputArr = inputFunctions5[indexInt];


        console.log("inputArr: ");
        console.log(inputArr);


        if (account != "") {
            // try to execute order
            await IDForApi(indexIntExt, indexInt, inputArr, account).then((event) => {
                console.log("Output ???");
                console.log(event);
                let copy = [...outputFunctions]; copy[indexIntExt][indexInt] = event; setOutputFunctions(copy);
            });
            // Launch an response 
            let copy = [...errorAccountNotLogged]; copy[indexIntExt][indexInt] = false; setErrorAccountNotLogged(copy);
            let copy1 = [...sendTransactionAllert]; copy1[indexIntExt][indexInt] = true; setSendTransactionAllert(copy1);

        } else {
            // Launch an error pop-up
            let copy = [...errorAccountNotLogged]; copy[indexIntExt][indexInt] = true; setErrorAccountNotLogged(copy);
            let copy1 = [...sendTransactionAllert]; copy1[indexIntExt][indexInt] = false; setSendTransactionAllert(copy1);
        }
        
    }


    function connectWallet () {

        window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            setAccount(accounts[0]);
            console.log("account: " + accounts[0]);
        })

    }





    function getDefaultValue (indexIntExt, indexInt, indexVr) {

        if (indexIntExt == 1) { return inputFunctions1[indexInt][indexVr]; }
        if (indexIntExt == 2) { return inputFunctions2[indexInt][indexVr]; }
        if (indexIntExt == 3) { return inputFunctions3[indexInt][indexVr]; }
        if (indexIntExt == 4) { return inputFunctions4[indexInt][indexVr]; }
        if (indexIntExt == 5) { return inputFunctions5[indexInt][indexVr]; }

    }





    return (
        <div>
            
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example">
                    {ListButtons.map((items, index) => {
                        return (
                            <Tab key={index} label={items.file} {...a11yProps(index)} />
                        )})
                    }
                </Tabs>
            </Box>
            {ListButtons.map((items, indexIntExt) => {
                return (
                    <CustomTabPanel key={indexIntExt} value={value} index={indexIntExt}>
                        {!items.functionPresence ?
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button 
                                    variant="contained"
                                    onClick={() => { connectWallet(); }}
                                >
                                    connectWallet
                                </Button>
                                <Typography textAlign={"center"} variant="h4" fontWeight={500}>Current signed account: <br /> {account}</Typography>
                            </Grid>
                        :
                        items.functions.map((itemsInt, indexInt) => {
                            return (
                                <div key={indexInt}>
                                    
                                    {items.functionPresence &&
                                        <Accordion >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography variant="h4" fontWeight={500}>{itemsInt.Action}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography>
                                                {itemsInt.info.description}
                                                <Card variant="outlined" style={{margin: "3%", padding: "10px", paddingLeft: "30px"}}>
                                                    <h4>Inputs</h4>
                                                    <Grid container spacing={2}>
                                                        {itemsInt.info.variables.map((itemsVr, indexVr) => {
                                                            return (
                                                                <Grid item xs={4} key={indexVr}>
                                                                    <h6> {itemsVr.name} </h6>
                                                                    <TextField 
                                                                        id="outlined-basic" 
                                                                        label={itemsVr.type} 
                                                                        variant="outlined" 
                                                                        defaultValue={ getDefaultValue(indexIntExt, indexInt, indexVr) }
                                                                        onChange={(event) => { handleChangeTextField(indexIntExt, indexInt, indexVr, event) } }
                                                                    />
                                                                </Grid>
                                                            );})
                                                        }
                                                    </Grid>
                                                </Card>
                                                <Card variant="outlined" style={{margin: "3%", padding: "10px", paddingLeft: "30px"}}>
                                                    
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={1} style={{margin: "auto 10px"}}> 
                                                            <Button 
                                                                variant="contained"
                                                                onClick={() => { executeOrder66(indexIntExt, indexInt); }}
                                                            > 
                                                                Send 
                                                            </Button> 
                                                        </Grid>
                                                        <Grid item xs={1}> <h4> OutPut: </h4> </Grid>
                                                        <Grid item xs={4} style={{margin: "auto 10px"}}> <p> {outputFunctions[indexIntExt][indexInt]} </p></Grid>
                                                    </Grid>
                                                </Card>
                                                {errorAccountNotLogged[indexIntExt][indexInt] && <Alert severity="error">Make logIn first</Alert>}
                                                {sendTransactionAllert[indexIntExt][indexInt] && <Alert severity="info" >the transaction has been processed</Alert> }
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    }
                                </div>
                            );})
                        }
                    </CustomTabPanel>
                )})
            }
            
        </div>
    )
}


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }