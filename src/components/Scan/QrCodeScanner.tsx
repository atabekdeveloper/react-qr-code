import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState('');

  const scanHandler = (result: any) => {
    if (!result) return;
    setScanned(result.text);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <QrReader
        constraints={{ facingMode: 'environment' }}
        scanDelay={1000}
        onResult={scanHandler}
        containerStyle={{ width: '500px' }}
      />
      {scanned.includes('http') ? (
        <a className="text-primary text-xl cursor-pointer" href={scanned} target="_blank">
          {scanned}
        </a>
      ) : (
        <p className="text-primary text-xl">{scanned}</p>
      )}
    </div>
  );
};
