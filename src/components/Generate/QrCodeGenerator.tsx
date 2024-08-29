import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    setResult(value);
  };

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-2 flex-col">
      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
        className="p-2 border outline-none w-full max-w-[300px]"
        required
      />
      <button type="submit" className="p-2 bg-primary text-white" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result !== '' && (
        <div className="w-[200px] h-[200px]">
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};
