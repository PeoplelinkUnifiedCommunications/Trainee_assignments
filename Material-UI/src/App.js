import React,{useState} from "react"
import './App.css';
import {AppBar,Button,Container,ImageList,ImageListItem,TextField,Toolbar, Typography} from '@material-ui/core'
import ImagesData from "./ImageData.json"

function App() {
  const [name,setName]=useState("")
  const [nameErr,setNameErr]=useState("")
  const NameVal=(e)=>{
    if (e.target.value.match(/^[A-Za-z ]+$/)){
      setName(e.target.value)
      setNameErr("")
    }else{
      setNameErr("Invalid")
      setName(e.target.value)
    }
  }
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{marginTop:"50px",textAlign:"center"}}>
        <Typography variant="h2">Our Latest Version of Photography</Typography>
        <Typography paragraph>Pleaseure to take your photos as well ,Please for </Typography>
      </Container>
      <Container>
        <ImageList rowHeight={100} cols={2}>
          {ImagesData.map(imageObj=>
            <ImageListItem key={imageObj.id}>
              <img src={imageObj.img} alt={imageObj.title} />
            </ImageListItem>
          )}
        </ImageList>
      </Container>
      <Container>
        <Typography variant="h4">Contact Form</Typography>
        <form>
          <TextField style={{"width":"400px",margin:"5px"}} type="text" value={name} onChange={NameVal} label="Name" variant="outlined"></TextField><br/>
          <p>{nameErr}</p>
          <TextField style={{"width":"400px",margin:"5px"}} type="text" label="Email" variant="outlined"></TextField><br/>
          <TextField style={{"width":"400px",margin:"5px"}} type="text" label="Number" variant="outlined"></TextField><br/>
          <TextField style={{"width":"400px",margin:"5px"}} type="text" label="Address" variant="outlined"></TextField><br/>
          <Button variant="contained" color="primary">Submit</Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
