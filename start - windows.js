const { spawn } = require('child_process');

// Configuración para evitar abrir una nueva consola
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',          // Muestra logs en la consola actual
  shell: true,               // Usa el shell del sistema
  windowsHide: true,         // Oculta la ventana de comandos en Windows
});

// Manejar la finalización del proceso
devProcess.on('close', (code) => {
  console.log(`Proceso terminado con código: ${code}`);
});