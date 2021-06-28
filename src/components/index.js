import React from "react";
import { StyledPartContainer } from "./styles";
const PartInfo = (props) => {
  console.log(props.item);
  return (
    <StyledPartContainer>
      <div className="part-container">
        <div className="part-wrapper">
          <div>
            <p>Part No: XXXXXXXXXXXX </p>
          </div>
          <div>
            <p>Brand: Mahindra</p>
          </div>
          <div>
            <p>Part Desc: Clutch Brake</p>
          </div>
          <div>
            <p>Quantity: 2</p>
          </div>
        </div>
      </div>
      <div className="part-container">
        <div className="part-wrapper">
          <div>
            <p>Part No: XXXXXXXXXXXX </p>
          </div>
          <div>
            <p>Brand: Mahindra</p>
          </div>
          <div>
            <p>Part Desc: Head Light</p>
          </div>
          <div>
            <p>Quantity: 10</p>
          </div>
        </div>
      </div>
    </StyledPartContainer>
  );
};

export default PartInfo