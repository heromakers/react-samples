import React from 'react';
import { Link } from 'react-router-dom';

const Logo:React.FC<Props> = ({limage, dimage, simage}) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img className="light-version-logo" src={process.env.PUBLIC_URL + limage} alt="logo" />
            <img className="dark-version-logo" src={process.env.PUBLIC_URL + dimage} alt="logo" />
            <img className="sticky-logo" src={process.env.PUBLIC_URL + simage} alt="logo" />
        </Link>
    )
}

interface Props {
    limage: string;
    dimage: string;
    simage: string;
}

export default Logo;