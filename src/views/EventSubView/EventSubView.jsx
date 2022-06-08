import { Link, useLocation } from "react-router-dom";
import { useFetchEvent } from "../../components/hooks/useFetchEvent";
import style from "./EventSubView.module.css";

const EventSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event.images && (
        <div>
          <h2>{event.name}</h2>
          <div className={style.thumb}>
            <img src={event.images[0].url} alt="" width={500} />
            <Link state={location.state} to={"details"}>
              More Details
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default EventSubView;
