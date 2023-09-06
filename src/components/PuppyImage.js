// Renders an image with an alt.
export default function PuppyImage({url,alt}) {
    return (
        <div>
            <img src={url} alt={alt}/>
        </div>
    )
}