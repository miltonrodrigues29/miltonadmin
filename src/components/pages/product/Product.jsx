import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../../components/charts/Chart";
import { productData } from "../../../dummy_data";
import { Publish } from "@material-ui/icons";
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          ></Chart>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              className="productInfoImage"
              src="https://static.toiimg.com/photo/msid-87180631/87180631.jpg"
              alt=""
            ></img>
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod"></input>

            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                className="productUploadImage"
                src="https://static.toiimg.com/photo/msid-87180631/87180631.jpg"
                alt=""
              ></img>
              <label for="file">
                <Publish></Publish>
              </label>
              <input type="file" id="file" style={{ display: "none" }}></input>
            </div>
            <button className="productButton"> Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
