// haetaan express-moduuli ja luodaan sovelluksen instanssi
const express = require('express')

const app = express()
// määritellään portti, jota sovellus kuuntelee
const PORT = process.env.PORT || 3000
// määritellään staattisten tiedostojen hakemisto
app.use(express.static('public'))
// luetaan lomakkeen tiedot ja tallennetaan ne req-objektiin
app.use(express.urlencoded({
    extended: true
}))

// määritellään check ja validationResult -muuttujat
const { check, validationResult } = require('express-validator');

// määritellään juurireitti ja vastauksena lähetetään Hello World!
app.get('/', (req, res) => {
    console.log(req.headers)
    res.set('Content-Type', 'text/html')
    // set res.status(200).send('Hello World!')
    res.status(200).send(`<h1>Hello World</h1>`)
});
// määritellään reitti /form 
app.post('/form', [
    // määritellään tarkistukset
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
], (req, res) => {
    // tarkistetaan oliko req objektin muuttujien oikeellisuus ja palautetaan virheilmoitus, jos tarkistus ei mene läpi
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    // tulostetaan konsoliin lomakkeen tiedot
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`)
    res.send(`Name: ${name}, Email: ${email}, Age: ${age}`);
})

// avaataan portti ja tulostetaan konsoliin viesti, kun sovellus on käynnistynyt
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))