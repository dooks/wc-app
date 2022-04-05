import * as React from "react";

const eventsUrl = "https://docs.google.com/spreadsheets/d/1eFJbd1zJg7nKBmTvHY4Kr414kkqa1s0sL5aGoCh3pPY/edit";
// const eventsScheduleUrl = "";

const Events = () => {
  return <div className="heroContainer">
    <div className="container">
      <h3><a href={eventsUrl} target="_blank" rel="noreferrer">Sign Up</a></h3>

      <p>
        Have something that you want to share? Wanna have a movie night, a beer tasting,
        Yoga class, host tarot readings, do a music performance, got a DJ set, or share
        whatever other awesome things you love to do! Then sign on up!
      </p>

      {/* <h3>
        <a href={eventsScheduleUrl} target="_blank" rel="noreferrer">
          Event Schedule
        </a>
      </h3> */}

      <p>
        There will be a physical (and well lit) board at Center Camp to mirror this events sheet.
      </p>
    </div>
  </div>;
};

export default Events;