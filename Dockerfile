#Version de node
FROM node:14
# dentro del contenedor creará la carpeta donde va a ir el contenedor 
WORKDIR /usr/src/app
# copia el packaje.son para instalar las dependencias
COPY package*.json ./

RUN npm install
# Instala la aplicación

#copia el contenido del proyecto en la carpeta creada
COPY . .

# Mismo puerto que tenemos en .env
EXPOSE 3000
CMD [ "node", "index.js" ]
