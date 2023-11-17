# Contexto

Una Universidad cuenta con un servicio de transporte interno basado en robots y drones, los cuales son utilizados como prototipo para luego poder validar su funcionalidad en sitios de difícil acceso. 

Actualmente el sistema funciona de manera manual, ciertas personas ofrecen los servicios de acuerdo a cada necesidad particular. En estos momentos la demanda interna está creciendo y aunque se cuenta con tres personas en el equipo, cuando hay altas solicitudes no es posibles atenderlas de manera paralela (aunque se cuente con 6 dispositivos), ya que depende de que una persona se libere para manejar y configurar el dispositivo.

Llega entonces la necesidad de contar con un sistema de información centralizado que permita que estos robots y drones puedan ser configurados por un sistema general y que no dependa de una persona manejando cada artefacto de forma manual.

**Servicios que actualmente se ofrecen:**

- Transporte de objetos pequeños con los robots.

- Documentos entre oficinas, pedidos de cafeterías a personal administrativo.

- Con los drones se brinda el servicio de grabación de encuentros artísticos o deportivos en zonas abiertas.

### ¿Qué debe tener el sistema centralizado como mínimo?

* Administración e inventario de los dispositivos.

* Bitácora de los servicios.

* Hora de salida, hora de regreso, etc.

* Sistema de reserva para uso de los dispositivos

* Monitoreo centralizado del estado de los dispositivos antes, durante y al finalizar un servicio.

* Un monitoreo con datos como ubicación, batería, estado de sensores, estado del pedido/servicio, etc.

* Tanto los robots como los drones deben grabar su recorrido con sus respectivas cámaras.

* El objetivo es que estos vídeos queden guardados en algún servicio Cloud.

### Observaciones

El sistema es pensado para uso de los administradores de los dispositivos, no del cliente.

Puede suponer o añadir lo que considere necesario durante todo el proceso del proyecto.

El demo solo es a nivel de software, será necesario de alguna manera emular los datos del hardware, pero no se necesita sea parte del demo. Ejemplo: tengo los registros de vuelo de un drone ya registrados en la base de datos.

### Requisitos en Demo

| This | is   |
|------|------|
|   a  | table|