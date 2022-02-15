import React from "react";
import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import { userData } from "../../../dummy_data";
import Chart from "../../charts/Chart";
import WidgetSm from "../../widgetsm/WidgetSm";
import WidgetLg from "../../widgetlg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      ></Chart>
      <div className="homeWidget">
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}
