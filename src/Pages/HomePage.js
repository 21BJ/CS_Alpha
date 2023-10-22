import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import ListButtons from "./indatas"
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IDForApi from "./MetaMask/ContractAPI"
import React from 'react';




export default function HomePage() {


    const [value, setValue] = React.useState(0);
    // TODO: manage outputs !!! 
    const [outputFunctions, setOutputFunctions] = React.useState([
                                                                    [],
                                                                    [],
                                                                    [],
                                                                    [],
                                                                    [],
                                                                    []
                                                                ]);

    

    // Input ???




    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

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

        console.log("indexIntExt, indexInt: " + indexIntExt + " " + indexInt + "  --  " + indexVr )
        console.log("event: " + event);

        console.log(event.target.value);

        setInputFunctions()

    }

    async function executeOrder66 (indexIntExt, indexInt) {
        console.log("indexIntExt" + indexIntExt);
        console.log("indexInt" + indexInt);
        console.log("account: " + account);

        // TODO: Inputs !!! 

        if (account != "") await IDForApi(indexIntExt, indexInt, [], account).then(() => {
            // Manage output
        });
        
    }


    function connectWallet () {

        window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            setAccount(accounts[0]);
            console.log("account: " + accounts[0]);
        })

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