export interface CounterProps {
    date: number | string | Date // If you need the form to be checked initially
    renderer: Function // OnChange value of the Switch will be toggled
    updateFrequency?: Function
}

