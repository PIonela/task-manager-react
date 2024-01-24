import "./Badge.css";

function Badge(props) {
  const badgeColor = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "Pending":
        return "yellow";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      default:
        return "grey";
    }
  };
  return <p className={`status ${badgeColor()}`}>{props.status}</p>;
}

export default Badge;
