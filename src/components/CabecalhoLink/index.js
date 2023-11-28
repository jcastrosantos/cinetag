import { Link } from 'react-router-dom';
import stytes from './CabecalhoLink.module.css';


function CabecalhoLink({ url, children }) {
    return (
        <Link to={url} className={stytes.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;