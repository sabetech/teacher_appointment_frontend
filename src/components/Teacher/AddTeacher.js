import {
  Paper, Snackbar, Alert, TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { newTeacher } from '../../features/teachersSlice';

function AddTeacher() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [teacherphoto, setPhoto] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const teacherSaveStatus = useSelector((state) => state?.teacher?.status);
  const navigate = useNavigate();

  const handleName = (text) => {
    setName(text);
  };

  const handleTitle = (text) => {
    setTitle(text);
  };

  const handleBio = (text) => {
    setBio(text);
  };

  const handleXp = (text) => {
    setExperience(text);
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  useEffect(() => {
    if (teacherSaveStatus === 'newTeacherSuccess') {
      navigate('/teachers');
      setSnackOpen(true);
    }
  }, [teacherSaveStatus]);

  const handleSnackClose = () => setSnackOpen(false);

  const submit = () => {
    const request = {
      name,
      title,
      bio,
      experience,
      photo: teacherphoto,
      upload_preset: 'ca9htrqo',
    };

    const token = user?.authorization;

    dispatch(newTeacher({ token, teacher: request }));
  };

  return (
    <div className="App">
      <Paper
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 300,
          minHeight: 300,
          marginLeft: 3,
          marginRight: 3,
          marginTop: '20%',
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <h2>Add Teacher</h2>
        <form className="form">

          Upload
          <input
            accept="image/*"
            type="file"
            onChange={handlePhoto}
          />
          {' '}
          Image
          {' '}
          {teacherphoto?.name}

          <TextField
            id="name"
            label="Name"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onChange={(e) => handleName(e.target.value)}
          />
          <TextField
            type="text"
            id="title"
            label="Title"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onChange={(e) => handleTitle(e.target.value)}
          />
          <TextField
            type="text"
            id="bio"
            label="Bio"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onChange={(e) => handleBio(e.target.value)}
          />
          <TextField
            type="text"
            id="experience"
            label="Work Experience"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onChange={(e) => handleXp(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => submit()}
            sx={{
              backgroundColor: '#98BF10',
            }}
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Teacher Has been Created Successfully!
          </Alert>
        </Snackbar>
      </Paper>
    </div>
  );
}

export default AddTeacher;
