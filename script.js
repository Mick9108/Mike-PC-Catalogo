const imagenRespaldo = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
const imgDesktop = "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80";
const imgDesktop2 = "https://images.unsplash.com/photo-1547082299-de196ea013d3?auto=format&fit=crop&w=800&q=80";
const imgLaptop = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80";
const imgLaptop2 = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80";
const imgMovil = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80";
const imgMovil2 = "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80";
const imgPlaca = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
const imgChip = "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80";
const imgSSD = "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80";
const imgGPU = "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80";

const productos = [
  { nombre: "PC Hogar Básica", categoria: "Desktop", tipo: "Equipo completo", precio: 329, imagen: imgDesktop2, descripcion: "Para navegar, estudiar, Office y videos. Flexibilidad de configuración: se puede mejorar después.", especs: { "CPU": "Intel Core i3", "RAM": "8 GB", "SSD / HDD": "SSD 256 GB", "GPU": "Integrada", "Conectividad": "WiFi y Ethernet", "Expansión": "2 espacios libres para RAM", "Compatibilidad": "Windows 11, Office y navegadores" } },
  { nombre: "PC Oficina Plus", categoria: "Desktop", tipo: "Equipo completo", precio: 649, imagen: imgDesktop, descripcion: "Para oficina, multitarea y trabajo diario sin lentitud.", especs: { "CPU": "Intel Core i5", "RAM": "16 GB", "SSD / HDD": "SSD 512 GB", "GPU": "Integrada", "Conectividad": "WiFi, Ethernet y Bluetooth", "Expansión": "Ranura PCIe libre y 2 espacios para RAM", "Compatibilidad": "Windows 11 Pro, Office y Zoom" } },
  { nombre: "PC Gaming Inicio", categoria: "Desktop", tipo: "Equipo completo", precio: 899, imagen: imgDesktop, descripcion: "Para jugar en buena calidad y estudiar o trabajar con programas exigentes.", especs: { "CPU": "AMD Ryzen 5", "RAM": "16 GB", "SSD / HDD": "SSD 1 TB", "GPU": "NVIDIA GTX 1660 6 GB", "Conectividad": "WiFi 6 y Ethernet", "Expansión": "Fuente de 650W, espacio para segunda SSD", "Compatibilidad": "Windows 11, juegos y programas de diseño básico" } },
  { nombre: "PC Gaming Élite", categoria: "Desktop", tipo: "Equipo completo", precio: 1999, imagen: imgDesktop, descripcion: "Para jugar en alta calidad, streaming y edición de video.", especs: { "CPU": "Intel Core i7", "RAM": "32 GB", "SSD / HDD": "SSD 1 TB + HDD 1 TB", "GPU": "NVIDIA RTX 4070 12 GB", "Conectividad": "WiFi 6E, Ethernet 2.5G y Bluetooth", "Expansión": "Placa ATX, 4 espacios para RAM y refrigeración líquida", "Compatibilidad": "Windows 11, juegos AAA y Adobe Premiere" } },
  { nombre: "PC Creador Pro", categoria: "Desktop", tipo: "Equipo completo", precio: 2999, imagen: imgDesktop, descripcion: "Para edición 4K, modelado 3D y trabajo pesado sin pausas.", especs: { "CPU": "Intel Core i9", "RAM": "64 GB", "SSD / HDD": "SSD 2 TB", "GPU": "NVIDIA RTX 4080 16 GB", "Conectividad": "WiFi 6E, Ethernet 10G y USB-C", "Expansión": "Torre grande, varias SSD y refrigeración líquida", "Compatibilidad": "Windows 11 Pro, Blender, Premiere y AutoCAD" } },
  { nombre: "Laptop Estudiante", categoria: "Laptop", tipo: "Equipo completo", precio: 399, imagen: imgLaptop, descripcion: "Portabilidad para clases, tareas y videollamadas. Ligera y fácil de llevar.", especs: { "CPU": "Intel Core i3", "RAM": "8 GB", "SSD / HDD": "SSD 256 GB", "GPU": "Integrada", "Conectividad": "WiFi y Bluetooth", "Expansión": "Depende del diseño, RAM soldada en algunos modelos", "Compatibilidad": "Windows 11, Office y Google Classroom" } },
  { nombre: "Laptop Trabajo Pro", categoria: "Laptop", tipo: "Equipo completo", precio: 699, imagen: imgLaptop2, descripcion: "Para trabajo diario, varias ventanas abiertas y reuniones en línea.", especs: { "CPU": "Intel Core i5", "RAM": "16 GB", "SSD / HDD": "SSD 512 GB", "GPU": "Integrada", "Conectividad": "WiFi 6, Bluetooth y USB-C", "Expansión": "Ranura para segunda SSD en este modelo", "Compatibilidad": "Windows 11 Pro, Office y Teams" } },
  { nombre: "Laptop Ultraportátil Air", categoria: "Laptop", tipo: "Equipo completo", precio: 899, imagen: imgLaptop, descripcion: "Muy liviana, buena batería y pantalla nítida para moverse todo el día.", especs: { "CPU": "AMD Ryzen 5", "RAM": "16 GB", "SSD / HDD": "SSD 512 GB", "GPU": "Integrada", "Conectividad": "WiFi 6E y Bluetooth", "Expansión": "Limitada por diseño delgado", "Compatibilidad": "Windows 11, Office y diseño ligero" } },
  { nombre: "Laptop Gaming", categoria: "Laptop", tipo: "Equipo completo", precio: 1299, imagen: imgLaptop2, descripcion: "Para jugar fuera de casa y editar video, con buena refrigeración.", especs: { "CPU": "Intel Core i7", "RAM": "16 GB", "SSD / HDD": "SSD 1 TB", "GPU": "NVIDIA RTX 4060 8 GB", "Conectividad": "WiFi 6, Ethernet y HDMI", "Expansión": "2 espacios para RAM y segunda SSD", "Compatibilidad": "Windows 11 y juegos actuales" } },
  { nombre: "Laptop Creador 16 pulgadas", categoria: "Laptop", tipo: "Equipo completo", precio: 1999, imagen: imgLaptop, descripcion: "Pantalla grande y precisa para diseño, foto y video profesional.", especs: { "CPU": "Intel Core i9", "RAM": "32 GB", "SSD / HDD": "SSD 1 TB", "GPU": "NVIDIA RTX 4070 8 GB", "Conectividad": "WiFi 6E, USB-C y lector SD", "Expansión": "RAM y SSD ampliables según modelo", "Compatibilidad": "Windows 11 Pro, Photoshop y Premiere" } },
  { nombre: "Workstation Diseño CAD", categoria: "Workstation", tipo: "Equipo completo", precio: 1499, imagen: imgDesktop, descripcion: "Capacidad para aplicaciones profesionales exigentes como CAD y planos.", especs: { "CPU": "Intel Xeon / Core i7", "RAM": "32 GB ECC", "SSD / HDD": "SSD 1 TB", "GPU": "NVIDIA Quadro T1000", "Conectividad": "Ethernet y USB-C", "Expansión": "Placa workstation con varias ranuras PCIe", "Compatibilidad": "AutoCAD, SolidWorks y Windows 11 Pro" } },
  { nombre: "Workstation Render 3D", categoria: "Workstation", tipo: "Equipo completo", precio: 2499, imagen: imgDesktop2, descripcion: "Para render, animación y simulación con muchos núcleos.", especs: { "CPU": "AMD Ryzen 9", "RAM": "64 GB", "SSD / HDD": "SSD 2 TB", "GPU": "NVIDIA RTX 4070 Ti 12 GB", "Conectividad": "Ethernet 2.5G y WiFi 6E", "Expansión": "Torre grande para varias GPU y discos", "Compatibilidad": "Blender, Maya y Windows 11 Pro" } },
  { nombre: "Workstation Extrema", categoria: "Workstation", tipo: "Equipo completo", precio: 3999, imagen: imgDesktop, descripcion: "Lo más alto para estudios profesionales, servidores de trabajo e IA local.", especs: { "CPU": "Intel Core i9 Extreme", "RAM": "128 GB", "SSD / HDD": "SSD 2 TB + HDD 4 TB", "GPU": "NVIDIA RTX 4090 24 GB", "Conectividad": "Ethernet 10G y USB-C", "Expansión": "Máxima expansión de RAM, discos y GPU", "Compatibilidad": "Software profesional, IA y render pesado" } },
  { nombre: "Teléfono Esencial", categoria: "Móvil", tipo: "Equipo completo", precio: 149, imagen: imgMovil, descripcion: "Movilidad y conectividad básica: llamadas, mensajes, redes y fotos.", especs: { "CPU": "Procesador gama de entrada", "RAM": "4 GB", "SSD / HDD": "Almacenamiento 64 GB", "GPU": "Integrada", "Conectividad": "4G, WiFi y Bluetooth", "Expansión": "MicroSD según modelo", "Compatibilidad": "Apps básicas y redes sociales" } },
  { nombre: "Teléfono Gama Media", categoria: "Móvil", tipo: "Equipo completo", precio: 299, imagen: imgMovil2, descripcion: "Buen equilibrio entre precio, cámara y batería para el día a día.", especs: { "CPU": "Procesador gama media", "RAM": "8 GB", "SSD / HDD": "Almacenamiento 128 GB", "GPU": "Integrada", "Conectividad": "5G, WiFi y Bluetooth", "Expansión": "Limitada, sin piezas internas ampliables", "Compatibilidad": "Apps, juegos ligeros y trabajo móvil" } },
  { nombre: "Teléfono Pro", categoria: "Móvil", tipo: "Equipo completo", precio: 599, imagen: imgMovil, descripcion: "Cámara avanzada, pantalla fluida y buen rendimiento para trabajo móvil.", especs: { "CPU": "Procesador gama alta", "RAM": "12 GB", "SSD / HDD": "Almacenamiento 256 GB", "GPU": "Integrada de alto rendimiento", "Conectividad": "5G, WiFi 6 y NFC", "Expansión": "Limitada por reparación sellada", "Compatibilidad": "Apps profesionales y edición móvil" } },
  { nombre: "Teléfono Ultra Premium", categoria: "Móvil", tipo: "Equipo completo", precio: 999, imagen: imgMovil2, descripcion: "Lo más alto en cámara, pantalla y velocidad para uso exigente.", especs: { "CPU": "Procesador tope de gama", "RAM": "16 GB", "SSD / HDD": "Almacenamiento 512 GB", "GPU": "Integrada de alto rendimiento", "Conectividad": "5G, WiFi 7 y NFC", "Expansión": "Limitada, reparación especializada", "Compatibilidad": "Video 4K, juegos y trabajo móvil avanzado" } },
  { nombre: "Procesador Intel Core i3", categoria: "CPU", tipo: "Original", precio: 99, imagen: imgChip, descripcion: "Capacidad de procesamiento para tareas básicas y oficina.", especs: { "Detalle": "4 núcleos, para PC de hogar y oficina", "Compatibilidad": "Placas LGA 1700 según generación, verificar modelo" } },
  { nombre: "Procesador Intel Core i5", categoria: "CPU", tipo: "Original", precio: 189, imagen: imgChip, descripcion: "Capacidad de procesamiento para multitarea, juegos y trabajo.", especs: { "Detalle": "6 a 10 núcleos según generación", "Compatibilidad": "Verificar placa y generación antes de comprar" } },
  { nombre: "Procesador Intel Core i5", categoria: "CPU", tipo: "Refacción", precio: 129, imagen: imgChip, descripcion: "Mismo modelo reacondicionado y verificado, a menor precio.", especs: { "Detalle": "6 a 10 núcleos según generación, probado antes de la venta", "Compatibilidad": "Verificar placa y generación antes de comprar" } },
  { nombre: "Procesador AMD Ryzen 7", categoria: "CPU", tipo: "Original", precio: 329, imagen: imgChip, descripcion: "Capacidad de procesamiento alta para juegos, streaming y edición.", especs: { "Detalle": "8 núcleos y 16 hilos", "Compatibilidad": "Placas AM4 / AM5 según generación, verificar modelo" } },
  { nombre: "Procesador Intel Core i9", categoria: "CPU", tipo: "Original", precio: 549, imagen: imgChip, descripcion: "Capacidad de procesamiento máxima para trabajo profesional.", especs: { "Detalle": "16 a 24 núcleos según generación", "Compatibilidad": "Placas de gama alta, verificar modelo y refrigeración" } },
  { nombre: "Memoria RAM 8 GB DDR4", categoria: "RAM", tipo: "Original", precio: 29, imagen: imgPlaca, descripcion: "Memoria disponible para aplicaciones básicas y navegación.", especs: { "Detalle": "1 módulo de 8 GB DDR4 3200 MHz", "Compatibilidad": "PC de escritorio y laptop según formato, verificar DDR" } },
  { nombre: "Memoria RAM 16 GB DDR4", categoria: "RAM", tipo: "Original", precio: 59, imagen: imgPlaca, descripcion: "Memoria disponible para multitarea, juegos y trabajo.", especs: { "Detalle": "2 módulos de 8 GB DDR4 3200 MHz", "Compatibilidad": "Verificar DDR4 y espacios libres" } },
  { nombre: "Memoria RAM 16 GB DDR4", categoria: "RAM", tipo: "Refacción", precio: 39, imagen: imgPlaca, descripcion: "Memoria reacondicionada y probada, ideal para mejorar una PC usada.", especs: { "Detalle": "2 módulos de 8 GB DDR4, probados", "Compatibilidad": "Verificar DDR4 y espacios libres" } },
  { nombre: "Memoria RAM 32 GB DDR5", categoria: "RAM", tipo: "Original", precio: 119, imagen: imgPlaca, descripcion: "Memoria disponible para edición, juegos exigentes y varias apps abiertas.", especs: { "Detalle": "2 módulos de 16 GB DDR5 5600 MHz", "Compatibilidad": "Solo placas DDR5, verificar modelo" } },
  { nombre: "SSD 256 GB", categoria: "Almacenamiento", tipo: "Original", precio: 35, imagen: imgSSD, descripcion: "Almacenamiento rápido: la PC enciende y abre programas en segundos.", especs: { "Detalle": "SSD SATA 256 GB, lectura rápida", "Compatibilidad": "PC y laptop con puerto SATA o M.2 según modelo" } },
  { nombre: "SSD 1 TB", categoria: "Almacenamiento", tipo: "Original", precio: 89, imagen: imgSSD, descripcion: "Almacenamiento y rendimiento de acceso a datos para juegos y archivos grandes.", especs: { "Detalle": "SSD NVMe 1 TB de alta velocidad", "Compatibilidad": "Verificar puerto M.2 NVMe" } },
  { nombre: "SSD 1 TB", categoria: "Almacenamiento", tipo: "Refacción", precio: 65, imagen: imgSSD, descripcion: "SSD reacondicionado y verificado, buena opción para mejorar una PC usada.", especs: { "Detalle": "SSD 1 TB, salud verificada antes de la venta", "Compatibilidad": "Verificar puerto M.2 o SATA según modelo" } },
  { nombre: "Disco HDD 1 TB", categoria: "Almacenamiento", tipo: "Original", precio: 49, imagen: imgSSD, descripcion: "Almacenamiento económico para fotos, videos y respaldos.", especs: { "Detalle": "HDD 1 TB 7200 RPM", "Compatibilidad": "PC de escritorio y cajas externas" } },
  { nombre: "Disco HDD 2 TB", categoria: "Almacenamiento", tipo: "Original", precio: 69, imagen: imgSSD, descripcion: "Más espacio para archivos grandes a bajo costo por GB.", especs: { "Detalle": "HDD 2 TB 7200 RPM", "Compatibilidad": "PC de escritorio y cajas externas" } },
  { nombre: "Tarjeta Gráfica GTX 1650 4 GB", categoria: "GPU", tipo: "Original", precio: 179, imagen: imgGPU, descripcion: "Procesamiento gráfico para juegos ligeros y video.", especs: { "Detalle": "4 GB GDDR6, no requiere conector extra en muchos modelos", "Compatibilidad": "Fuente de 300W o más, verificar tamaño del gabinete" } },
  { nombre: "Tarjeta Gráfica RTX 4060 8 GB", categoria: "GPU", tipo: "Original", precio: 329, imagen: imgGPU, descripcion: "Procesamiento gráfico y tareas especializadas como edición y render.", especs: { "Detalle": "8 GB GDDR6, ray tracing y DLSS", "Compatibilidad": "Fuente de 550W o más" } },
  { nombre: "Tarjeta Gráfica RTX 4060 8 GB", categoria: "GPU", tipo: "Refacción", precio: 249, imagen: imgGPU, descripcion: "Tarjeta reacondicionada y probada, para jugar sin pagar precio nuevo.", especs: { "Detalle": "8 GB GDDR6, probada antes de la venta", "Compatibilidad": "Fuente de 550W o más" } },
  { nombre: "Tarjeta Gráfica RTX 4090 24 GB", categoria: "GPU", tipo: "Original", precio: 1599, imagen: imgGPU, descripcion: "Procesamiento gráfico máximo para 4K, IA y render profesional.", especs: { "Detalle": "24 GB GDDR6X", "Compatibilidad": "Fuente de 850W o más y gabinete grande" } },
  { nombre: "Adaptador WiFi USB", categoria: "Conectividad", tipo: "Original", precio: 25, imagen: imgPlaca, descripcion: "Acceso a redes inalámbricas para PC sin WiFi integrado.", especs: { "Detalle": "WiFi 6 USB, antena externa", "Compatibilidad": "Windows 10 y 11" } },
  { nombre: "Tarjeta Ethernet Gigabit", categoria: "Conectividad", tipo: "Original", precio: 19, imagen: imgPlaca, descripcion: "Acceso a redes por cable, estable y rápido para juegos y trabajo.", especs: { "Detalle": "Ethernet 10/100/1000 PCIe", "Compatibilidad": "PC de escritorio con ranura PCIe" } },
  { nombre: "Router WiFi 6", categoria: "Conectividad", tipo: "Original", precio: 89, imagen: imgPlaca, descripcion: "Acceso a redes y periféricos en casa u oficina, para varios equipos.", especs: { "Detalle": "WiFi 6, 4 puertos Ethernet", "Compatibilidad": "Módem de internet por cable o fibra" } },
  { nombre: "Fuente de Poder 650W", categoria: "Expansión", tipo: "Original", precio: 69, imagen: imgPlaca, descripcion: "Posibilidad de mejorar componentes: alimenta una GPU dedicada y más discos.", especs: { "Detalle": "650W 80 Plus Bronze", "Compatibilidad": "Gabinetes ATX estándar" } },
  { nombre: "Fuente de Poder 650W", categoria: "Expansión", tipo: "Refacción", precio: 45, imagen: imgPlaca, descripcion: "Fuente reacondicionada y probada para mejorar una PC usada.", especs: { "Detalle": "650W, probada antes de la venta", "Compatibilidad": "Gabinetes ATX estándar" } },
  { nombre: "Placa Madre ATX", categoria: "Expansión", tipo: "Original", precio: 139, imagen: imgPlaca, descripcion: "Base para mejorar CPU, RAM, GPU y almacenamiento en el futuro.", especs: { "Detalle": "4 espacios para RAM, ranuras PCIe y M.2", "Compatibilidad": "Verificar CPU y DDR antes de comprar" } },
  { nombre: "Sistema de Enfriamiento Líquido 240mm", categoria: "Expansión", tipo: "Original", precio: 99, imagen: imgPlaca, descripcion: "Mejor refrigeración para CPU exigentes y gabinetes con espacio.", especs: { "Detalle": "Radiador de 240mm con 2 ventiladores", "Compatibilidad": "Verificar espacio en el gabinete y socket del CPU" } }
];

