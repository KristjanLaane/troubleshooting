import {elapsedTime} from "./time.js"
import {getDesiredTemperature} from "./desiderata.js"
import {getActualTemperatureCelsius} from "./thermometer.js"
import {setHeatingLevel} from "./radiator.js"
import {delay} from "rxjs"

export function startRegulating() {
    elapsedTime.pipe(delay(10)).subscribe(pair => {
        const [, time] = pair
        const desired = getDesiredTemperature(time)
        const actual = getActualTemperatureCelsius()
        const difference = desired - actual
        const newLevel = difference > -.5 ? difference + 2 : 0
        setHeatingLevel(newLevel)
    })
}