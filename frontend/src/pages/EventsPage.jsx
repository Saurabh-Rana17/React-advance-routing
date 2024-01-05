import React from "react";
import { Link } from "react-router-dom";
const EVENTS = [
  { id: "e-1", title: "event 1" },
  { id: "e-2", title: "event 2" },
  { id: "e-3", title: "event 3" },
];
function EventsPage() {
  return (
    <div>
      <ul>
        {EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={`/events/${e.id}`}> {e.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
