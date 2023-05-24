import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import cardImg from "../assets/images/tarjetaConsulta.svg";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const CardInfo = () => {
  const [open, setOpen] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Abrir Alerta
      </Button>
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

export default CardInfo;
