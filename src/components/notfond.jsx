import { Link } from "react-router-dom";
function Notfound(){
    return(
        <>
        <div>
        <h1>404 Not Found Ero People!</h1><br/>
        <Link to="/"><button>Home</button></Link><br/>
        <iframe src="https://giphy.com/embed/9J7tdYltWyXIY" width="480" height="404" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY">via GIPHY</a></p>
        </div>
        
        </>
    );
}

export default Notfound