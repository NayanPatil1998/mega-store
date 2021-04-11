import { ClockLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <ClockLoader size="80px" />
    </div>
  );
};

export default Loading;
