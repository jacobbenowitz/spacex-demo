import React from "react";
import { useParams } from "react-router-dom";
// import { GET_LAUNCH_DETAILS } from "../graphql/launch-details.graphql";
import {gql, useQuery} from '@apollo/client'
import { LaunchDetailsDocument } from "../graphql/generated";

const DetailView = () => {

  let { id }: { id: string } = useParams();
  
  const { loading, error, data } =
    useQuery(LaunchDetailsDocument, { variables: { id } })
  
  console.log('data', data)

  return (
    <div id="detail-view">
    </div>
  )
}

export default DetailView;