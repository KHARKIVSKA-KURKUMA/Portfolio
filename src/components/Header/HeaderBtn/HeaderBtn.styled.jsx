import styled from "styled-components";

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #4f6f52;
  border: none;
  transition: background-color 500ms cubic-bezier(0.23, 1, 0.32, 1);
  padding: 15px 30px;
  border-radius: 10px;
  color: #eef0e5;
  font-size: 18px;
  font-family: "Inconsolata", monospace;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  &:hover,
  &:focus {
    background-color: #163020;
  }
`;
const LinkToEmail = styled.a`
  background-color: #eef0e5;
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 18px;
  color: #163020;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: background-color 500ms cubic-bezier(0.23, 1, 0.32, 1),
    color 500ms cubic-bezier(0.23, 1, 0.32, 1);
  &:hover,
  &:focus {
    background-color: #163020;
    color: #eef0e5;
  }
`;
export { LinkToEmail, Button, BtnWrap };
