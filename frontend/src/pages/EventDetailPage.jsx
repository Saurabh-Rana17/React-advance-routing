import React from "react";
import { useParams } from "react-router-dom";

function EventDetailPage() {
  const { id } = useParams();
  return (
    <div>
      EventDetailPage
      <p>{id}</p>
    </div>
  );
}

export default EventDetailPage;
