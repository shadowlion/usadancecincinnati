const CalendarPage = () => {
  return (
    <div className="container">
      <h1 className="text-center py-5">Calendar of Events</h1>
      <div className="row d-flex justify-content-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=0&showPrint=0&showTabs=1&showCalendars=0&showTz=1&mode=AGENDA&src=aW9xM2E1aGU4MDh0MzBrZzJvOTVvMDNhMzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarPage;
