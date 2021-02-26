import './Footer.css'
function Footer (props){
    return (
        <footer className="Footer">
            <h6>{props.year} ©{props.company}</h6>
        </footer>
    )
}

export default Footer