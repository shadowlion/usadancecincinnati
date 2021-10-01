const CalendarPage = () => {
  return (
    <div className="container">
      <h1 className="text-center py-5">Calendar of Events</h1>
      <div className="row d-flex justify-content-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=ioq3a5he808t30kg2o95o03a30%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
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
