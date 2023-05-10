import { useNavigate } from "react-router-dom";

import classes from "./VoltaBtn.module.css";

const VoltaBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={classes.back_btn} onClick={() => navigate(-1)}>
        Voltar
      </button>
    </>
  );
};

export default VoltaBtn;