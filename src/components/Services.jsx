import React from 'react'
import lending from '../images/Lending.png'
import {useEffect,useState,useRef} from 'react'
import './Services.css'
const Services = () => {
  //console.log("Getting Executed2")

  let idx = 0
  let img = useRef(null);
  //let var2 = useRef(null);
  function run() {
    idx++
    changeImage()
}
function changeImage() {
  let no = img.current.childElementCount;
 // console.log(img.current.childElementCount); 
  if(idx > no - 1) {
      idx = 0
  } else if(idx < 0) {
      idx = no - 1
  }

   img.current.style.transform = `translateX(${-idx * 750}px)`;
  //console.log(img);
}

  useEffect(() => {
    //console.log("Getting Executed")
    let no = setInterval(run,2000)
     
    return () =>{clearInterval(no);//console.log(no,"Stopped")
    };
  });
  return (
    <section id = "Services" style = {{backgroundColor: '#6b21a8'}}>
    <h1 style = {{textAlign:'center'}}>Services</h1>
    <div className="carousel" style = {{margin: "auto auto"}}>
        <div className="image-container" ref  = {img} id="imgs" >
          <div className="inner">
            <img src='https://content.pymnts.com/wp-content/uploads/2019/09/InstaReM-Canada-cross-border-money-transfer-remittance.jpg'
            alt="first-image" 
            /><br/>
            <div className = "inner2">
              <p style={{color:'white',paddingTop:'8px'}}>Money Transfer</p>
            </div>
          </div>
          <div className="inner">
            <img src="https://images.yourstory.com/cs/2/f49f80307d7911eaa66f3b309d9a28f5/Webp-1641743869870.jpg?fm=png&auto=format&w=800"
            alt="second-image" 
            />
            <br/>
            <div className = "inner2" style={{color:'red'}}>
                <p style={{color:'white',paddingTop:'8px'}}>Trading/Investing</p></div>
          </div>
          <div className="inner">
            <img
             src={lending}
             alt="third-image" 
             />
             <br/>
             <div className = "inner2" style={{color:'red'}}>
                 <p style={{color:'white',paddingTop:'8px'}}>Lending</p>
             </div>
          </div>
        <div className="inner">
         <img
           src="https://img.freepik.com/free-vector/isometric-crowdfunding-illustration_1284-19619.jpg?w=2000"
           alt="fourth-image" 
           />
           <br/>
           <div className = "inner2" style={{color:'red'}}>
            <p style={{color:'white',paddingTop:'8px'}}>Crowd Funding</p>
           </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Services