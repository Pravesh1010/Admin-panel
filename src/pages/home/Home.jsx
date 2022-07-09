import React from "react";
import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/topbar/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

export default function Home() {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 1000,
    },
    {
      name: "Mar",
      "Active User": 2000,
    },
    {
      name: "Apr",
      "Active User": 3000,
    },
    {
      name: "May",
      "Active User": 4500,
    },
    {
      name: "Jun",
      "Active User": 6000,
    },
    {
      name: "Jul",
      "Active User": 3300,
    },
    {
      name: "Aug",
      "Active User": 2300,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 8000,
    },
    {
      name: "Nov",
      "Active User": 5000,
    },
    {
      name: "Dec",
      "Active User": 6500,
    },
  ];
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts data={data} title="Sales Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
