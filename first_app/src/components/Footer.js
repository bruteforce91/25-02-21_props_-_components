import '../assets/css/footer.css'
function Footer (props){
    return (
        <footer className="footer">
            <h6>{props.year} ©{props.company}</h6>
        </footer>
    )
}

export default Footer