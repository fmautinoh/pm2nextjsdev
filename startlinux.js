const { spawn } = require('child_process');

// Configuración para Linux
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',     // Muestra logs en la consola actual
  shell: true,          // Opcional: usar shell si necesitas expansión de globs/variables
});

// Manejar la finalización del proceso
devProcess.on('close', (code) => {
  console.log(`Proceso terminado con código: ${code}`);
});

// Manejar señales de terminación para Linux
process.on('SIGINT', () => {
  devProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  devProcess.kill('SIGTERM');
});