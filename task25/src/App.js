import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios: `npm install axios`
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import { Toolbar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import StandardImageList from './StandardImageList'; // Ensure the path is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookAppointment from './BookAppointment';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SvgIconsColor() {
  return (
    <HomeIcon sx={{ color: pink[500] }} />
  );
}

function BasicCard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/search', {
        params: { name: searchTerm }
      });
      setDoctors(response.data);
      setError(null);
    } catch (err) {
      setError('Error fetching data');
      console.error(err);
    }
  };

  return (
    <div className='one'>
      <Toolbar sx={{ backgroundColor: 'orange', color: 'white', padding: '5px' }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Badge color="error" variant="dot">
          <MailIcon />
        </Badge>
        <Chip icon={<FaceIcon />} label="Profile" />
        <TextField
          id="outlined-basic"
          label="Search Doctor here"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
        {error && <Alert severity="error">{error}</Alert>}
        <Typography variant="h5" style={{ flexGrow: 1 }}></Typography>
        <SvgIconsColor />
        <Switch />
        <Chip
          avatar={<Avatar alt="Yashoda Hospitals" src="https://tse3.mm.bing.net/th?id=OIP.sLV81znPLmaDN2wXIYQlEgHaHa&pid=Api&P=0&h=180" />}
          label="Yashoda Hospitals"
          variant="outlined"
        />
      </Toolbar>
      <Box
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          padding: '30px'
        }}
      >
        <Card className='three'>
          <CardContent>
            <Typography sx={{ fontSize: '20px' }} color="text.secondary" gutterBottom>
              No.1 Hospital with best doctors in the world
            </Typography>
            <Typography variant="h1" color="orange" component="div">
              Yashoda Hospitals
            </Typography>
            <StandardImageList />
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
            <Typography variant="body2">
              <br />
              {'"Certified Experts By World Health Organization"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book Appointment</Button>
          </CardActions>
       <box>
          {doctors.length > 0 && (
  <div>
    <h2>Doctor Details:</h2>
    <table>
      
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Experience</th>
          <th>Specialization</th>
        </tr>
      
      
        {doctors.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.id}</td>
            <td>{doctor.name}</td>
            <td>{doctor.no_of_years_of_experience} years</td>
            <td>{doctor.specialization}</td>
          </tr>
        ))}
     
    </table>
  </div>
)}</box>
<Router>
          <Routes>
            <Route path="/" element={< BookAppointment/>} />
            
          </Routes>
          </Router>

</Card>
       
      </Box>
    </div>
  );
}

export default BasicCard;