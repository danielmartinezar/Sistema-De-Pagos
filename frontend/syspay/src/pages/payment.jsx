import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./styles/pay.css";
import tarjetaDebito from "../assets/images/tarjetaDebito.svg";
import cardImg from "../assets/images/tarjetaConsulta.svg";
import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const Payment = () => {
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
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const classes = useStyles();
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

  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const handleOpenAlertDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                Realizar Pago En Línea
              </h1>
            </div>
            <img
              src={tarjetaDebito}
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
                      label="Monto"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      className="payment-field"
                    />
                    <TextField
                      select
                      label="Tipo de tarjeta"
                      variant="outlined"
                      size="small"
                      value={identificacionTipo}
                      onChange={(e) => setIdentificacionTipo(e.target.value)}
                      className="payment-field"
                    >
                      <MenuItem value="debito">Debito</MenuItem>
                      <MenuItem value="credit">Credito</MenuItem>
                    </TextField>
                    <TextField
                      label="Número de Tarjeta"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={nroTarjeta}
                      onChange={(e) => setNroTarjeta(e.target.value)}
                      className="payment-field"
                    />

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Fecha de Vencimiento"
                          variant="outlined"
                          fullWidth
                          size="small"
                          value={fechaVencimiento}
                          onChange={(e) => setFechaVencimiento(e.target.value)}
                          className="payment-field"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="CVC"
                          variant="outlined"
                          fullWidth
                          size="small"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          className="payment-field"
                        />
                      </Grid>
                      {/* Botón para abrir el AlertDialog */}
                      <Typography
                        style={{
                          marginTop: "0.5rem",
                          marginBottom: "0.7rem",
                          textDecoration: "underline",
                          cursor: "pointer",
                          textAlign: "center",
                          width: "40%",
                          flex: "1",
                        }}
                        onClick={handleOpenAlertDialog}
                        className="payment-field"
                      >
                        ¿Ver Saldo?
                      </Typography>
                    </Grid>
                    {/* Resto del formulario */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="payment-button"
                    >
                      Pagar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* AlertDialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                alt="Imagen"
                image={cardImg}
                style={{
                  height: "200px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
            <CardContent>
              <TextField
                label="Tarjeta Seleccionada"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Saldo Disponible"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                fullWidth
                margin="normal"
              />
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payment;
