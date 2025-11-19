import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

function Overview() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleNavigate}>Back to Home</button>
      {/* <button></button> */}
      <Footer />
    </div>
  );
}

export default Overview;
