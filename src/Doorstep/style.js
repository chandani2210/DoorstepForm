
import styled from "styled-components";

export const StyledContainer = styled.div`
  .body-container {
    .doorstep-container {
      display: flex;
      justify-content: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      flex-direction: column;
      margin-right: 100px;
      margin-left: 100px;
      h5 {
        display: flex;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        left: 100px;
        letter-spacing: 2px;
        color: rgba(0, 0, 0, 0.6);
      }
      p {
        font-weight: 600;
      }
      hr {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      .doorstep-wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .column-1 {
          margin: 10px;
          .field {
            display: flex;
            font-size: 16px;
            font-family: Roboto;
            label {
              width: 30%;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
              color: rgba(0, 0, 0, 0.8);
            }
            input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
          }
        }
        .column-2 {
          margin: 10px;
          .field {
            display: flex;
            font-size: 16px;
            font-family: Roboto;
            label {
              width: 30%;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
              color: rgba(0, 0, 0, 0.8);
            }
            input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
            select {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
            }
          }
        }
      }

      .bundle-wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .part-column {
          margin: 10px;
          .field {
            display: flex;
            font-size: 16px;
            font-family: Roboto;
            label {
              width: 20%;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
              color: rgba(0, 0, 0, 0.8);
            }
            input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
          }
        }
      }
      .destination-wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .column-1 {
          margin: 10px;
          .field {
            display: flex;
            font-size: 16px;
            font-family: Roboto;
            label {
              width: 30%;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
              color: rgba(0, 0, 0, 0.8);
            }
            input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
          }
        }
        .column-2 {
          margin: 10px;
          .field {
            display: flex;
            font-size: 16px;
            font-family: Roboto;
            label {
              width: 30%;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
              color: rgba(0, 0, 0, 0.8);
            }
            input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
            select {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
            }
          }
        }
      }
      .comment-div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .column-3 {
          margin: 10px;
          .field {
            display: flex;
            font-size: 16px;
            font-family: Roboto;
            label {
              display: flex;
              align-items: center;
              color: rgba(0, 0, 0, 0.8);
            }
            textarea {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
          }
        }
      }
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      position: relative;
      right: 100px;
      margin: 20px auto;
      .btn-container {
        width: 108px;
        height: 36px;
        border: 1.2px solid #424543;
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.16));
        border-radius: 5px;
        font-weight: 600;
        font-size: 13.5px;
        line-height: 16px;
        letter-spacing: 0.02em;
        font-variant: small-caps;
        color: #424543;
        &:hover {
          transition: 0.2s;
          color: white;
          background-color: #424543;
          cursor: pointer;
        }
        &:disabled {
          border: 1.2px solid #cccccc;
          color: #cccccc;
          background-color: #f1f1f1;
        }
      }
    }
  }
`;