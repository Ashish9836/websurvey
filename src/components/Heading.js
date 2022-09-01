import MyStyle from "./Style";
const Heading = (props) => {
  return (
    <div>
      <div style={{textAlign:"center"}}>
      </div>
      <div style={MyStyle.MessageBlockHeading}>{props.message}</div>
    </div>
  );
};
export default Heading;
