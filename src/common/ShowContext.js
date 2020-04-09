import React from 'react';

const ShowContext = React.createContext([]);

export const ShowProvider = ShowContext.Provider;
export const ShowConsumer = ShowContext.Consumer;

export default ShowContext;
