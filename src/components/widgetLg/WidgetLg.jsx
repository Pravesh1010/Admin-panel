import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  
  return (
    <div className="widgetLg">
      <div className="widgetLgTitle">Latest transactions</div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/jennifer-anistons-character-rachel-green-in-friends-was-almost-replaced_.jpg?itok=wU2MFxXa "
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rachel Green</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$133.00</td>
          <td className="widgetLgStatus">
            <button className="btn btn-success">Approved</button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/jennifer-anistons-character-rachel-green-in-friends-was-almost-replaced_.jpg?itok=wU2MFxXa "
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rachel Green</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$133.00</td>
          <td className="widgetLgStatus">
          <button className="btn btn-success">Approved</button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/jennifer-anistons-character-rachel-green-in-friends-was-almost-replaced_.jpg?itok=wU2MFxXa "
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rachel Green</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$133.00</td>
          <td className="widgetLgStatus">
          <button className="btn btn-danger">Declined</button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/jennifer-anistons-character-rachel-green-in-friends-was-almost-replaced_.jpg?itok=wU2MFxXa "
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rachel Green</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$133.00</td>
          <td className="widgetLgStatus">
          <button className="btn btn-warning">Pending</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
