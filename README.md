# **API Rest con Express**

## **Requisitos previos**

- SO con Docker y Git instalado

La propia instalación ya crea la BD con la tabla y datos de prueba

## **Instalación** 

``` cmd
$ git pull https://github.com/hugoGarciaCorrales/API-REST-Express.git
```

En caso de necesitarlo modificar el archivo ``.env`` para configurar el servidor

## **Ejecución**

```
$ cd ./API-REST-Express
$ docker compose up
```

## **Uso**

GET

``${HOST_IP}:8080/api/usuarios``

``${HOST_IP}:8080/api/usuarios/${id}``

POST

``${HOST_IP}:8080/api/usuarios``

PUT

``${HOST_IP}:8080/api/usuarios/${id}``

DELETE

``${HOST_IP}:8080/api/usuarios/${id}``

## **Créditos**
Hugo García Corrales

2ºDAW

27/02/2026

IES Julián Marias