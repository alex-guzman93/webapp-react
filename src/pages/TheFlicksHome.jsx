

function TheFlicksHome({ flicks }) {


    return (
        <>
            <div>
                {flicks.map(flick => (
                    <div>
                        <h1>{flick.title}</h1>
                        <p>{flick.abstract}</p>
                        <a href="flicks/2">dettagli</a>
                    </div>
                ))}

            </div>
        </>
    )
}

export default TheFlicksHome
