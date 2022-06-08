import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomeView from "./views/HomeView/HomeView";
import EventsView from "./views/EventsView/EventsView";
import EventSubView from "./views/EventSubView/EventSubView";
import EventDetailsView from "./views/EventsDetailsView/EventDetailsView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path={"events"} element={<EventsView />}>
          <Route path={":eventId"} element={<EventSubView />} />
        </Route>
        <Route
          path={"events/:eventId/details"}
          element={<EventDetailsView />}
        />
        {/* <Route path={"*"} element={<NotFoundView />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
