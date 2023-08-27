import React, { createContext, useState } from 'react';

export const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ children }) => {
   const [apiKey, setApiKey] = useState('');
   const [fileList, setFileList] = useState([]);

   return (
      <ApiKeyContext.Provider value={{ apiKey, setApiKey, fileList, setFileList }}>
          {children}
      </ApiKeyContext.Provider>
   );
};
