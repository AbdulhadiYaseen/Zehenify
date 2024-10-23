'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../public/logo.png';
import people from '../public/people.png';
import moreAssesments from '../public/moreAssesments.png';
import patientRecord from '../public/patientRecord.png';
import threeScreens from '../public/threeScreens.png';
import { VerifiedUser } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import linkedin from '../public/linkedin.png';
import facebook from '../public/facebook.png';
import insta from '../public/insta.png';
import twitter from '../public/twitter.png';
import fadedLogo from '../public/fadedLogo.png';
import assesmentsMainPic from '../public/assesmentsMainPic.png';
import assesmentsMainSubPic from '../public/assesmentsMainSubPic.png';




export default function about() {

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

    const router = useRouter();

    const navigateToAbout = () => {
        router.push('/about');
    };

    const navigateToPricingPlans = () => {
        router.push('/pricingPlans')
    }

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
                    backgroundImage: `url(${assesmentsMainPic.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    width: '100%',
                    height: '600px'
                }}
            >
            </Box>

            <Box sx={{
                position: 'absolute',
                top: '16%',
                left: '5%',
                display: 'flex',
                flexdirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:'600px'
            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height:'auto',
                    height:'500px',
                    width:'650px',
                }}>


                    <Box sx={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        
                        lineHeight: '1'
                    }}>
                        Mental Health<br /> Assessment Hub
                    </Box>


                    <Box sx={{
                        fontSize: '16px',
                        marginBottom: '4px',
                        mt:'10px'
                    }}
                    >
                        Discover personalized tools designed to help you understand your<br /> mental well-being and take the first step towards better health
                    </Box>


                </Box>

                <Box>

                    <Image src={assesmentsMainSubPic} alt="Image" width={600} height={400} objectFit="cover" />

                </Box>



            </Box>






            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: 'auto',
                width: 'auto',
                mt: '80px'
            }}>

                <Box
                    sx={{
                        color: '#006466',
                        bgcolor: '#E4FFF9',
                        width: '145px',
                        borderRadius: '30px',
                        alignItems: 'center',
                        margin: '10px auto',
                        textAlign: 'center',
                        padding: '12px 20px'
                    }}>
                    ASSESMENT'S
                </Box>

                <Box
                    sx={{
                        color: 'black',
                        textAlign: 'center',
                        margin: '5px auto',
                        fontSize: '40px',
                        fontWeight: 'bold'
                    }}>
                    Explore Over 50 Assessments
                </Box>

                <Box
                    sx={{
                        color: 'black',
                        textAlign: 'center',
                        margin: '5px auto',
                        fontSize: '15px',
                    }}>
                    Zehenify offers a wide range of assessments, with detailed information on our most popular ones highlighted below. Need more details<br />
                    about other assessments? Feel free to reach out—we're always here to assist you!
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: 'auto',
                    padding: '0 50px',
                    margin: '20px 0',
                    gap: '2px',
                }}>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        margin: '15px 15px',
                        width: '600px',
                        height: '370px',
                        bgcolor: '#006466',
                        borderRadius: '27px',
                        overflow: 'hidden',
                        padding: '25px'
                    }}>
                        <Box sx={{ margin: '15px' }}>
                            <Image src={people} alt="Image" width={170} height={170} objectFit="cover" />
                        </Box>
                        <Box sx={{ ml: '15px', mt: '15px', fontSize: '20px', fontWeight: 'bold', }}>
                            Professionally trained<br /> psychologists & scientifically based<br /> research assessments.
                        </Box>

                        <Box sx={{ ml: '15px', mt: '10px', fontSize: '13px' }}>
                            peers. offers you professional support at eye level and an<br /> environment that understands and values ​​you.
                        </Box>

                        <Button variant="text" sx={{
                            fontSize: '10px',
                            color: 'black',
                            bgcolor: 'none',
                            borderRadius: '9px',
                            border: '1px solid white',
                            cursor: 'pointer',
                            color: 'white',
                            ml: '15px', mt: '15px',
                            textTransform: 'none',
                            width: '180px',
                            height: '48px'
                        }}>
                            Discover our assesments
                        </Button>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '600px',
                        height: '370px',
                        overflow: 'hidden',
                    }}>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            bgcolor: '#F3F4E9',
                            width: '600px',
                            height: '185px',
                            borderRadius: '27px',
                        }}>

                            <Box sx={{ color: 'black', ml: '40px', fontSize: '17px' }}>
                                No matter where you<br /> are, peers. is 100%<br /> digital and always<br /> there for you.
                            </Box>

                            <Box sx={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                                padding: '15px',
                                display: 'flex',
                                alignItems: 'end'
                            }}>
                                <Image src={patientRecord} alt="Image" width={170} height={170} objectFit="cover" layout="responsive" />

                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: '5px', gap: '10px' }}>

                            <Box sx={{
                                width: '290px',
                                height: '180px',
                                bgcolor: 'none',
                                borderRadius: '27px',
                                border: '1px solid #CDCDCD',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>

                                <Typography sx={{ width: '50px', ml: '35px', mt: '20px', color: '#222222', textAlign: 'start', fontSize: '22px', color: '#006466', bgcolor: '#E4FFF9' }}>
                                    Icon
                                </Typography>

                                <Typography sx={{ ml: '35px', mt: '10px', color: '#222222', textAlign: 'start', fontSize: '22px', fontWeight: 'bold' }}>
                                    Safety First
                                </Typography>
                                <Typography sx={{ ml: '35px', mt: '12px', color: '#222222', textAlign: 'start', fontSize: '22px', fontSize: '15px' }}>
                                    Data security and<br /> confidentiality are our highest<br /> priority.
                                </Typography>

                            </Box>

                            <Box sx={{
                                width: '290px',
                                height: '180px',
                                bgcolor: '#FFA655',
                                borderRadius: '27px',

                            }}>

                                <Typography sx={{ ml: '35px', mt: '15px', color: 'white', textAlign: 'start', fontSize: '22px', fontSize: '12px' }}>
                                    Why peers?
                                </Typography>
                                <Typography sx={{ ml: '35px', mt: '10px', mb: '10px', color: 'white', textAlign: 'start', fontSize: '22px', fontWeight: 'bold' }}>
                                    Small groups<br /> empathic<br /> Short waiting<br /> times Flexible
                                </Typography>

                            </Box>

                        </Box>
                    </Box>

                </Box>


                <Box sx={{
                    display: 'flex', justifyContent: 'center', flexDirection: 'column'
                }}>

                    <Box sx={{ color: '#006466', fontSize: '35px', fontWeight: 'bold', textAlign: 'center', mt: '40px' }}>
                        Selecting the Right Assessments
                    </Box>

                    <Typography sx={{ ml: '35px', mt: '10px', mb: '10px', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                        Choosing the right assessment is essential for understanding and addressing your mental health needs. It's about finding tools that align<br /> with your specific challenges, enabling you to gain clearer insights and create a personalized path to well-being
                    </Typography>

                </Box>


                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'row',
                    margin: '10px 0px',
                    ml: '100px',
                    height: '750px',
                    // bgcolor: '#006466',
                }}>



                    <Box sx={{
                        display: 'flex', justifyContent: 'flex-start', flexDirection: 'column',
                        width: '500px',
                        height: '750px',
                        margin: '5px 0px 5px 30px',
                        paddingRight: '5px'
                    }}>

                        <Box sx={{
                            border: '1px solid #CDCDCD',
                            borderRadius: '15px',
                            margin: '5px 0px 5px 30px',
                            height: '520px',
                            width: '400px',
                        }}>

                            <Typography sx={{ color: 'black', fontSize: '20px', mt: '10px', mb: '10px', fontWeight: 'bold', ml: '15px' }}>
                                Addiction
                            </Typography>

                            <Box component="ul" sx={{ paddingLeft: 0, listStyle: 'none', m: 0, ml: '15px' }}>
                                {[
                                    "Child Depression and Anxiety | RCADS 25",
                                    "Child Depression | CES-DC",
                                    "Child PTSD Symptoms | CPSS-5",
                                    "Therapeutic Alliance for Youth & Caregivers | TASC",
                                    "Child Trauma | PEDS",
                                    "Parenting Stress | PDH",
                                    "Child ADHD | SNAP IV 26",
                                    "Pediatric Symptom Checklist | PSC-17",
                                    "Depression | PHQ-9",
                                    "Generalized Anxiety | GAD-7",
                                    "Child Outcome Rating Scale | CORS",
                                    "Child Session Rating Scale | CSRS"
                                ].map((item, index) => (
                                    <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                        <span
                                            style={{
                                                width: '18px',
                                                height: '18px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'none',
                                                borderRadius: '50%',
                                                marginRight: '10px',
                                                border: '2px solid black',
                                            }}
                                        >
                                            <CheckIcon style={{ color: 'black', fontSize: '16px' }} />
                                        </span>
                                        <Typography sx={{ color: 'black', fontSize: '15px' }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Button variant="text"
                                sx={{
                                    textTransform: 'none',
                                    color: 'black',
                                    cursor: 'pointer',
                                    bgcolor: 'none',
                                    padding: '5px 10px',
                                    border: '1px solid black',
                                    fontSize: '12px',
                                    ml: '15px',
                                    width: '120px',
                                    mt: '10px'
                                }}>
                                See less</Button>


                        </Box>




                        <Box sx={{
                            border: '1px solid #CDCDCD',
                            margin: '10px 30px',
                            height: '200px',
                            borderRadius: '15px',
                            width: '400px',
                        }}>

                            <Typography sx={{ color: 'black', fontSize: '25px', mt: '10px', mb: '10px', fontWeight: 'bold', ml: '15px' }}>
                                Functioning
                            </Typography>

                            <Box component="ul" sx={{ paddingLeft: 0, listStyle: 'none', m: 0, ml: '15px' }}>
                                {[
                                    "Work and Social Functioning | WSAS",
                                    "Quality of Life | WHOQOL-BREF",
                                    "Practical | GS-Practical",
                                    "ORS | Outcome Rating Scale",
                                ].map((item, index) => (
                                    <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                        <span
                                            style={{
                                                width: '18px',
                                                height: '18px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'none',
                                                borderRadius: '50%',
                                                marginRight: '10px',
                                                border: '2px solid black',
                                            }}
                                        >
                                            <CheckIcon style={{ color: 'black', fontSize: '16px' }} />
                                        </span>
                                        <Typography sx={{ color: 'black', fontSize: '15px' }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>



                        </Box>

                    </Box>




                    <Box>



                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: '800px',
                            height: '570px',
                            overflow: 'hidden',
                            margin: '5px 30px 5px 0px',
                        }}>


                            <Box sx={{ display: 'flex', flexDirection: 'row', mt: '5px', gap: '10px' }}>

                                <Box sx={{
                                    width: '380px',
                                    height: '240px',
                                    bgcolor: 'none',
                                    borderRadius: '27px',
                                    border: '1px solid #CDCDCD',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>



                                    <Typography sx={{ color: 'black', fontSize: '20px', mt: '10px', mb: '10px', ml: '20px', fontWeight: 'bold' }}>
                                        Clinical Symptoms
                                    </Typography>


                                    <Box component="ul" sx={{ paddingLeft: 0, listStyle: 'none', m: 0, ml: '15px' }}>
                                        {[
                                            "Work and Social Functioning | WSAS",
                                            "Quality of Life | WHOQOL-BREF",
                                            "Practical | GS-Practical",
                                            "ORS | Outcome Rating Scale",
                                        ].map((item, index) => (
                                            <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: 'none',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                        border: '2px solid black',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'black', fontSize: '16px' }} />
                                                </span>
                                                <Typography sx={{ color: 'black', fontSize: '15px' }}>
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button variant="text"
                                        sx={{
                                            textTransform: 'none',
                                            color: 'black',
                                            cursor: 'pointer',
                                            bgcolor: 'none',
                                            padding: '5px 10px',
                                            border: '1px solid black',
                                            fontSize: '12px',
                                            ml: '15px',
                                            width: '120px',
                                            mt: '10px'
                                        }}>
                                        See more</Button>


                                </Box>

                                <Box sx={{
                                    width: '380px',
                                    height: '240px',
                                    bgcolor: 'none',
                                    borderRadius: '27px',
                                    border: '1px solid #CDCDCD',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>


                                    <Typography sx={{ color: 'black', fontSize: '20px', mt: '10px', mb: '10px', ml: '20px', fontWeight: 'bold' }}>
                                        Child Assessment
                                    </Typography>


                                    <Box component="ul" sx={{ paddingLeft: 0, listStyle: 'none', m: 0, ml: '15px' }}>
                                        {[
                                            "Drug Use | DAST-10",
                                            "Frequency – Alcohol | QFV-30days",
                                            "Frequency – Drugs | NIDA M-ASSIST",
                                            "Situational Confidence – Alcohol | DTCQ-8A",
                                        ].map((item, index) => (
                                            <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: 'none',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                        border: '2px solid black',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'black', fontSize: '16px' }} />
                                                </span>
                                                <Typography sx={{ color: 'black', fontSize: '15px' }}>
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button variant="text"
                                        sx={{
                                            textTransform: 'none',
                                            color: 'black',
                                            cursor: 'pointer',
                                            bgcolor: 'none',
                                            padding: '5px 10px',
                                            border: '1px solid black',
                                            fontSize: '12px',
                                            ml: '15px',
                                            width: '120px',
                                            mt: '10px'
                                        }}>
                                        See more</Button>


                                </Box>
                            </Box>


                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                width: '760px',
                                height: '300px',
                                borderRadius: '27px',
                                mt: '15px',
                                border: '1px solid #CDCDCD',
                            }}>

                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}>

                                    <Typography sx={{ color: 'black', fontSize: '20px', mt: '10px', mb: '10px', ml: '20px', fontWeight: 'bold' }}>
                                        More Assessments
                                    </Typography>

                                    <Box component="ul" sx={{ paddingLeft: 0, listStyle: 'none', m: 0, ml: '15px' }}>
                                        {[
                                            "View other assessments available on Zehenify"
                                        ].map((item, index) => (
                                            <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: 'none',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                        border: '2px solid black',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'black', fontSize: '16px' }} />
                                                </span>
                                                <Typography sx={{ color: 'black', fontSize: '15px' }}>
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                </Box>




                                <Box sx={{
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'end',

                                }}>
                                    <Image src={moreAssesments} alt="Image" width={170} height={170} objectFit="cover" layout="responsive" />

                                </Box>

                            </Box>

                        </Box>
                    </Box>

                </Box>




                <Box sx={{
                    bgcolor: '#F3F4E9',
                    height: '808px',
                    mt: '40px',
                    ml: '50px',
                    mr: '50px'
                }}>

                    <Box sx={{
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-center', ml: '20px', mr: '20px'
                    }}>

                        <Box
                            sx={{
                                color: '#006466',
                                bgcolor: '#E4FFF9',
                                width: '145px',
                                borderRadius: '30px',
                                alignItems: 'center',
                                margin: '50px auto 10px auto',
                                textAlign: 'center',
                                padding: '9px 20px'
                            }}>
                            FREE DEMO
                        </Box>

                        <Box sx={{
                            color: 'black',
                            fontSize: '50px',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>
                            Try Zehenify for free
                        </Box>

                        <Box sx={{
                            color: 'black',
                            fontSize: '20px',
                            textAlign: 'center',
                            mt: '10px'
                        }}>
                            Experience the power of trading with Zehenify! Sign up today for free and unlock advanced tools to trade
                            smarter, faster, and more<br /> confidently. Start your journey now!
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', mt: '35px' }}>
                            <Button variant="text"
                                sx={{ color: 'white', bgcolor: '#006466', borderRadius: '3px', cursor: 'pointer', textTransform: 'none', width: '200px', height: '40px' }}>
                                Start free trial
                            </Button>
                        </Box>

                        <Box sx={{ mt: '40px' }}>
                            <Image src={threeScreens} alt="Image" width={150} height={150} objectFit="cover" layout="responsive" />
                        </Box>

                    </Box>


                </Box>


            </Box>







            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '110px' }}>

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

                    <Box sx={{ position: 'absolute', top: '432%', right: '8%' }}>
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
    )
}