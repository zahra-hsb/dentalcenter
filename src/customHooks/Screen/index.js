'use client';

import {useCallback, useEffect, useMemo, useState} from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState((typeof window !== 'undefined') ? window.innerWidth : 0);
    const [device, setDevice] = useState('sm');

    const breakpoints = useMemo(() => {
        return {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
        };
    }, []);


    const getDeviceType = useCallback((width) => {
        const {
            sm,
            md,
            lg,
            xl
        } = breakpoints;

        if (width < sm) return 'sm';
        if (width < md) return 'md';
        if (width < lg) return 'lg';
        if (width < xl) return 'xl';
        return '2xl';
    }, [breakpoints])

    const handleResize = useCallback(() => {
        setScreenSize(window.innerWidth);
        const newDevice = getDeviceType(screenSize);
        setDevice(newDevice);
    }, [getDeviceType, screenSize])

    const isMobile = useMemo(() => {
        return screenSize < breakpoints.sm
    }, [screenSize, breakpoints.sm])
    const isTablet = useMemo(() => {
        return screenSize < breakpoints.lg && screenSize > breakpoints.sm
    }, [screenSize, breakpoints.lg, breakpoints.sm])

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return {
        screenSize,
        device,
        isMobile,
        isTablet
    };
};

export default useScreenSize;
