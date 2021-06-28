import React, { useState, useEffect } from "react";
import { StyledContainer } from "./style";
import { ENDPOINTS } from "../api/endpoints";
import axios from "axios";
import PartInfo from "../components/index";
const Request = () => {
  const [inputObj, setInputObj] = useState(null);
  const [partData, setPartData] = useState([]);
  const [status, setStatus] = useState("false");
  const handleChange = (event) => {
    setInputObj({ ...inputObj, [event.target.name]: event.target.value });
  };
  
  const yesClicked = () => {
    setStatus("true");
  }
  const noClicked = () => {
    setStatus("false");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      "id": inputObj ? inputObj.demandid : "",
      "createDate": Date.now(),
      "retailOutletName": "",
      "opsExecName": "",
      "orderType": inputObj ? inputObj.ordertype : "",
      "destinationType": inputObj ? inputObj.destinationtype : "",
      "destinationIWName": inputObj ? inputObj.destinationname : "",
      "recipientName": inputObj ? inputObj.recipientname : "",
      "recipientContact": inputObj ? inputObj.recipientcontact : "",
      "partsRequirements": [
        {
          "partNumber": inputObj ? inputObj.partnumber : "",
          "brandName": inputObj ? inputObj.brand : "",
          "partDescription": inputObj ? inputObj.partdescription : "",
          "quantity": inputObj ? inputObj.quantity : "",
        },
      ],
      "destinationAddress": inputObj ? inputObj.destinationaddress : "",
      "casePriority": inputObj ? inputObj.casepriority : "",
      "orderValue": inputObj ? inputObj.ordervalue : "",
      "advanceStatus": "",
      "comment": inputObj ? inputObj.addcomment : "",
    };
    axios
      .post(ENDPOINTS.USER.CREATE, data)
      .then((resp) => {
        alert("Data added Successfully");
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
    console.log(inputObj)
  };

  useEffect(() => {
    axios
      .get(ENDPOINTS.USER.GET)
      .then((resp) => {
        setPartData(resp.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StyledContainer>
      <div className="body-container">
        <div className="doorstep-container">
          <div>
            <h5>Doorstep Delivery Request Form</h5>
            <hr />
          </div>
          <div className="doorstep-wrapper">
            <div className="column-1">
              <div className="field">
                <label>Demand Id</label>
                <input
                  type="number"
                  name="demandid"
                  value={inputObj && inputObj.demandid}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Destination Account Name</label>
                <input
                  type="text"
                  name="destinationaccount"
                  value={inputObj && inputObj.destinationaccount}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Recipient Name</label>
                <input
                  type="text"
                  name="recipientname"
                  value={inputObj && inputObj.recipientname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="column-2">
              <div className="field">
                <label>Order Type</label>

                <select name="ordertype" onChange={handleChange}>
                  <option value="">
                    Cx Demand/ Missing Item in RO/ Range Building/ Periodical
                    Repienishment
                  </option>
                  <option value={inputObj && inputObj.ordertype}>
                    Cx Demand
                  </option>
                  <option value={inputObj && inputObj.ordertype}>
                    Missing Item in RO
                  </option>
                  <option value={inputObj && inputObj.ordertype}>
                    Range Building
                  </option>
                  <option value={inputObj && inputObj.ordertype}>
                    Periodical Repienishment
                  </option>
                </select>
              </div>
              <div className="field">
                <label>Destination Type</label>
                <select name="destinationtype" onChange={handleChange}>
                  <option value="">IW/ RO/ VO/ WH/ OT </option>
                  <option value={inputObj && inputObj.destinationtype}>
                    IW
                  </option>
                  <option value={inputObj && inputObj.destinationtype}>
                    RO
                  </option>
                  <option value={inputObj && inputObj.destinationtype}>
                    VO
                  </option>
                  <option value={inputObj && inputObj.destinationtype}>
                    WH
                  </option>
                  <option value={inputObj && inputObj.destinationtype}>
                    OT
                  </option>
                </select>
              </div>
              <div className="field">
                <label>Recipient Contact</label>
                <input
                  type="text"
                  name="recipentcontact"
                  value={inputObj && inputObj.recipientcontact}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="doorstep-container">
          <div>
            <p>PART BUNDLE INFORMATION</p>
          </div>
          <div className="bundle-wrapper">
            <div className="part-column">
              <div className="field">
                <label>Part Numbers</label>
                <input
                  type="text"
                  name="partnumber"
                  value={inputObj && inputObj.partnumber}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={inputObj && inputObj.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Part Descriptions</label>
                <input
                  type="text"
                  name="partdescription"
                  value={inputObj && inputObj.partdescription}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={inputObj && inputObj.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="btn">
                <button className="btn-container">+ Add Part Bundle</button>
              </div>
            </div>
            <div>
              <PartInfo />
            </div>
          </div>
        </div>
        <div className="doorstep-container">
          <div className="destination-wrapper">
            <div className="column-1">
              <div className="field">
                <label>Destination Address</label>
                <input
                  type="text"
                  name="destinationaddress"
                  value={inputObj && inputObj.destinationaddress}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Order Value(Rs.)</label>
                <input
                  type="text"
                  name="ordervalue"
                  value={inputObj && inputObj.ordervalue}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="column-2">
              <div className="field">
                <label>Case Priority</label>
                <select name="casepriority" onChange={handleChange}>
                  <option value="">High/ Medium/ Low</option>
                  <option value={inputObj && inputObj.casepriority}>
                    High
                  </option>
                  <option value={inputObj && inputObj.casepriority}>
                    Medium
                  </option>
                  <option value={inputObj && inputObj.casepriority}>Low</option>
                </select>
              </div>
              <div className="field">
                <label>Action Status</label>
                <div
                  style={{ position: "relative", left: "20px" }}
                  className="btn"
                >
                  <button className="btn-container" onClick={yesClicked}>Yes</button>
                  <button className="btn-container" onClick={noClicked}>No</button>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-div">
            <div className="column-3">
              <div className="field">
                <label>Add Comment</label>
                <textarea
                  rows="3"
                  cols="60"
                  name="addcomment"
                  value={inputObj && inputObj.addcomment}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button className="btn-container" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Request;