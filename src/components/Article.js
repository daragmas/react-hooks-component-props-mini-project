// import ReadEstimate from './ReadEstimate'

const Article = ({title, date='January 1, 1970', preview, /*readEst*/})=>{
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small> 
            {/* <ReadEstimate mins={readEst}/> */}
            <p>{preview}</p>
        </article>
    )
}

export default Article