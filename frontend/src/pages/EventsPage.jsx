import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading....</p>}>
        <Await resolve={events}>
          {(loadedEvents) => {
            return <EventsList events={loadedEvents} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "something went wrong !!!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export const eventPageLoader = async () => {
  return defer({
    events: loadEvents(),
  });
};
