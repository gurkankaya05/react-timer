import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import clockImage from './images/clock.jpeg'
import GeriSayim from './components/GeriSayim'
const useStyles = makeStyles((theme) =>({

  container :{
    display : 'flex',
    alignItems: "center",
    flexDirection:"row",
    justifyContent:'center',
    height:"100vh",
    backgroundImage: `url(${clockImage})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:false
  }
}))
const  App = ()  => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">

        <GeriSayim/>

       


      </Container>
 
    </div>
  );
}

export default App;
