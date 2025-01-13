import React from 'react'
import './home.css'
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { Link } from 'react-router-dom';
import sathiya from './sath.jpg'


const Home = () => {
  return (
    <div className="container p-lg-5 mb-5" id="home">
          <main className="row d-flex mx-auto">
              <div className="col-md-6 col-lg-6 text-center mt-md-5 p-md-5 align-items-md-center">
                  <small  className='mb-4'>Hello, This is</small>
                  <h1 className='mb-3 fw-bold'>Sathiyaseelan</h1>
                  <strong>Full stack web developer ( MERN )</strong>
                  <div className='mt-2 fs-4'>&larr; 
                      <FaHtml5 /> <FaCss3Alt/> <IoLogoJavascript/> <FaBootstrap/> <FaReact/> <FaNodeJs/> <SiMysql/> <SiMongodb/> &rarr;</div>
                  <p className='mt-4'>I am ready to contribute my innovative ideas to the dynamic field and improve my knowledge through continuous learning and team work...</p>
                <button className="btn btn-outline-success m-3">Hire me</button>
                <button className="btn btn-success"><a href='./Sathiyaseelan.pdf' className="text-decoration-none text-light" download="Sathiyaseelan.pdf">Download CV</a></button>
                
                <div className='d-flex justify-content-center fs-3 mt-2'>
                      <Link to={'https://www.linkedin.com/in/sathiya4046/'} className='ms-2 p-1 icons'><FaLinkedin/></Link>
                      <Link to={'https://github.com/sathiya4046'} className='ms-2 p-1 icons'><FaGithub/></Link>
                      <Link to={'https://www.instagram.com/__sathiya__4046?igsh=dGlicjRubzN2Z3M5'} className='ms-2 p-1 icons'><FaInstagram/></Link>
                      <Link to={'https://www.facebook.com/sathiya.s.mech?mibextid=ZbWKwL'} className='ms-2 p-1 icons'><FaFacebook/></Link>
                  </div>
              </div>
              <div className="col-md-4 text-center my-sm-3 m-md-auto d-md-flex align-items-md-center">
                      <img className="rounded-circle ms-md-auto" src={sathiya} alt="sathiyaseelan" height="300px" width="290px"/>
              </div>
            </main>
        </div>
  )
}

export default Home