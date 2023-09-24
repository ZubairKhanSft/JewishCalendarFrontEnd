import { useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../../utils";
import Grid from "@mui/material/Grid";
import Image from "mui-image";

export default function BasicCard({ data, onClick }) {
  const imageUrl = BASE_URL +"/"+ data.imagePath;
  return (
    <>
      <Grid
        sx={{
          width: { xs: "100%", lg: "500px" },
          padding: "5px 0px",
        }}
      >
        <Image
          style={{ cursor: "ponter", height: '102px', objectFit: 'fill' }}
          onClick={() =>
            window.open(
              data ? "http://" + data.businessUrl : "http://08global.net/"
            )
          }
          src={imageUrl}
        />
      </Grid>
    </>
    // <Card
    //   sx={{ '&:first-of-type':{marginTop:0},width:{xs:"100%",sm:"47%",md:"100%"}, maxWidth: "400px" ,margin:{xs:"8px auto",lg:"6px 5px"}, height:{xs:"auto",lg:"213.5px"}, marginBottom:'0.6rem' ,overflow:'hidden' }}
    //   onClick={() => onClick(data.businessUrl)}
    // >
    //   <CardMedia
    //     component="img"
    //     height="100%"
    //     width="100%"
    //     image={imageUrl}
    //     // sx={{ objectFit: "cover" }}
    //     alt="unsplash image"
    //     loading='lazy'
    //   />
    //   <CardContent>
    //     <Typography
    //       gutterBottom
    //       variant="h5"
    //       component="div"
    //       sx={{ margin: "4px" }}
    //     ></Typography>
    //   </CardContent>
    // </Card>
  );
}
