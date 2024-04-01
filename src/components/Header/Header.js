import "./Header.css"

const Header = ({src}) => {
    return (
        <div className="content-wrapper-header">
            <div className="banner-layer">
                <div className="banner-text">
                    <h1>carta dels directors</h1>
                </div>
                <img className="banner-header" src={src} alt="banner-pagina" />
            </div>
        </div>
        
    )
}
export default Header