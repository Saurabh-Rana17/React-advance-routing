import React from "react";
import EventItem from "../components/EventItem";
import { json, useRouteLoaderData } from "react-router-dom";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "failed to fetch event data" }, { status: 500 });
  } else {
    return response;
  }
}
