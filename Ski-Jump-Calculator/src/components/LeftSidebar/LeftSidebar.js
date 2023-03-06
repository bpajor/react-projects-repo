import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <section>
        <p className="intro">
          Welcome ! This app was created to calculate points reached by jumper
          based on his jump distance in meters, wind and notes from referees
        </p>
        <p className="rules">
            If you want to check out what is the rules of assigning points, visit wikipedia site:
            <a href="https://en.wikipedia.org/wiki/Ski_jumping"> Wikipedia </a> 
        </p>
        <p class='intro'>
        For the purpose of this app, construction point is 130m. There are some limits, you can`t type more than 150m, more than +30 or -30 points for wind and more than 20 points for style.
        </p>
        <h1>Enjoy!</h1>

      </section>
    </div>
  );
};

export default LeftSidebar;