let categoriaActual = "Todos";

function listaEspecs(especs) {
  if (!especs) return "";
  let html = '<ul class="especs">';
  for (const clave in especs) {
    html += "<li><strong>" + clave + ":</strong> " + especs[clave] + "</li>";
  }
  html += "</ul>";
  return html;
}

function mostrarProductos() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const tipo = document.getElementById("filtro-tipo").value;
  const rango = document.getElementById("filtro-precio").value;
  const orden = document.getElementById("orden").value;

  let lista = productos.filter(function(p) {
    const porCategoria = categoriaActual === "Todos" || p.categoria === categoriaActual;
    const porTipo = tipo === "Todos" || p.tipo === tipo;
    const porTexto = p.nombre.toLowerCase().includes(texto) || p.categoria.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
    let porPrecio = true;
    if (rango === "economico") porPrecio = p.precio <= 200;
    if (rango === "medio") porPrecio = p.precio > 200 && p.precio <= 700;
    if (rango === "alto") porPrecio = p.precio > 700 && p.precio <= 1500;
    if (rango === "premium") porPrecio = p.precio > 1500;
    return porCategoria && porTipo && porTexto && porPrecio;
  });

  if (orden === "menor") lista.sort(function(a, b) { return a.precio - b.precio; });
  if (orden === "mayor") lista.sort(function(a, b) { return b.precio - a.precio; });
  if (orden === "nombre") lista.sort(function(a, b) { return a.nombre.localeCompare(b.nombre); });

  const contenedor = document.getElementById("productos");
  const contador = document.getElementById("contador");
  contador.textContent = "Mostrando " + lista.length + " de " + productos.length + " productos";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos con esos filtros. Borra la búsqueda o elige Todos.</p>";
    return;
  }

  let html = "";
  lista.forEach(function(p) {
    const claseTipo = p.tipo === "Original" ? "original" : (p.tipo === "Refacción" ? "refaccion" : "");
    html += '<article class="tarjeta">';
    html += '<img src="' + p.imagen + '" alt="' + p.nombre + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + imagenRespaldo + '\';">';
    html += '<div class="contenido">';
    html += '<div class="etiquetas"><span class="etiqueta">' + p.categoria + '</span><span class="etiqueta ' + claseTipo + '">' + p.tipo + '</span></div>';
    html += "<h3>" + p.nombre + "</h3>";
    html += "<p>" + p.descripcion + "</p>";
    html += '<p class="precio">$' + p.precio.toLocaleString("en-US") + "</p>";
    html += listaEspecs(p.especs);
    html += "</div></article>";
  });
  contenedor.innerHTML = html;
}

document.getElementById("buscador").addEventListener("input", mostrarProductos);
document.getElementById("filtro-tipo").addEventListener("change", mostrarProductos);
document.getElementById("filtro-precio").addEventListener("change", mostrarProductos);
document.getElementById("orden").addEventListener("change", mostrarProductos);

document.querySelectorAll(".filtro").forEach(function(boton) {
  boton.addEventListener("click", function() {
    document.querySelectorAll(".filtro").forEach(function(b) { b.classList.remove("activo"); });
    boton.classList.add("activo");
    categoriaActual = boton.getAttribute("data-categoria");
    mostrarProductos();
  });
});

mostrarProductos();

