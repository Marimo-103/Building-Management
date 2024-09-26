import React from 'react'
import Container from '../Components/Container'
import logo1 from '../../public/Common Images/Logo1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full'>
        <Container className='flex items-center py-[25px]'>
            <div className="logo w-[251px] mr-[147px]">
                <img src={logo1} alt="" className='w-full'/>
            </div>
            <div className="menu">
                <ul className='flex gap-5'>
                    <li className='text-base text-[#000000cc] font-Inter font-medium cursor-pointer'>
                    협회 소개
                    </li>
                    <li className='text-base text-[#000000cc] font-Inter font-medium cursor-pointer'>
                    분쟁해결요청
                    </li>
                    <li className='text-base text-[#000000cc] font-Inter font-medium cursor-pointer'>
                    커뮤니티
                    </li>
                    <li className='text-base text-[#000000cc] font-Inter font-medium cursor-pointer'>
                    협회 가입안내
                    </li>
                </ul>
            </div>
            <div className="button ml-auto">
                <button className='py-[12.5px] px-[22px] bg-[#4182FF] border border-[#4182FF] rounded-[8px] text-base text-[#fff] font-Inter font-medium hover:text-[#23282F] hover:bg-transparent hover:border-[#23282F] duration-300'>
                로그인 / 회원가입
                </button>
            </div>
        </Container>
    </div>
  )
}

export default Navbar