import React from "react";
import { useQuery, gql } from '@apollo/client';
import { PastLaunchesListDocument, PastLaunchesListQuery } from "../graphql/generated";

const LaunchList = () => {

  const { loading, error, data } = useQuery(PastLaunchesListDocument)
  
  

  return (
    <div id="detail-view">
      
    </div>
  )
}

export default LaunchList;