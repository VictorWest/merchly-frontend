export default function GoogleMaps(){
    return(
        <iframe className="rounded-lg" style={{border:0}} width={"100%"} height={"100%"} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=Glen%20Allen&key=${process.env.GOOGLE_MAPS_API_KEY}`}></iframe>            
    )
}