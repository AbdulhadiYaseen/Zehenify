'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import scheduling from '../public/scheduling.png';
import clientPortal from '../public/clientPortal.png';
import records from '../public/records.png';
import ePrescribe from '../public/ePrescribe.png';
import messaging from '../public/messaging.png';
import outcomeMeasures from '../public/outcomeMeasures.png';
import customerSupport from '../public/customerSupport.png';
import security from '../public/security.png';
import ZehenifyFeatures from '../public/ZehenifyFeatures.png';
import logo from '../public/logo.png';
import fadedLogo from '../public/fadedLogo.png';
import insta from '../public/insta.png';
import facebook from '../public/facebook.png';
import twitter from '../public/twitter.png';
import linkedin from '../public/linkedin.png';
import clientManagement1 from '../public/clientManagement1.png';
import clientManagement2 from '../public/clientManagement2.png';
import clientManagement3 from '../public/clientManagement3.png';
import clientManagement4 from '../public/clientManagement4.png';
import clientManagement5 from '../public/clientManagement5.png';
import clientManagement6 from '../public/clientManagement6.png';
import telehealth1 from '../public/telehealth1.png';
import telehealth2 from '../public/telehealth2.png';
import telehealth3 from '../public/telehealth3.png';
import telehealth4 from '../public/telehealth4.png';
import telehealth5 from '../public/telehealth5.png';
import appointments1 from '../public/appointments1.png';
import appointments2 from '../public/appointments2.png';
import appointments3 from '../public/appointments3.png';
import appointments4 from '../public/appointments4.png';
import { ButtonBase } from '@mui/material';


