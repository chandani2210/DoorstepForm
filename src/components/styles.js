import styled from "styled-components";

export const StyledPartContainer = styled.div`
  .part-container {
    background-color: #c9c9c7;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 6px;
    border-radius: 4px;
    .part-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 5px;
      p {
        font-size: 14px;
        font-family: Roboto;
        margin: 2px;
        font-weight: 500;
      }
    }
  }
`;