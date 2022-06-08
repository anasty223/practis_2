import axios from "axios";

const KEY = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";

const fetchEvents = async () => {
  const response = await axios.get(`events?size=20&apikey=${KEY}`);
  return response.data._embedded.events;
};

const fetchEventById = async (id) => {
  const response = await axios.get(`events/${id}?apikey=${KEY}
`);
  return response.data;
};

export { fetchEvents, fetchEventById };
