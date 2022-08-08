import React from "react";
import { useParams } from "react-router-dom";
// import { GET_LAUNCH_DETAILS } from "../graphql/launch-details.graphql";
import {gql, useQuery} from '@apollo/client'

const DetailView = () => {
  let { id }: { id: string } = useParams();
  
  // const { loading, error, data } = useQuery(GET_LAUNCH_DETAILS);
  
  return (
    <div id="detail-view">

    </div>
  )
}

export default DetailView;