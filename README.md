## Dev

Para iniciar el proyecto deben seguirse los siguientes pasos

1. Instalar dependencias para client y server usando `yarn`

```
yarn install
```

3. Desde la raiz del directiorio del proyecto, ejecutar `docker compose up -d` para la creacion de la base de datos
4. Crear los archivos `.env` para client y server siguiendo los `.env.example`
5. Para iniciar el proyecto

```
yarn dev
```

6. En caso de requerir iniciar unicamente el server, se ejecuta el siguiente comando

```
yarn dev:server
```

7. En caso de requerir iniciar unicamente el client, se ejecuta el siguiente comando

```
yarn dev:client
```

8. Por defecto client estara en el puerto `5173` y la API en `4000`