export default function features() {

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  const [selectedContent, setSelectedContent] = useState('');


  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };



  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToPricingPlans = () => {
    router.push('/pricingPlans')
  }

  // const navigateToFearures = () => {
  //   router.push('/features')
  // }

  const navigateToHome = () => {
    router.push('/')
  }

  const navigateToHowItWorks = () => {
    router.push('/howItWorks')
  }

  const navigateToContact = () => {
    router.push('/contact')
  }

  const navigateToAssesments = () => {
    router.push('/assesments')
  }

  return (

    <>

      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          border: '1px',
          bgcolor: 'white',
          color: '#006466',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt="User Image" width={50} height={50} />
          <span style={{ marginLeft: '8px' }}>Zehenify</span>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          <Button variant="text" onClick={navigateToHome} sx={{ color: 'black', cursor: 'pointer' }}>Home</Button>
          <Button
            variant="text"
            sx={{ color: 'black', cursor: 'pointer' }}
            onClick={openMenu}
          >
            Feature's <ArrowDropDownIcon />
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>1</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>2</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>3</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>4</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>5</MenuItem>
          </Menu>

          <Button variant="text" onClick={navigateToHowItWorks} sx={{ color: 'black', cursor: 'pointer' }}>How it works</Button>
          <Button variant="text" onClick={navigateToAssesments} sx={{ color: 'black', cursor: 'pointer' }}>Assessments</Button>
          <Button variant="text" onClick={navigateToPricingPlans} sx={{ color: 'black', cursor: 'pointer' }}>Pricing Plans</Button>
          <Button variant="text" onClick={navigateToAbout} sx={{ color: 'black', cursor: 'pointer' }}>About</Button>
          <Button variant="text" onClick={navigateToContact} sx={{ color: 'black', cursor: 'pointer' }}>Contact</Button>

          <Button variant="text" sx={{ color: 'white', bgcolor: '#006466', borderRadius: '9px', cursor: 'pointer' }}>Start for free</Button>
          <Button variant="text" sx={{ color: 'white', bgcolor: 'black', borderRadius: '9px', cursor: 'pointer' }}>Login</Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${ZehenifyFeatures.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          width: '100%',
          height: '600px'
        }}
      >
      </Box>

      <Box sx={{
        fontSize: '64px',
        fontWeight: 'bold',
        marginBottom: '8px',
        position: 'absolute',
        top: '36%',
        left: '7%'
      }}>
        Zehenify’s Feature
      </Box>

      <Box sx={{
        fontSize: '18px',
        marginBottom: '4px',
        position: 'absolute',
        top: '48%',
        left: '7%',
        width: '550px',
        lineHeight: '1.2'
      }}
      >
        Lorem ipsum dolor sit amet consectetur. Quis aenean vitae urna aliquet. Sed praesent imperdiet mi sit.
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', ml: '50px', mr: '50px', mt: '80px' }}>


        <Box
          sx={{
            color: '#006466',
            bgcolor: '#E4FFF9',
            width: '120px',
            borderRadius: '30px',

            alignItems: 'center',

            textAlign: 'center',
            padding: '12px 20px'
          }}>
          FEATURE'S
        </Box>



        <Box
          sx={{
            color: 'black',
            fontSize: '40px',
            fontWeight: 'bold',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          Explore Zehenify Feature's
        </Box>


        <Box
          sx={{
            marginTop: '20px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#222222',
              fontSize: '18px',
              fontWeight: 'normal',
              textAlign: 'center',
              padding: '0 20px',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis enim viverra tortor diam nunc. Vitae at malesuada dolor vitae dolor<br />
            mi eu sit. Pretium malesuada sit purus donec.
          </Typography>
        </Box>


        <Box
          sx={{
            color: 'black',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            textAlign: 'center',
            mt: '20px',
            bgcolor: '#E8FFE8',
            height: '40px',
          }}>

          <Button variant="text" onClick={() => handleButtonClick('Client Management')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none', pl: '5px' }}>Client Health</Button>
          <Button variant="text" onClick={() => handleButtonClick('Telehealth')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Telehealth</Button>
          <Button variant="text" onClick={() => handleButtonClick('Appointment & SMS')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Appointment & SMS</Button>
          <Button variant="text" onClick={() => handleButtonClick('E-Prescription')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>E-Prescription</Button>
          <Button variant="text" onClick={() => handleButtonClick('Client Progress')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Client Progress</Button>
          <Button variant="text" onClick={() => handleButtonClick('Assessments')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Assessments</Button>
          <Button variant="text" onClick={() => handleButtonClick('Notes & Records')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Notes & Records</Button>
          <Button variant="text" onClick={() => handleButtonClick('Billing')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Billing</Button>


        </Box>




      </Box>



      {selectedContent === 'Client Management' && (
        <Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '80px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{ textAlign: 'left', color: 'black', fontSize: '45px', fontWeight: 'bold', gap: '10px' }}>
              Focus on healing<br />let Zehenify handle<br />the rest
            </Box>

            <Box>
              <Image src={clientManagement1} alt="User Image" width={600} height={300} />
            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '80px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{ width: '600px' }}>
              <Image src={clientManagement2} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Add & Manage Clients Easily
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px' }}>
                Effortlessly add new clients and manage their profiles with an intuitive<br /> system.
                Keep track of all client information, appointments, and session<br /> notes in one place,
                ensuring smooth client management and a more<br /> organized workflow.
              </Box>

            </Box>

          </Box>




          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '80px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', gap: '10px' }}>
                Digital Intake
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px' }}>


                <Box sx={{ color: 'black', fontSize: '15px' }}>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          display: 'block',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Use Zehenify's intake forms to capture essential client information and<br /> medical history seamlessly.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Utilize standardized mental status sheets in each session for progress<br /> tracking.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Clients complete forms easily online, enhancing their onboarding<br /> experience.
                      </Box>
                    </li>
                  </ul>
                </Box>

              </Box>

            </Box>

            <Box sx={{ width: '600px', ml: '20px' }}>
              <Image src={clientManagement3} alt="User Image" width={450} height={200} sx={{ ml: '20px' }} />
            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '90px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{ width: '600px' }}>
              <Image src={clientManagement4} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Efficient Record Management
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px' }}>
                Maintain detailed records for each client’s every session<br />
                including session notes, client history, mental status updates, document uploads, and<br />
                progress tracking. All data is organized in one secure place, ensuring easy<br />
                access and streamlined management for comprehensive client care.
              </Box>

            </Box>

          </Box>




          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Keep Track of Your Appointments<br /> Using the Session Calendar<br /> Feature
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Easily manage your appointments with a comprehensive session<br />
                calendar. View today’s sessions, whether online or onsite, along with<br />
                scheduled timings and the total number of sessions for the day. This<br />
                feature helps you stay organized and ensures that you never miss an<br />
                appointment.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={clientManagement5} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>




          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>



            <Box sx={{ width: '600px', ml: '20px' }}>
              <Image src={clientManagement6} alt="User Image" width={450} height={200} sx={{ ml: '20px' }} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', gap: '10px' }}>
                Simplified Notes and Treatment<br /> Plans
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '20px' }}>


                <Box sx={{ color: 'black', fontSize: '15px' }}>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          display: 'block',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Easily create and update session notes with a user-friendly interface.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Develop and adjust treatment plans based on client progress over<br /> time.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Access past notes and plans quickly to ensure continuity and<br /> personalized care.
                      </Box>
                    </li>
                  </ul>
                </Box>

              </Box>

            </Box>


          </Box>


        </Box>

      )}



      {selectedContent === 'Telehealth' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Therapy Beyound<br /> The Office
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={telehealth1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={telehealth2} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', width: '600px', height: '450px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', }}>
                Seamless Virtual Consultations
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Powered by Google Meet, our Telehealth feature offers high-quality remote<br />
                consultations. Enjoy the flexibility of meeting with practitioners from the<br />
                comfort of your own home, ensuring convenience and continuity of care.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                Automated Appointment<br /> Management
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Say goodbye to the hassle of scheduling meetings. Our Telehealth<br />
                system automatically manages appointment creation and<br />
                reminders for both clients and practitioners, making it easy to<br />
                stay organized.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                Seamless Virtual Consultations
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Powered by Google Meet, our Telehealth feature offers high-quality remote<br />
                consultations. Enjoy the flexibility of meeting with practitioners from the<br />
                comfort of your own home, ensuring convenience and continuity of care.
              </Box>

            </Box>


          </Box>


          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              mt: '70px',
              gap: '160px',
              width: '100%',
              mt: '130px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={telehealth3} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Secure and Confidential
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={telehealth4} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                No Time Limit
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={telehealth5} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Smooth Communication
              </Typography>
            </Box>
          </Box>








        </Box>

      )}



      {selectedContent === 'Appointment & SMS' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Your Time,<br />
                Your Appointments,<br />
                Your Way
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={appointments1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Your Time,<br />
                Your Appointments,<br />
                Your Way
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={appointments1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

          </Box>



          

        </Box>

      )}





































      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

        <Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
            <Image src={logo} alt="Image" width={65} height={53} />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
              <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                Zehenify
              </Typography>
            </Box>
          </Box>

          <Box sx={{ ml: '80px' }}>
            <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
              Design amazing digital experiences that create<br /> more happy in the world.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
              Home
            </Typography>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
              Feature's
            </Typography>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
              How it Works
            </Typography>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
              Pricing Plan
            </Typography>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
              About
            </Typography>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
              Contact
            </Typography>

            <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
              Assessments
            </Typography>

          </Box>

        </Box>



        <Box>
          <Image src={fadedLogo} alt="Image" width={580} height={393} />

          <Box sx={{ position: 'absolute', top: '443%', right: '8%' }}>
            <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
              Enroll yourself now
            </Typography>

            <Button variant="text" sx={{
              fontSize: '16px',
              color: 'black',
              bgcolor: 'white',
              borderRadius: '9px',
              cursor: 'pointer',
              bgcolor: '#006466',
              color: 'white',
              mt: '16px',
              textTransform: 'none',
              width: '180px',
              height: '48px'
            }}
            >Login</Button>
            <br />
            <Button variant="text" sx={{
              fontSize: '16px',
              color: 'black',
              bgcolor: 'white',
              borderRadius: '9px',
              cursor: 'pointer',
              bgcolor: 'black',
              color: 'white',
              mt: '16px',
              textTransform: 'none',
              width: '180px',
              height: '48px'
            }}
            >Start for free</Button>

            <br />

            <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
              Follow us on
            </Typography>

            <br />


            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              <Image src={twitter} alt="Image" width={24} height={24} />
              <Image src={insta} alt="Image" width={24} height={24} />
              <Image src={facebook} alt="Image" width={24} height={24} />
              <Image src={linkedin} alt="Image" width={24} height={24} />
            </Box>


          </Box>

        </Box>


      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
        <hr
          style={{
            border: "none",
            height: "1px",
            width: "90%",
            backgroundColor: "#222222",
          }}
        />

        <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
          © 2024 Zehenify. All rights reserved.
        </Typography>
      </Box>


    </>
  );
}












{/* <Box sx={{ flexGrow: 1, paddingTop: '20px' }}>
          <Grid container spacing={4} columnSpacing={-3} justifyContent="center">

            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={scheduling} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Client Management System
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Effortlessly manage client information and<br /> interactions in one centralized system.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466', borderColor: '#006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={clientPortal} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Telehealth Services
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Provide virtual consultations to enhance<br /> accessibility and convenience for your clients.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>




            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466', borderColor: '#006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={records} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Appointment Scheduling &<br /> Automated SMS Reminders
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Streamline the booking process with an intuitive<br /> scheduling tool that sends timely SMS reminders<br />, helping to keep clients informed and reduce<br /> missed appointments.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466', borderColor: '#006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={ePrescribe} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      E-Prescription Services
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Simplify the prescription process with secure<br /> electronic prescribing for accuracy and<br /> convenience.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466', borderColor: '#006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={messaging} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Client Access Portal                  </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Empower clients with a dedicated portal for<br /> managing appointments and accessing<br /> resources.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466', borderColor: '#006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={outcomeMeasures} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Secure Messaging<br />(Clinician-Client)
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Facilitate confidential communication between<br /> clinicians and clients through secure messaging.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={customerSupport} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Client Progress Analytics
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Monitor and analyze client progress with insightful<br /> analytics to enhance care quality.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={security} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Customizable Assessments
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Create and assign tailored assessments to meet<br /> each client's unique needs.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={security} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Billing and Payment Solutions
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Streamline financial transactions with integrated<br /> billing and payment processing options
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>


            <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
              <ButtonBase
                sx={{ width: '100%' }}
              // onClick={() => {click action }}
              >
                <Card sx={{ minWidth: 275, height: 250, borderRadius: '8px', border: '1px solid #006466' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src={security} alt="Image" width={125} height={125} />
                    </Box>
                    <Typography sx={{ color: '#006466', mb: 1.5, mt: 1.8, fontWeight: 'bold', textAlign: 'center' }}>
                      Digital Notes and Records
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center' }}>
                      Maintain organized electronic notes and records<br /> for easy access and review.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>



          </Grid>



        </Box>

      </Box> */}
