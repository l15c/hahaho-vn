import React from 'react'
import Step from './step';

type Props = {}
const data = [
  {step:1,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:2,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:3,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:4,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:5,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:6,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:7,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
  {step:8,
  description:"Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng "},
    
]


const QuyTrinhHopTac = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center px-44  ">
        {data.map((item, index) => {
          return (
            <div key={index} className="mx-1">
              <Step steps={item.step} description={item.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default QuyTrinhHopTac;