import React from 'react';

export default React.createContext({
    theme: 'light',
    setTheme: (value) => {theme=value},
});
