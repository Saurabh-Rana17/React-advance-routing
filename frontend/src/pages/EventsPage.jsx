import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  return <EventsList events={data.events} />;
}

export default EventsPage;

export const eventPageLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "something went wrong !!!" }, { status: 500 });
  } else {
    return response;
  }
};
