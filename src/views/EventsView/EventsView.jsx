import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { fetchEvents } from "../../services/eventsApi";

const EventsView = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link state={{ from: location.pathname }} to={`${id}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default EventsView;
