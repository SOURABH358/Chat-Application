export default function Error({message,color}){
    return <div className={`error__msg ${color}`}>
        {message}
    </div>
}