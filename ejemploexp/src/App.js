import React from 'react';
import { 
  AppBar, Toolbar, Typography, Card, CardContent, Button, 
  TextField, Switch, Slider, Checkbox, FormControlLabel, Container 
} from '@mui/material';

function App() {
  return (
    <div>
      {/* Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Mi Aplicación con Material-UI
          </Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        {/* Tarjetas de ejemplo */}
        <Card style={{ marginBottom: '20px', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5">Ejemplo de Tarjeta</Typography>
            <Typography variant="body2">
              Esta es una tarjeta con Material-UI.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Acción
            </Button>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: '20px', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5">Otra Tarjeta</Typography>
            <Typography variant="body2">
              Segunda tarjeta con otro botón.
            </Typography>
            <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
              Acción Secundaria
            </Button>
          </CardContent>
        </Card>

        {/* TextField - Campo de entrada */}
        <TextField 
          label="Escribe algo" 
          variant="filled" 
          fullWidth 
          style={{ marginBottom: '20px' }} 
        />

        {/* Switch - Interruptor */}
        <FormControlLabel 
          control={<Switch />} 
          label="Activar opción" 
          style={{ marginBottom: '20px' }} 
        />

        {/* Slider - Barra deslizante */}
        <Typography gutterBottom>Ajustar nivel</Typography>
        <Slider defaultValue={30} style={{ marginBottom: '20px' }} />

        {/* Checkbox - Casilla de verificación */}
        <FormControlLabel 
          control={<Checkbox />} 
          label="Acepto los términos y condiciones" 
        />
      </Container>
    </div>
  );
}

export default App;
