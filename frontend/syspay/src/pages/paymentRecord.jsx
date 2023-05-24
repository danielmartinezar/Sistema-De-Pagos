import React, { useState } from "react";
import { TextField, Card, CardContent, Button } from "@material-ui/core";
import "./styles/paymentRecord.css";
import NavBar from "../components/NavBar";

function PaymentRecord() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      nombreCompleto: "John Doe",
      email: "john.doe@example.com",
      fecha: "2023-05-21",
      monto: 100,
      estado: "Pagado",
      nroTarjeta: "************1234",
    },
    {
      id: 2,
      nombreCompleto: "Jane Smith",
      email: "jane.smith@example.com",
      fecha: "2023-05-20",
      monto: 200,
      estado: "Pendiente",
      nroTarjeta: "************5678",
    },
    {
      id: 3,
      nombreCompleto: "Bob Johnson",
      email: "bob.johnson@example.com",
      fecha: "2023-05-19",
      monto: 150,
      estado: "Rechazado",
      nroTarjeta: "************9012",
    },
    {
      id: 1,
      nombreCompleto: "John Doe",
      email: "john.doe@example.com",
      fecha: "2023-05-21",
      monto: 100,
      estado: "Pagado",
      nroTarjeta: "************1234",
    },
    {
      id: 2,
      nombreCompleto: "Jane Smith",
      email: "jane.smith@example.com",
      fecha: "2023-05-20",
      monto: 200,
      estado: "Pendiente",
      nroTarjeta: "************5678",
    },
    {
      id: 3,
      nombreCompleto: "Bob Johnson",
      email: "bob.johnson@example.com",
      fecha: "2023-05-19",
      monto: 150,
      estado: "Rechazado",
      nroTarjeta: "************9012",
    },
    {
      id: 1,
      nombreCompleto: "Jaime Doe",
      email: "john.doe@example.com",
      fecha: "2023-05-21",
      monto: 100,
      estado: "Pagado",
      nroTarjeta: "************1234",
    },
    {
      id: 2,
      nombreCompleto: "Andres Smith",
      email: "jane.smith@example.com",
      fecha: "2023-05-20",
      monto: 200,
      estado: "Pendiente",
      nroTarjeta: "************5678",
    },
    {
      id: 3,
      nombreCompleto: "Carlos Johnson",
      email: "bob.johnson@example.com",
      fecha: "2023-05-19",
      monto: 150,
      estado: "Rechazado",
      nroTarjeta: "************9012",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < transactions.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const currentTransactions = transactions.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div
      className="payment-record-container"
      style={{ backgroundColor: "#D9D9D9", padding: "20px" }}
    >
      <div className="payment-record-container">
        <NavBar />
        <div className="title-container">
          <h1
            className="title"
            style={{
              fontFamily: "Segoe UI Bold",
              color: "#595959",
              marginTop: "3.5rem",
            }}
          >
            Historial De Transacciones
          </h1>
        </div>
        <div className="payment-cards-container">
          {currentTransactions.map((transaction) => (
            <Card className="payment-card" key={transaction.id}>
              <CardContent>
                <form className="payment-form">
                  <TextField
                    label="Nombre Completo"
                    variant="outlined"
                    disabled
                    fullWidth
                    size="small"
                    value={transaction.nombreCompleto}
                    className="payment-field"
                  />
                  <TextField
                    label="Nro.Transacción"
                    variant="outlined"
                    disabled
                    fullWidth
                    size="small"
                    value={transaction.email}
                    className="payment-field"
                  />
                  <TextField
                    label="Fecha"
                    variant="outlined"
                    disabled
                    fullWidth
                    size="small"
                    value={transaction.fecha}
                    className="payment-field"
                  />
                  <TextField
                    label="Monto"
                    variant="outlined"
                    disabled
                    fullWidth
                    size="small"
                    value={transaction.monto}
                    className="payment-field"
                  />
                  <TextField
                    label="Estado"
                    variant="outlined"
                    disabled
                    fullWidth
                    size="small"
                    value={transaction.estado}
                    className="payment-field"
                  />
                  <TextField
                    label="Número de Tarjeta"
                    variant="outlined"
                    disabled
                    fullWidth
                    size="small"
                    value={transaction.nroTarjeta}
                    className="payment-field"
                  />
                </form>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="payment-navigation">
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrevClick}
            className="button-navigation"
            disabled={currentIndex === 0}
          >
            &#x2190; Anterior
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleNextClick}
            className="button-navigation"
            disabled={currentIndex >= transactions.length - 3}
          >
            Siguiente &#x2192;
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentRecord;
