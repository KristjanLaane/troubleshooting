import http from "http"
import {circadianRhythm, startTime} from "./time.js"
import {getActualTemperatureFahrenheit, startSensing} from "./thermometer.js"
import {startRegulating} from "./regulator.js"

http.createServer(function (req, res) {
    res.write("Temperature control")
    res.end()
}).listen(8080)

// http://localhost:8080
console.log("Server started")

circadianRhythm.subscribe(time => {
    const actual = getActualTemperatureFahrenheit()
    console.log(`At ${time.toFixed().padStart(4, "0")} ${actual.toFixed(1)}F`)
})

startRegulating()
startSensing()
startTime()