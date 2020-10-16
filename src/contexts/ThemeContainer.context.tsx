import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '@/assets/styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

    // prevents ssr flash for mismatched
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>;
    }

    return body;
};

export default ThemeContainer;
