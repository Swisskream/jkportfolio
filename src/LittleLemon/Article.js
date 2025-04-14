import team from './Mario and Adrian A.jpg'
import chefB from './restaurant chef B.jpg'

function Article(props){
    return (
        <html className="Article">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <img src={chefB} className='image2'></img>
                <img src={team} className='image1'></img>
            </div>
        </html>)

}

export default Article;