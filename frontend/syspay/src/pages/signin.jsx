import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Typography,
} from "@material-ui/core";
import registrarImg from "../assets/images/nuevo.svg";
import "./styles/signIn.css";
export default function SignIn() {
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
                Registrarse
              </h1>
            </div>
            <img
              src={registrarImg}
              alt="Payment"
              className="payment-image"
              style={{
                width: "250px",
                height: "auto",
                marginRight: "5rem",
                padding: "0rem",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="payment-container">
              <Card className="payment-card">
                <CardContent>
                  <form onSubmit={handleSubmit} className="payment-form">
                    <TextField
                      label="Nombre Completo"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={nombreCompleto}
                      onChange={(e) => setNombreCompleto(e.target.value)}
                      className="payment-field"
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="payment-field"
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Identificación"
                          variant="outlined"
                          size="small"
                          value={identificacionNumero}
                          onChange={(e) =>
                            setIdentificacionNumero(e.target.value)
                          }
                          className="payment-field"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          select
                          label="Tipo"
                          variant="outlined"
                          size="small"
                          value={identificacionTipo}
                          onChange={(e) =>
                            setIdentificacionTipo(e.target.value)
                          }
                          className="payment-field"
                        >
                          <MenuItem value="cedula">Cédula</MenuItem>
                          <MenuItem value="pasaporte">Pasaporte</MenuItem>
                          <MenuItem value="ruc">RUC</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
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
                      component={Link}
                      to="/"
                      variant="contained"
                      color="primary"
                      className=""
                    >
                      Registrar
                    </Button>
                    <Button
                      component={Link}
                      to="/"
                      variant="outlined"
                      color="primary"
                      className=""
                    >
                      Cancelar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
