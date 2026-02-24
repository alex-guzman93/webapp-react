import { useParams } from 'react-router-dom'
function Flick({ flicks }) {

    const { id } = useParams()
    const flick = flicks.find(film => film.id === Number(id))
    return (
        <>
            <div>
                <h1>{flick.title}</h1>
                <p>{flick.abstract}</p>
                
            </div>
        </>
    )
}

export default Flick
