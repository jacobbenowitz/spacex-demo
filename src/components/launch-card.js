import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LaunchCard = ({ launch }) => {

  const [cardHover, toggleCardHover] = useState(false);

  const getPatch = (launch: any) => {
    return launch?.links?.mission_patch_small ? (
      <img
        src={launch?.links?.mission_patch_small}
        style={{ width: "65px" }}
      />
    ) : launch?.links?.mission_patch ? (
      <img
        src={launch?.links?.mission_patch}
        style={{ width: "65px" }}
      />
    ) : null
  };

  let cardStyles = cardHover ? (
    {
      maxWidth: 500,
      backgroundColor: "#424242"
    }
  ) : ({ maxWidth: 500 });

  return (
    <Grid item xs={4}>
      <Card
        sx={cardStyles}
        onMouseEnter={() => toggleCardHover(!cardHover)}
        onMouseLeave={() => toggleCardHover(!cardHover)}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            width="100%"
          >
            {getPatch(launch)}
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'right',
                mb: "1rem"
              }}
            >
              {new Date(launch?.launch_date_utc).toLocaleDateString()}
            </Typography>
          </Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600
            }}
            my="1rem"
          >
            {launch?.mission_name}
          </Typography>
          <Typography variant="subtitle2" component="div">
            Launch Site
          </Typography>
          <Typography fontWeight={"700"} component="div">
            {launch?.launch_site?.site_name_long}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default LaunchCard;