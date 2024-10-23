'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../public/logo.png';


export default function howItWorks() {

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
                    <Button variant="text" sx={{ color: 'black', cursor: 'pointer' }}>Contact</Button>

                    <Button variant="text" sx={{ color: 'white', bgcolor: '#006466', borderRadius: '9px', cursor: 'pointer' }}>Start for free</Button>
                    <Button variant="text" sx={{ color: 'white', bgcolor: 'black', borderRadius: '9px', cursor: 'pointer' }}>Login</Button>
                </Box>
            </Box>


            <Box sx={{ color: 'black' }}>
                THIS IS How It Works PAGE
            </Box>

        </>
    )
}