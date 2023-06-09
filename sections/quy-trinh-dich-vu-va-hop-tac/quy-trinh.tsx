import React from 'react'
import Step from './step';
import { Flow } from '@/types/component';

type Props = {
  flow: Flow
};



const QuyTrinh = ({flow}: Props) => {
  return (
    <div>
      <div className="flex justify-center px-44  ">
        {flow.step.map((item, index) => {
          return (
            <div key={index} className="mx-1">
              <Step steps={index} description={item.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default QuyTrinh;