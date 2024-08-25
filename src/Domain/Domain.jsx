import React from 'react'
import SectionTitle from '../SectionTitle'
import WebIcon from './WebIcon.jsx'

const DomainCard = ({title, description, children}) => {
  return (
    <div className='DomainCard flex flex-col items-center bg-[#000000] rounded-lg justify-baseline md:w-[20%] w-[40%] aspect-square border-2 border-transparent hover:border-red-500 transition-colors duration-300'>
      {children}
      <h3 className='text-xl font-semibold text-center'>{title}</h3>
    </div>
  )
}

const Domain = () => {
  return (
    <div className='Domain bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter'>
      <SectionTitle>DOMAIN</SectionTitle>
      <div className='flex mt-10 justify-evenly flex-wrap'>
        <DomainCard title='AI/ML' description='AI/ML is the future'><WebIcon className="fill-red-500 w-32 h-32"/></DomainCard>
        <DomainCard title="Web/App" description="Web/App is the present"><WebIcon className="fill-red-500 w-32 h-32"/></DomainCard>
        <DomainCard title="Blockchain" description="Blockchain is the future"><WebIcon className="fill-red-500 w-32 h-32"/></DomainCard>
        <DomainCard title="Open Innovation" description="Open Innovation is the future"><WebIcon className="fill-red-500 w-32 h-32"/></DomainCard>
      </div>
    </div>
  )
}

export default Domain