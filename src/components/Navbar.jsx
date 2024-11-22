import { useState } from 'react';
import '../styles/Navbar.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
    const [statusTampil, setStatusTampil]= useState('tampil')

    function tampilMenu(){
        if(statusTampil == ''){
            setStatusTampil('tampil')
        }else{
            setStatusTampil('')
        }
    }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <Link to="/">CV Carol</Link>
            </div>
            <button onClick={tampilMenu}>
                {
                    statusTampil == ''?(<FaBarsStaggered />):(<IoMdCloseCircle />)                }
                
                </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><Link to="/experience">Experience</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar