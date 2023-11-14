export function getDataFormat (dt) {
    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    }
    
    options.timeZone = 'UTC'
    
    const date = new Date(dt * 1000)
    const dateString = date.toLocaleString('en-US',  options)
    
    return dateString
        
}
