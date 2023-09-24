import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { BASE_URL } from "../../utils";

const CommingEvents = () => {
  const [comming, setComming] = React.useState([]);

  React.useEffect(() => {
    getallUpcommingevent();
  }, []);

  const getallUpcommingevent = async () => {
    const result = await axios.post(`${BASE_URL}/api/UpcomingEvent/GetAll`);
    if (result.status == 200) {
      setComming(result.data.reverse());
    }
  };

  return (
    <>
      <div style={{ paddingTop: "10px" }}>
        {comming &&
          comming?.map((itemlist) => {
            return (
              <Card
                style={{ margin: "10px 15px" }}
                sx={{ maxWidth: { xs: "100%", lg: "100%" } }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <img
                    src={`${BASE_URL}/${itemlist.flyer}`}
                    style={{ height: "290px", width: "100%" }}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {itemlist.oraniserName.charAt(0).toUpperCase() +
                      itemlist.oraniserName.slice(1)}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="div">
                    {itemlist.startTime}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.eventTypePersian}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.eventTypeEnglish}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.eventNamePersian}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.eventNameEnglish}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.address}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.phoneNumber}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.email}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {itemlist.website}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Typography variant="body2" color="text.secondary">
                        Price: {itemlist.ticketPrice}$
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Booking Tickets :{" "}
                        <a
                          style={{ cursor: "pointer" }}
                          href={`https://${itemlist.ticketWebsiteUrl}`}
                          target="_blank"
                        >
                          {itemlist.ticketWebsiteUrl}
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>

                  <div style={{ paddingTop: "20px" }}>
                    <Typography variant="body2" color="text.secondary">
                      {itemlist.eventDescription}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default CommingEvents;
