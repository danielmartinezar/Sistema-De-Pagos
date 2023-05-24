import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/home.css";
import homeImg from "../assets/images/sitio-web.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import NavBar from "../components/NavBar";

const Home = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [identificacionTipo, setIdentificacionTipo] = useState("");
  const [identificacionNumero, setIdentificacionNumero] = useState("");
  const [conceptoPago, setConceptoPago] = useState("");
  const [monto, setMonto] = useState("");
  const [nroTarjeta, setNroTarjeta] = useState("");
  const [cvc, setCvc] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar las acciones que desees con los datos del formulario
    console.log("Datos del formulario:", {
      nombreCompleto,
      email,
      identificacionTipo,
      identificacionNumero,
      conceptoPago,
      monto,
      nroTarjeta,
      cvc,
      fechaVencimiento,
    });
  };

  return (
    <div style={{ backgroundColor: "#D9D9D9", padding: "20px" }}>
      <NavBar />
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className="title-container">
              <h1
                className="title"
                style={{
                  fontFamily: "Segoe UI Bold",
                  color: "#595959",
                  marginTop: "3.5rem",
                }}
              >
                Sistema De Pagos En Línea
              </h1>
            </div>
            <img
              src={homeImg}
              alt="Payment"
              className="payment-image"
              style={{
                width: "250px",
                height: "auto",
                marginRight: "5rem",
                padding: "0rem",
              }}
            />
            <Typography
              style={{
                marginTop: "0.5rem",
                fontFamily: "Segoe UI",
                color: "#595959",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut corporis dolorem, porro non provident. Quo incidunt rem velit eligendi maxime hic aliquam maiores in nesciunt ducimus, officia eum. Esse.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="payment-container">
              <Card className="payment-card">
                <CardContent>
                  <h2
                    style={{
                      fontFamily: "Segoe UI Bold",
                      color: "#595959",
                      marginLeft: "1rem",
                    }}
                  >
                    Login
                  </h2>
                  <form onSubmit={handleSubmit} className="payment-form">
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="payment-field"
                    />
                    <TextField
                      label="Contraseña"
                      variant="outlined"
                      fullWidth
                      type="password"
                      size="small"
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      className="payment-field"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="login-button"
                    >
                      Iniciar Sesión
                    </Button>
                    <Button
                      component={Link}
                      to="/registrar"
                      variant="outlined"
                      color="primary"
                      className=""
                    >
                      Registrarse
                    </Button>
                  </form>
                  <Typography
                    style={{
                      marginTop: "0.5rem",
                      marginBottom: "0.7rem",
                      textDecoration: "underline",
                      cursor: "pointer",
                      textAlign: "center",
                      width: "100%",
                      flex: "1",
                    }}
                    onClick={() => {
                      // Acción a realizar cuando se hace clic en el texto
                      console.log("Texto clickeado");
                    }}
                    className="payment-field"
                  >
                    ¿Olvidaste tu contraseña?
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
