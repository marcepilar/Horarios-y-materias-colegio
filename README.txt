HORARIO ESCOLAR — COLEGIO CHESTERTON PILAR — V1.4.21 DE PRUEBA
BASE: V1.4.20 DE PRUEBA · ESTABLE OFICIAL: V1.4.18

CORRECCIÓN ÚNICA:
- Antes, la ventana Ayuda decía siempre «Versión V1.4.18» aunque el código
  ejecutara la V1.4.19 o la V1.4.20.
- Ahora Ayuda presenta la versión obtenida automáticamente desde APP_VERSION;
  no hay dos números diferentes que mantener manualmente.
- Se incrementa versión.json y el caché del service worker a V1.4.21.

SE CONSERVAN: apertura y cierre suave de tarjetas (540 ms), aparición de
materias (400 ms), los horarios reales y recreos, todos los controles,
modos de tema, iconos de PWA, identificador, manifiesto y banner.
North Green Academy no se modifica.

PARA PUBLICAR:
1. Descomprimí este ZIP y reemplazá TODOS los archivos en el repositorio de Chesterton.
2. Esperá a que GitHub Pages termine de publicar los cambios.
3. Abrí la PWA y comprobá en Ayuda que indique «Versión V1.4.21».
4. Esta versión sigue EN PRUEBA hasta aprobación.
