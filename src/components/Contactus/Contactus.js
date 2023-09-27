// import { useState } from 'react';
// import React from 'react';
// import './contactus.css';

// const Contactus = () => {
//     const [isExpanded, setIsExpanded] = useState(false);

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };
//     return (
//         <div className="contactus">
//             <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
//                 <div className="card-header">
//                     <img
//                        src='https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/03/Body-Image-1440x900-2-1024x640.jpg'
//                         alt='img1'
//                         className="card-image"
//                     />
//                 </div>
//                     <div className="content">
//                         <p>Designation From Faisalabad.</p>
//                     </div>
//             </div>
//             <div className="card">
//                 <div className="card-header">
//                     <img
//                         src="https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y="
//                         alt='img2'
//                         className="card-image"
//                     />
//                 </div>
//                     <div className="content">
//                         Designation From Lahore.
//                     </div>
//             </div>
//             <div className="card">
//                 <div className="card-header">
//                     <img
//                         src='https://media.istockphoto.com/id/1372621727/photo/faisal-mosque.jpg?s=612x612&w=0&k=20&c=IIRrKM_Drv_kmdnLtbrR3n0aq9Bj3MDMJxehe2bPTbE='
//                         alt='img3'
//                         className="card-image"
//                     />
//                     </div>
//                     <div className="content">
//                         Designation From Islamabad.
//                     </div>
                
//             </div>
//         </div>
//     );
// };

// export default Contactus;


// import React from 'react';
// import styled from 'styled-components';
// import Popupcard from '../Card/popupcard';
// const card1={
//     img:"https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/03/Body-Image-1440x900-2-1024x640.jpg",
//     heading:"Graphic Designing",
//     para:"Graphic designers are professionals who use different tools, such as Adobe Photoshop and Illustrator in their work. They often collaborate with other stakeholders to produce final products for clients or employers. By collaborating on designs that can be communicated.",
//   }
  
//   const card2={
//     // img:"/assets/images/layingcard2.png",
//     heading:"Website Development",
//     para:"Web development is the coding or programming that enables website functionality, per the owner's requirements. It mainly deals with the non-design aspect of building websites, which includes coding & writing markup.",
//   }
  
//   const card3={
//     // img:"/assets/images/layingcard3.png",
//     heading:"App Development",
//     para:"App development is the process in which developers create an application to be used on smartphones, tablets and other mobile devices.",
//   }

// const Contactus = () => {
//   return (
//     <Main>
//         <Container>
//             <Popupcard card={card1}/>
//             <Popupcard card={card2}/>
//             <Popupcard card={card3}/>
//         </Container>    
//     </Main>
//   )
// }

// export default Contactus
// const Main = styled.div`
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: offwhite;
// `
// const Container = styled.div`
//     width: 70%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-wrap: wrap;
//     min-height: 40em;
//     padding-top: 4em;
//   @media (min-width:286px and (max-width:786px{
//     min-height: 100em;
//   }
// `


import React from 'react';
import Popupcard from '../Card/popupcard';
import './contactus.css';
const card1={
    img:"https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/03/Body-Image-1440x900-2-1024x640.jpg",
    heading:"Jawad",
    para:"0300-9606831",
  }
  
  const card2={
    img:"https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=",
    heading:"Bakar",
    para:"0312-4024282",
  }
  
  const card3={
    img:"https://media.istockphoto.com/id/1372621727/photo/faisal-mosque.jpg?s=612x612&w=0&k=20&c=IIRrKM_Drv_kmdnLtbrR3n0aq9Bj3MDMJxehe2bPTbE=",
    heading:"Zain",
    para:"0316-9682467",
  }

const Contactus = () => {
  return (
    <div className='main'>
        <div className='container2'>
            <Popupcard card={card1}/>
            <Popupcard card={card2}/>
            <Popupcard card={card3}/>
        </div>
    </div>
  );
};

export default Contactus;
