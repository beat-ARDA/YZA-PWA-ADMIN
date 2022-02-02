
export const datesValidation = (from: string, to: string): boolean => {
    if (from && to && to > from) return true
    return false
}

export const dateInRange = (from: string, to: string, date: string): boolean => {
    if (from && to && date && (from <= date && date <= to)) return true
    return false
}