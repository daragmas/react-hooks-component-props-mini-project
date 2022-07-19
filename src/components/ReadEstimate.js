const ReadEstimate = ({mins})=>{
    const emojis = mins > 30 ? Array(Math.ceil(mins/10)).fill('🍱').join('') : Array(Math.ceil(mins/3)).fill('☕️').join('')
    
    return(
        <small>{emojis} {mins} Minute Read</small>
    )
}

export default ReadEstimate