import React, { useState } from "react";
import "./Main.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Main = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bgColor, setBgColor] = useState("#00BFFF");
  const [statusMessage, setStatusMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  function messageImc(imc) {
    if (imc < 16) {
      setBgColor("#ec2300");
      setAlert("danger");
      setMessage("Severe slimness");
    } else if (imc < 17) {
      setBgColor("#ff4040");
      setAlert("danger");
      setMessage("Moderate slimness");
    } else if (imc < 18.5) {
      setBgColor("#ff4500");
      setAlert("warning");
      setMessage("Slimness light");
    } else if (imc < 25) {
      setBgColor("#008000");
      setAlert("success");
      setMessage("Healthy");
    } else if (imc < 30) {
      setBgColor("#ff4500");
      setAlert("warning");
      setMessage("Overweight");
    } else if (imc < 35) {
      setBgColor("#ff4500");
      setAlert("warning");
      setMessage("Obesity grade I");
    } else if (imc < 40) {
      setBgColor("#ff4040");
      setAlert("danger");
      setMessage("Obesity grade II (Severe)");
    } else {
      setBgColor("#ec2300");
      setAlert("danger");
      setMessage("Obesity grade III (Morbid)");
    }
  }

  function calcularImc(height, weight) {
    const imc = weight / (height * height);
    if (imc > 1) {
      setStatusMessage(true);

      messageImc(imc);
    }
  }

  function resetForm() {
    setHeight("");
    setWeight("");
    setBgColor("#00BFFF");
    setStatusMessage(false);
    setMessage("");
    setAlert("");
  }

  return (
    <div className={`div-main`} style={{ backgroundColor: bgColor }}>
      <div className="card main-card">
        <h5 className="card-header text-center">IMC Calculation</h5>
        <div className="card-body ">
          <form>
            <Input
              label="Weight"
              id="weight"
              type="number"
              value={weight}
              onChange={setWeight}
            />
            <Input
              label="Height"
              id="height"
              type="number"
              value={height}
              onChange={setHeight}
            />
            <Button
              className="btn btn-info w-100 mt-3"
              label="Calculate"
              onClick={() => calcularImc(height, weight)}
              type="button"
            />
            <div className="w-100 d-flex justify-content-end">
              <Button
                className="btn btn-dark w-25 mt-3"
                label="Reset"
                onClick={() => resetForm()}
                type="button"
              />
            </div>
          </form>
        </div>
        {statusMessage ? (
          <div className={`alert alert-${alert} mx-3`} role="alert">
            {message}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
