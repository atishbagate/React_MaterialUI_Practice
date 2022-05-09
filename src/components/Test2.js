import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "../styles/styles";

const cards = [1,2,3,4,5,6,7,8,9];
const Test2 = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Albums
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              haiii all viewers this is Photo Albums. glad to come here to see
              collection.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    visite my Photos 1
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    visite my Photos 2
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container >
          {cards.map((card)=> (
                        <Card item="true" key={card} >
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image Title"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                              card Heading
                            </Typography>
                            <Typography gutterBottom variant="h6">
                              card content here to describe the image
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="secondary">Edit</Button>
                          </CardActions>
                        </Card>
                      </Card>
          ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Test2;
