import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import { userData } from "../../../dummy_data";
import Chart from "../../charts/Chart";
export default function home() {
  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      ></Chart>
    </div>
  );
}
