import { Paper, TextField } from "@mui/material";
import Button from '@mui/material/Button';


const AddTeacher = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");


    const handleName = (text) => {
        setName(text);
    }

    const handleTitle = (text) => {
        setTitle(text);
    }

    const handlePhoto = () => {
        
    }

    const submit = () => {

    }

    return (
        <div className="App">
            <Paper sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300,
                minHeight: 300,
                marginLeft: 3,
                marginRight: 3,
                marginTop: '20%',
                paddingTop: 5,
                paddingBottom: 5
                }}>
          <h2>Add Teacher</h2>
            <form className="form">
                <TextField id="name" label="Name" variant="outlined" sx={{marginBottom: 2}} onChange={ (e) => handleName(e.target.value)} />
                <TextField type="text" id="title" label="Title" variant="outlined" sx={{marginBottom: 2}} onChange={ (e)=> handleTitle(e.target.value)} />
                <Button variant="contained" component="label" sx={{marginBottom: 2}}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button variant="contained" onClick={()=>submit()}>Submit</Button>
            </form>
                
            </Paper>  
    </div>
    );
}

export default AddTeacher;