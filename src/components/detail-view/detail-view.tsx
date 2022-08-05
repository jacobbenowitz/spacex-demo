import React from "react";
import { useParams } from "react-router-dom";

const DetailView = () => {
  let { id }: {id: string} = useParams();
  
  return (
    <div id="detail-view">

    </div>
  )
}

export default DetailView;