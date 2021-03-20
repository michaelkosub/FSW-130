import React from 'react';
import ThemeContext from './ThemeContext';

const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer className={`${theme.style}-footer flex-center`}>
                    <p>&copy; The-Theme</p>
                </footer>
            )}
        </ThemeContext.Consumer>
    );
}

export default Footer;