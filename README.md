# Ionic APP News

Aplicación para noticias

## Información sobre la aplicación

## Configuración antes de comenzar

Antes de comenzar es necesario introducir las variables de entorno con las que 
esta aplicación.

- Primero copiar los archivos dentro de src/enviroments/* al mismo directorio
renombrando el archivo sin la palabra **example**

```bash
cp src/environments/environment.ts.example src/environments/environment.ts
cp src/environments/environment.prod.ts.example src/environments/environment.prod.ts
```

- Rellenar los campos dentro de cada archivo de varibles de entorno tanto para
producción como para desarrollo.

### Añadir archivo de configuración para el proyecto

``` 
cp config.xml.example config.xml
```

### Crear

Añadir en resources/android/xml/network_security_config.xml 

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>
```

### Agregando entornos

## Añadiendo imágenes

Agregar las siguientes imágenes de aplicación:

/resources/icon.png → 1024x1024px
/resources.splash → 2732x2732px
/src/assets/identity/icon.png → 1024x1024px
/src/assets/icon/favicon.png → 1024x1024px

## TODO - Lista de tareas pendientes

- [] En tab2.page.ts → Almacenar categorías en dispositivo local para recuperarlas sin realizar ajax,
posteriormente se recargará el ajax para actualizar pero el usuario así tiene
datos sin tener que esperar.
- [] Implementar buscador de texto introducido por el usuario.
- [] Crear menú desplegable lateral con opciones.
- [] Implementar ver posts por un author concreto.
- [] Añadir lupa en la cabecera.
- [] Refactorizar componentes para las vistas de las páginas dejando menú y colores.
- [] Mejorar diseño de las noticias incluyendo autor y categoría a la que pertenece.
