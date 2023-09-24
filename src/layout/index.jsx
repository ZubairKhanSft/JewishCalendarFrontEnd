// import React, { useEffect, useState } from 'react';
// import { Grid, Paper, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import BasicCard from '../component/card/index';
// import SecondCard from '../component/card/Card';
// import CenterImage from '../component/card/center';
// import FourthCard from '../component/card/Card3';
// import ThirdCard from '../component/card/Card2';
// import axios from 'axios';


// // const useStyles = makeStyles((theme) => ({
// //   paper: {
// //     padding: theme.spacing(1),
// //     textAlign: "center",
// //     color: theme.palette.text.secondary
// //   }
// // }));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   margin: "6px",
//   height: '100%',
//   fontSize: '100'
// }));

// const Layout = ({ children }) => {

//   const [data, setData] = useState([]);


//   const loadAdv = async () => {
//     // const result = await axiosInstance.get(API_ENDPOINTS_ADV.getall_adv);
//     const result = await axios.get("http://zewscalender-001-site1.btempurl.com/api/Advertisement/Get-All-Advertisements"
//     );

//     setData(result.data);

//   };
//   useEffect(() => {
//     loadAdv();
//   }, []);
//   return (
//     <Grid>
//       <Grid container spacing={1}>
//         <Grid item xs={12} lg={2} style={{ width: '1200px', marginLeft: '26px', position: 'absolute', bottom: '-720px' }}>
//           <Item>
//             {data?.slice(0, 10)?.map((item, idx) => {
//               return (
//                 <BasicCard key={idx} data={item} />
//               )
//             })}
//           </Item>
//         </Grid>
//         <Grid >
//           <Grid container >
//             <Grid item xs={12} lg={8} style={{ position: 'absolute', justifySelf: 'flex-end', height: '700px', width: '850px', bottom: '-907px', marginLeft: '240px' }}>
//               {children}
//             </Grid>
//           </Grid>

//           <Grid container >
//             <Grid item xs={12} lg={8} >
//               {/* <Grid item xs={12} lg={8} style={{ height: '20vh' }}>
//                 <SecondCard />
             
//               </Grid> */}
//             </Grid>
//           </Grid>

//           <Grid container >
//             <Grid item xs={12} lg={2} style={{ height: '20vh' }}> <ThirdCard /></Grid>
//           </Grid>
//         </Grid>
//         <Grid container>
//           <Grid item xs={12} lg={2} style={{ height: '20vh' }}><FourthCard /></Grid>
//         </Grid>
//       </Grid>
//       <Grid item xs={12} lg={2} style={{ marginLeft: '1101px', position: 'absolute', bottom: '-650px', width: '225px' }}>
//         <Item>
//           {data?.slice(11, 20)?.map((item, idx) => {
//             return (
//               <BasicCard key={idx} data={item} />

//             )

//           })}
//         </Item>
//       </Grid>
//       <Grid item xs={12}>
//         <CenterImage />
//         <Grid />
//       </Grid>
//     </Grid>
//   )
// }

// export default Layout;



