import React from "react";
import Navigation from "./navigation";
import "./pages/homePage/style.css";
const App = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default App;

// import React from "react";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex"
//   },
//   item: {
//     border: "1px solid blue"
//   },
//   itemFlexGrow: {
//     flexGrow: 1,
//     border: "1px solid red"
//   }
// }));

// export default function Example1() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <h3> Ex 2: Normal Flexbox with 'flex-grow: 1' on #2 </h3>
//       <div className={classes.container}>
//         <div className={classes.item}> item 1 </div>
//         <div className={classes.itemFlexGrow}> item 2 </div>
//         <div className={classes.item}> item 3 </div>
//       </div>
//     </div>
//   );
// }

// import { Grid } from '@mui/material';
// import React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function App() {
//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );

//   return (
//     <div>

//       <Grid  container spacing={1}>

//       <Grid item xs={1} md={3}>
//         <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

//         </Grid>

//         </Grid>
//         <Grid  container spacing={1}></Grid>
//         <Grid  container spacing={1}>
//         <Grid item xs={1} md={3}>
//         <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

//         </Grid>
//         </Grid>

//     </div>

//     )
//       }
