'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../public/logo.png';
import fadedLogo from '../public/fadedLogo.png';
import PricingPackages from '../public/PricingPackages.png';
import insta from '../public/insta.png';
import facebook from '../public/facebook.png';
import twitter from '../public/twitter.png';
import linkedin from '../public/linkedin.png';
import CheckIcon from '@mui/icons-material/Check';

export default function pricingPlans() {

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
                    backgroundImage: `url(${PricingPackages.src})`,
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



            <Box sx={{
                marginTop: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>


                <Box
                    sx={{
                        color: '#006466',
                        bgcolor: '#E4FFF9',
                        width: '180px',
                        borderRadius: '30px',
                        margin: '10px auto',
                        textAlign: 'center',
                        padding: '6px 4px'
                    }}>
                    PRICING PLANS
                </Box>


                <Box sx={{ color: 'black', fontSize: '40px', textAlign: 'center', margin: '5px auto', fontWeight: 'bold' }}>
                    Pricing & Packages
                </Box>

                <Box sx={{
                    textAlign: 'center',
                    color: '#222222',
                    fontSize: '14px'
                }}>
                    Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis enim viverra tortor diam nunc. Vitae at malesuada dolor<br /> vitae dolor mi eu sit. Pretium malesuada sit purus donec.
                </Box>

                <Box sx={{ flexGrow: 1, paddingTop: '35px' }}>
                    <Grid container spacing={1} columnSpacing={-3} justifyContent="center">
                        <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
                            <Card sx={{ width: 355, height: 720, borderRadius: '8px', position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 'calc(50% - 217px)',
                                        width: '435px',
                                        height: '10px',
                                        backgroundColor: '#006466',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                    }}
                                />
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Box
                                            sx={{
                                                color: '#006466', bgcolor: '#E4FFF9', width: '80px', borderRadius: '3px', margin: '10px auto 10px 0', textAlign: 'center', padding: '6px 4px',

                                            }}>
                                            Starter
                                        </Box>

                                    </Box>
                                    <Typography sx={{ color: '#222222', textAlign: 'start', fontSize: '22px' }}>
                                        Begin with the basics for your private practice.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '15px' }}>
                                        <Typography component="span" sx={{ fontSize: '30px', textAlign: 'start', color: '#006466' }}>
                                            PKR
                                        </Typography>
                                        <Typography component="span" sx={{ fontSize: '50px', textAlign: 'start', color: '#006466', ml: '5px', fontWeight: 'bold' }}>
                                            1,050
                                        </Typography>
                                        <Typography component="span" sx={{ fontSize: '20px', textAlign: 'start', color: '#222222', ml: '5px' }}>
                                            /per user
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mt: '15px', width: '100%' }}>
                                        <Button variant="text" sx={{ width: '100%', color: '#006466', borderRadius: '9px', cursor: 'pointer', fontSize: '15px', padding: '10px 15px', border: '1px solid #006466' }}>
                                            Get Started
                                        </Button>
                                    </Box>

                                    <hr style={{ border: '1px', height: '2px', backgroundColor: '#22222226', margin: '20px 0' }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '10px' }}>

                                        <Typography sx={{ color: '#222222', textAlign: 'start', fontSize: '22px' }}>
                                            Starter features
                                        </Typography>

                                    </Box>

                                    <Box>
                                        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Unlimited clients
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Paperless intakes
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Client Portal
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Progress notes
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Diagnosis and treatment plans
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Integrated measurement-based care
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Automated invoicing and billing
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Credit card processing
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Live customer support
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Telehealth
                                            </li>

                                        </ul>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Grid>



                        <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
                            <Card sx={{ width: 355, height: 720, borderRadius: '8px', position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 'calc(50% - 217px)',
                                        width: '435px',
                                        height: '10px',
                                        backgroundColor: '#FF494F',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                    }}
                                />
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Box
                                            sx={{
                                                color: '#006466', bgcolor: '#E4FFF9', width: '80px', borderRadius: '3px', margin: '10px auto 10px 0', textAlign: 'center', padding: '6px 4px',

                                            }}>
                                            Essential
                                        </Box>

                                    </Box>
                                    <Typography sx={{ color: '#222222', textAlign: 'start', fontSize: '22px' }}>
                                        Begin with the basics for your private practice.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '15px' }}>
                                        <Typography component="span" sx={{ fontSize: '30px', textAlign: 'start', color: '#006466' }}>
                                            PKR
                                        </Typography>
                                        <Typography component="span" sx={{ fontSize: '50px', textAlign: 'start', color: '#006466', ml: '5px', fontWeight: 'bold' }}>
                                            2,200
                                        </Typography>
                                        <Typography component="span" sx={{ fontSize: '20px', textAlign: 'start', color: '#222222', ml: '5px' }}>
                                            /per user
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mt: '15px', width: '100%' }}>
                                        <Button variant="text" sx={{ width: '100%', color: 'white', bgcolor: '#006466', borderRadius: '9px', cursor: 'pointer', fontSize: '15px', padding: '10px 15px', border: '1px solid #006466' }}>
                                            Get Started
                                        </Button>
                                    </Box>

                                    <hr style={{ border: '1px', height: '2px', backgroundColor: '#22222226', margin: '20px 0' }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '10px' }}>

                                        <Typography sx={{ color: '#222222', textAlign: 'start', fontSize: '22px' }}>
                                            Everything in Starter, plus
                                        </Typography>

                                    </Box>

                                    <Box>
                                        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Unlimited clients
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Paperless intakes
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Client Portal
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Progress notes
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Diagnosis and treatment plans
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Integrated measurement-based care
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Automated invoicing and billing
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Credit card processing
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Live customer support
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Telehealth
                                            </li>

                                        </ul>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={4} display="flex" flexDirection="column" alignItems="center">
                            <Card sx={{ width: 355, height: 720, borderRadius: '8px', position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 'calc(50% - 217px)',
                                        width: '435px',
                                        height: '10px',
                                        backgroundColor: '#938CFF',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                    }}
                                />
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Box
                                            sx={{
                                                color: '#006466', bgcolor: '#E4FFF9', width: '80px', borderRadius: '3px', margin: '10px auto 10px 0', textAlign: 'center', padding: '6px 4px',

                                            }}>
                                            Starter
                                        </Box>

                                    </Box>
                                    <Typography sx={{ color: '#222222', textAlign: 'start', fontSize: '22px' }}>
                                        Begin with the basics for your private practice.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '15px' }}>
                                        <Typography component="span" sx={{ fontSize: '30px', textAlign: 'start', color: '#006466' }}>
                                            PKR
                                        </Typography>
                                        <Typography component="span" sx={{ fontSize: '50px', textAlign: 'start', color: '#006466', ml: '5px', fontWeight: 'bold' }}>
                                            4,250
                                        </Typography>
                                        <Typography component="span" sx={{ fontSize: '20px', textAlign: 'start', color: '#222222', ml: '5px' }}>
                                            /per user
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mt: '15px', width: '100%' }}>
                                        <Button variant="text" sx={{ width: '100%', color: '#006466', borderRadius: '9px', cursor: 'pointer', fontSize: '15px', padding: '10px 15px', border: '1px solid #006466' }}>
                                            Get Started
                                        </Button>
                                    </Box>

                                    <hr style={{ border: '1px', height: '2px', backgroundColor: '#22222226', margin: '20px 0' }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '10px' }}>

                                        <Typography sx={{ color: '#222222', textAlign: 'start', fontSize: '22px' }}>
                                            Everything in Essential, plus
                                        </Typography>

                                    </Box>

                                    <Box>
                                        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Unlimited clients
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Paperless intakes
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Client Portal
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Progress notes
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Diagnosis and treatment plans
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Integrated measurement-based care
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Automated invoicing and billing
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Credit card processing
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Live customer support
                                            </li>

                                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <span
                                                    style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#006466',
                                                        borderRadius: '50%',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                                                </span>
                                                Telehealth
                                            </li>

                                        </ul>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Grid>


                    </Grid>
                </Box>


            </Box>





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

                    <Box sx={{ position: 'absolute', top: '243%', right: '8%' }}>
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