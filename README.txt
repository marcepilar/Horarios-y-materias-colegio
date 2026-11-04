HORARIO ESCOLAR — PWA V1.3.6

Nombre neutro: "Horario Escolar" (sin nombre de persona). Las materias y horarios siguen fijos según el horario original.
Conserva 5 tarjetas de lunes a viernes, scroll de detalles sin recortes, centrado automático Jueves/Viernes,
3 temas, WhatsApp y QR. Actualización de V1.3.5: solo cambia nombre/metadatos y QR offline, no el horario.

INSTALACIÓN: subir TODOS los archivos descomprimidos del ZIP a la raíz del mismo repositorio GitHub Pages.
Reemplazar archivos del mismo nombre. No subir el ZIP directamente.
Mantener la misma URL GitHub Pages conserva la instalación actual; puede requerir cerrar y reabrir.

PARA CAMBIAR EL NOMBRE EN EL FUTURO:
- En index.html cambiar el texto del <h1>, <title>, apple-mobile-web-app-title, y los textos de compartir.
- En manifest.webmanifest cambiar name y short_name.
- Conviene cambiar también app en version.json y descripción / metadatos.
- Subir la nueva versión de service-worker.js con CACHE_NAME actualizado para forzar la actualización.
La app instalada puede tardar en mostrar el nuevo nombre en el icono; en algunos móviles requiere reinstalarla.
