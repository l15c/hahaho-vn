import React from 'react'
import Step from './step';
import { type } from 'os';


type Props = {
  quytrinh: { step: number; description: string }[];
}

const QuyTrinh = ({quytrinh}:Props) => {
  return (
    <div>
      <div className="flex justify-center px-44 ">
        {quytrinh.map((item, index) => {
          return (
            <div key={index} className="mx-1">
              <Step steps={item.step} description={item.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default QuyTrinh;