import React from 'react'
import { companyData } from '../Data/Company';

const AboutComp = () => {
    const company:{[key:string]:any}=companyData;
  return (
    <div className='flex flex-col gap-5'>
        {Object.keys(company).map((key,index)=>(
       key!=='Name' &&     <div key={index} className='mt-5'>
                <div className='text-2xl font-semibold mb-5'>{key}</div>
            {/* { key!=='Website' &&   <div className='text-lg text-mine-shaft-300 text-justify'>{key=="Specialties"?company[key].join(', '):company[key]}</div>} */}
            { key!=='Website' &&   <div className='text-lg text-mine-shaft-300 text-justify'>{key=="Specialties"?company[key].map((item:string,index:number)=><div key={index}> &bull; {item}</div>):company[key]}</div>}
            { key=='Website' &&   <a href={company[key]} target='_blank' className='text-lg text-bright-sun-400 text-justify'>{company[key]}</a>}
            </div>
        ))}
    </div>
  )
}

export default AboutComp