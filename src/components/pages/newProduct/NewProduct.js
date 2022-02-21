import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1>New Product</h1>
      <div>
        <form className="newProductForm">
          <div className="formItem">
            <label className="newProductTitle">Image</label>
            <input type="file"></input>
          </div>

          <div className="formItem">
            <label className="newProductTitle">Name</label>
            <input type="text"></input>
          </div>

          <div className="formItem">
            <label className="newProductTitle">Stock</label>
            <input type="number"></input>
          </div>

          <div className="formItem">
            <label className="newProductTitle">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </form>
        <button className="newProductButton">Create</button>
      </div>
    </div>
  );
}
