import {Link} from 'react-router-dom'

function TheFlicksHome({ flicks }) {


    return (
        <>
            <div>
                {flicks.map(flick => (
                    <div>
                        <h1>{flick.title}</h1>
                        <p>{flick.abstract}</p>

                        <Link to ={`flicks/${flick.id}`}>dettagli</Link>
                    </div>
                ))}

            </div>
        </>
    )
}

export default TheFlicksHome
