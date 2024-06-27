npm install lite-server --save-dev

--save-dev saves it as a developer dependency

npx lite-server to run server


Add dev script to package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "lite-server"
  },

then run 
npm run dev 
to run the server