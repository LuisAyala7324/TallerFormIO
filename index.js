const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')

//settings
app.set('port', 4000)

//middlewares
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), ()=>{
    console.log(`app running in the port ${app.get('port')}`)
})

//data
const endpoint = 'https://ziwqawolkxjpeas.form.io/registro/submission/6359a7893758f6b9fcb2ba4b';
console.log(endpoint);

fetch (endpoint)
.then ((respuesta) => {
    return respuesta.json()
}).then ((resp)=> {
    console.log(resp);
}) 

