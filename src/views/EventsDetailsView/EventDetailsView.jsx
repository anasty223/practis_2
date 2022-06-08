import { useLocation, useNavigate } from "react-router-dom";
import { useFetchEvent } from "../../components/hooks/useFetchEvent";

const EventDetailsView = () => {
  const eventDetails = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {eventDetails && (
        <div>
          <button onClick={() => navigate(location?.state?.from ?? "/")}>
            Go back
          </button>
          <p>{eventDetails.name}</p>
        </div>
      )}
    </>
  );
};

export default EventDetailsView;
