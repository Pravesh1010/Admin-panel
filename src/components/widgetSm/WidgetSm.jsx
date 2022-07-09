import React from "react";
import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://media.vogue.fr/photos/5da46eeee189b20008ababeb/2:3/w_2560%2Cc_limit/GettyImages-908311.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Rachel Green</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.vogue.fr/photos/5da46eeee189b20008ababeb/2:3/w_2560%2Cc_limit/GettyImages-908311.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Rachel Green</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.vogue.fr/photos/5da46eeee189b20008ababeb/2:3/w_2560%2Cc_limit/GettyImages-908311.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Rachel Green</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.vogue.fr/photos/5da46eeee189b20008ababeb/2:3/w_2560%2Cc_limit/GettyImages-908311.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Rachel Green</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
