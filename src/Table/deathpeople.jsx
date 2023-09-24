// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

//  const data=(Id, OrganizationName, Country, OrganizationAddress, url,ContactPerson,Email,MobileNo)=>{
//   return { Id, OrganizationName, Country, OrganizationAddress, url},ContactPerson,Email,MobileNo;
//  }
 

// const rows = [
//    (1,'Shahrukh Khan', 'India','Nagpur Maharastra', '/org', 'self','sk12@gmail.com','7499575375'),
//    (2,'Shahrukh Khan', 'India','Nagpur Maharastra', '/org', 'self','sk12@gmail.com','7499575375'),
//    (3,'Shahrukh Khan', 'India','Nagpur Maharastra', '/org', 'self','sk12@gmail.com','7499575375'),
//    (4,'Shahrukh Khan', 'India','Nagpur Maharastra', '/org', 'self','sk12@gmail.com','7499575375'),
//    (5,'Shahrukh Khan', 'India','Nagpur Maharastra', '/org', 'self','sk12@gmail.com','7499575375'),
// ];

// export default function DeathPeopleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Id</TableCell>
//             <TableCell align="right">OrganizationName</TableCell>
//             <TableCell align="right">Country</TableCell>
//             <TableCell align="right">OrganizationAddress</TableCell>
//             <TableCell align  ="right">url</TableCell>
//             <TableCell align="right">ContactPerson</TableCell>
//             <TableCell align="right">Email</TableCell>


            
//             <TableCell align="right">MobileNo</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow
//               key={row.Id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.Id}
//               </TableCell>
//               <TableCell align="right">{row.Id}</TableCell>
//               <TableCell align="right">{row.OrganizationName}</TableCell>
//               <TableCell align="right">{row.Country}</TableCell>
//               <TableCell align="right">{row.OrganizationAddress}</TableCell>
//               <TableCell align="right">{row.url}</TableCell>
//               <TableCell align="right">{row.ContactPerson}</TableCell>
//               <TableCell align="right">{row.Email}</TableCell>
//               <TableCell align="right">{row.MobileNo}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }