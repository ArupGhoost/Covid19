import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const[newfeed, setnewfeed] = useState('');

  const feedBack = (e) =>{
       setnewfeed(e.target.value);
       
  }
  const tFeedback = (e) =>{
          e.preventDefault();
  }

 

    return (
        <>
          <div>
             <div className='main_background'>
                  
             </div>
             <div className='header'>
               <h1>What is Coronavirus??</h1>
             </div>
              
              <br />
              <br />
              

             <div className='covid_def'>
                   <div className='covid_def_main'>
                         <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                         <p>On 31 December 2019, WHO was informed of cases of pneumonia of unknown cause in Wuhan City, China. A novel coronavirus was identified as the cause by Chinese authorities on 7 January 2020 
                         and was temporarily named “2019-nCoV”.</p>
                         <p>Coronaviruses constitute the subfamily Orthocoronavirinae, in the family Coronaviridae, 
                         order Nidovirales, and realm Riboviria.</p>
                         <p>They are enveloped viruses with a positive-sense single-stranded RNA genome and a nucleocapsid of helical symmetry.</p>
                         <p>The genome size of coronaviruses ranges from approximately 26 to 32 kilobases, one of the largest among RNA viruses</p>
                         <p> They have characteristic club-shaped spikes that project from their surface, which in electron micrographs create an image reminiscent of the solar corona,
                          from which their name derives</p>
                   </div>
                   <div className='covid_def_main2'>
                         <img className='image1' src='https://image.flaticon.com/icons/png/512/2785/2785819.png'
                          alt=''/>
                   </div>
                 </div>
                 <br />
                  
                   <div className='symptoms'>
                   <h2>Symptoms of Covid-19</h2>
                   <div className='main_symptoms'>
                        <div className='symptoms1'>
                               <h4>Common Symptoms</h4>
                               <div className='com_sym'>
                                     <ul>
                                       <li>fever</li>
                                       <li>dry cough</li>
                                       <li>tirednes, vomiting and feeling nausea</li>
                                      <li>running nose</li>
                                     </ul>
                               </div>
                        </div>
                        <br />
                        <div className='symptoms2'>
                            <h4>Less Common Symptoms</h4>
                            <div className='com_sym'>
                                <ul>
                                  <li>aches and pains</li>
                                  <li>diarrhoea</li>
                                  <li>loss of taste or smell</li>
                                  <li>conjunctivitis</li>
                                  <li>a rash on skin, or discolouration of fingers or toes</li>
                                  <li>sore throat</li>
                                  <li>headache</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <div className='symptoms3'>
                              <h4>Severe Symptoms</h4>
                              <div className='sev_sym'>
                           <ul>
                             <li>difficulty breathing or shortness of breath</li>
                               <li>chest pain or pressure</li> 
                              <li>loss of speech or movement</li>
                           </ul>
                           </div>
                        </div>
                        </div>
                   </div>

                   

                   <div className='treatment'>
                     <h2>Required Remedies/Treatments</h2>
                   <div className='treatment-main'>
                         <div className='treatment-image'>
                          <section className='section1'>
                              <img  src='https://image.flaticon.com/icons/png/512/2932/2932544.png' alt='' className='image2'/>
                              <img src='https://image.flaticon.com/icons/png/512/3017/3017381.png' alt='' className='image2'/>
                              <img src='https://image.flaticon.com/icons/png/512/3017/3017492.png' alt='' className='image2'/>
                              <img src='https://image.flaticon.com/icons/png/512/4603/4603327.png' alt='' className='image2' />
                              </section>
                         </div>
                         <div className='treatment-given'>
                         <section className='section2'>
                              <p>Wear masks regularly</p>
                              <p>Maintain Social-distancing</p>
                              <p>Wash your hands regularly</p>
                              <p>Importantly stay at home as much as possible</p>
                              </section>
                         </div>
                         </div>
                         <br />
                         <div className='treatment-serious'>
                               <div className='treatment-serious-given'>
                               <section className='section3'>
                                     <p>Patients must be in communication with a treating physician and promptly report in case of any worsening.</p>
                                     <p>Patients may perform warm water gargles or take steam inhalation twice a day.
                                       </p>
                                       <p>If serious, admit patient to the Hospital as soon as possible</p>
                                       
                               </section>

                               </div>
                               <div className='treatment-serious-image'>
                                 <section className='section4'>
                                      <img src='https://image.flaticon.com/icons/png/512/2947/2947808.png' alt='' className='image3'/>
                                      <img src='https://image.flaticon.com/icons/png/512/2181/2181872.png' alt='' className='image3'/>
                                      <img src=' https://image.flaticon.com/icons/png/512/2264/2264237.png' alt='' className='image3'/>
                                      <img src=' https://image.flaticon.com/icons/png/512/3063/3063205.png' alt='' className='image3' />
                                 </section>
                               </div>
                         </div>
                   </div>
                   
               <br />
               <br />
                   <div className='footer'>
                      
                          <div className='about-info'>
                             <p>Healthify is perfect website for you if want some Knowledge or info about 
                             Health nad Health Products.</p>
                             <p>We also write blogs for different diseases and their way of cure as possible.</p>
                             <p>For Fitness and Yoga we provide proper diet plans.</p>
                             <p>We are coming soon with our healthy products. </p>
                             
                             <h3 style={{textDecoration:'underline'}}>Feedback</h3>
                             <form onChange={tFeedback}>
                             <textarea rows='2' cols='30' placeholder='write here..' onChange={feedBack} value={newfeed}></textarea>
                             
                             <button type='submit' onClick={() =>{
                               return(
                               alert('thanks for your feedback'))}}>Submit</button>
                               </form>
                          </div>
                          <br /><br/><br />
                          <div className='email'>
                             <h3>If you haven't join our Healthify Family, Click below</h3>
                             <Link to='/join' className='join'>Join</Link>
                          </div>
                        
                        </div>
                   </div>
                   <div className='all-rights'>
                          <div className='rights'>
                               <p>All rights reserved Ghost 2021</p>
                        </div>
                  
             </div>
        </>
    )
}

export default Home
