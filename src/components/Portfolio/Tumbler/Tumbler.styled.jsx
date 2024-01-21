import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #ffffff;
  width: 660px;
  border-radius: 10px;
  gap: 5px;
`;

const TumblerBtn = styled.button.attrs((props) => ({
  active: String(props.active) || "false",
}))`
  padding: 15px 10px;
  font-size: 18px;
  font-family: "Inconsolata", monospace;
  width: 310px;
  border: none;
  border-radius: 10px;
  background-color: ${({ active }) =>
    active === "true" ? "#4f6f52" : "#eef0e5"};
  color: ${({ active }) => (active === "true" ? "#eef0e5" : "#163020")};
  cursor: pointer;
`;

export { Container, TumblerBtn };
