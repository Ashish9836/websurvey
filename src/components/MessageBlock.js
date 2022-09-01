import MyStyle from "./Style";
const MessageBlock = (props) => {
  return (
    <div>
      <div style={{textAlign:"center"}}>
      </div>
      <div style={MyStyle.MessageBlock}>{props.message}</div>
    </div>
  );
};
export default MessageBlock;
