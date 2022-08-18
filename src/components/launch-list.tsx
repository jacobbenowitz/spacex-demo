import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import {
  PastLaunchesListDocument,
  PastLaunchesListQuery,
  PastLaunchesListQueryVariables
} from "../graphql/generated";

const LaunchList = () => {

  const { data, loading, error } =
    useQuery<PastLaunchesListQuery, PastLaunchesListQueryVariables>(
      PastLaunchesListDocument, { variables: { limit: 100 } }
    )
  
  console.log('data', data)
  let cards;

  if (data?.launchesPast) {
    cards = data?.launchesPast.map((launch, idx) => 
        <Grid item xs={4} key={`launch-${idx}`}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="150"
              image={ launch?.links?.mission_patch_small ||
                "https://via.placeholder.com/300x125.png?text=Mission+Patch"}
              alt={`${launch?.mission_name}-img`}
            />
            <CardContent>
              <Typography variant="subtitle1" sx={{
                textAlign: 'right',
                mb: "1rem"
              }}>
                {new Date(launch?.launch_date_utc).toLocaleDateString()}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 600}}>
                {launch?.mission_name}
              </Typography>
              <Typography variant="subtitle2" component="div">
                Launch Site: {launch?.launch_site?.site_name_long}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
    )
  }

  return (
    <Grid container spacing={2} id="detail-view" alignItems={"start"}>
      {cards}
    </Grid>
  )
}

export default LaunchList;