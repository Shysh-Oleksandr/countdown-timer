import React from "react";
import "./events.scss";

const Events = ({ events, currentEventIndex, setCurrentEventIndex }) => {
  function changeCountdown(e) {
    e.preventDefault();
    const event = events.find((event) => {
      return event.name.toLowerCase() === e.target.innerText.toLowerCase();
    });
    setCurrentEventIndex(event.id);
  }

  return (
    <nav className="countdown__navigation" id="nav">
      <ul className="countdown__list">
        {events.map((event) => {
          return (
            <li
              key={event.name + event.id}
              className={`countdown__link ${
                event.id === currentEventIndex ? "active" : ""
              }`}
            >
              <a onClick={(e) => changeCountdown(e)} href="">
                {event.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Events;