import {elapsedTime} from "./time.js"
import {getGains} from "./radiator.js"

const outsideTemperature = 5
let insideTemperature = 18.5
let insideTemperatureFahrenheit

function convertToF(celsius) {
    insideTemperatureFahrenheit = (celsius * 1.8) - 32
}

convertToF(insideTemperature)

export function startSensing() {
    elapsedTime.subscribe(pair => {
        const [elapsed,] = pair
        let quotient = 0.01 * insideTemperature / outsideTemperature
        if (insideTemperature > outsideTemperature) quotient = -1 * quotient
        insideTemperature = insideTemperature + quotient * elapsed
        const heating = getGains(elapsed)
        insideTemperature += heating
        convertToF(insideTemperature)
    })
}

export function getActualTemperatureCelsius() {
    return insideTemperature
}

export function getActualTemperatureFahrenheit() {
    return insideTemperatureFahrenheit
}