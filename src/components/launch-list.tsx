import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import LaunchCard from "./launch-card";
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
      <LaunchCard 
        key={`launch-${idx}`}
        launch={launch}
      />
    )
  }

  return (
    // <Grid container spacing={2} id="detail-view" alignItems={"start"}>
    <Grid container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
      // direction="column"
      // justifyContent="flex-start"
      // alignItems="stretch"
    >
      {cards}
    </Grid>
  )
}

export default LaunchList;