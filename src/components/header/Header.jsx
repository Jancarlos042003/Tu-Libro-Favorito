import React from 'react';
import NavigationBar from './NavigationBar'; 
import Navigation from './Navigation';  

function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <NavigationBar />
            <Navigation />
        </header>
    );
}

export default Header;