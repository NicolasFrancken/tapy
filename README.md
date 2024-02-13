ESTRUCTURA, MÉTODOS, TIPEO Y REGLAS DE COMMITS/BRANCHS DEL REPOSITORIO
Estructura de carpetas
Backend
Usaremos app/api para las rutas del backend, en cada una de estos archivos "route.ts" podrá haber varios métodos (sin repetir) (GET, POST, PUT, etc.)
Usaremos app/server para archivos relacionados con el backend ("api")
Usaremos app/server/libs para las funciones del backend (Ej: Función que busca a los seguidores)
Los archivos se llamarán del tipo "getFollowers.ts", "createUser.ts", etc.
Usaremos app/server/models para los modelos de error (y demás futuros modelos)
Frontend
Usaremos app para las rutas del frontend
Usaremos app/components para los componentes del frontend
Usaremos app/libs para las funciones del frontend (Ej: Función que manda un request al backend por los followers)
Los archivos se llamarán del tipo "getFollowers.ts", "createUser.ts", etc.
Usameros app/utils para funciones como "axiosInstance.ts"
Métodos
TODAS LAS PAGES, LOS COMPONENTES Y LAS ROUTES LOS HACEMOS CON FUNCIONES NORMALES NO CON ARROW FUNCTIONS

Backend
Los errores del backend los manejaremos todos de esta manera -> return new Response("Mansaje de explicación", { status: Código acorde a lo sucedido });
Las respuestas las manejaremos todas de esta manera -> return new Response(JSON.stringify("Mensaje"));
Todas las funciones deben tener "Try - Catch"
Frontend
Todas las funciones van en la carpeta de client/libs
Todas las funciones deben tener "Try - Catch"
Reglas de Commits/Branchs
En el repositorio estará la rama "main" para el software y "dev" para las integraciones

Cada desarrollador deberá crear una rama acorde a lo que esté haciendo con el siguiente formato:

[Feature, Refactor, Bugfix, Test, Chore]/Explicación de lo que hará
Ejemplo: Feature/User functions
En las ramas, los commits deben verse de la siguiente manera:

FE, BE ó FE&BE/Explicación de lo que se hizo (FE: Frontend, BE: Backend)
Ejemplo: BE/Create user function
