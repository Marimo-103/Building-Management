import React from 'react'
import Container from '../Components/Container'
import { IoIosArrowRoundForward } from 'react-icons/io'
import banner_img from '../../public/Common Images/Banner.png'


const IntroBanner = () => {
  return (
    <div className='bg-gradient-to-b from-[#4182FF33] via-[#4182FF00] to-[#4182FF00]'>
        <Container className=' pr-0 flex justify-between'>
        <div className="left pt-[200px]">
        <h1 className=' text-[52px] text-[#000] font-Pretendard font-bold leading-[138.462%] max-w-[737px]'>
        공정하고 투명한 건물 관리,<br /><span className='bg-[#c9fa8a] px-[2px] rounded-[8px]'>대한건물관리협회</span> 가 함께합니다.
        </h1>
        <p className='max-w-[413px] text-base text-[#000000cc] font-Pretendard leading-[175%] mt-5 mb-8'>
        대한건물관리협회는 건물 관리의 공정성과 투명성을 보장하기 위해 중재와 상담을 지원하는 <span className='font-semibold'>비영리 단체</span>입니다.
        </p>
        <div className="btns flex gap-[15px]">
            <button className='flex items-center justify-center gap-[10px] py-[15px] px-[30px] bg-[#4182FF] rounded-[8px] border border=[#4182FF] text-base text-[#fff] font-Pretendard font-medium leading-[162.5%] duration-300 hover:bg-transparent hover:text-[#23282F] hover:border-[#23282F]'>
            중재 요청하기 <IoIosArrowRoundForward className='text-2xl'/>
            </button>
            <button className='flex items-center justify-center gap-[10px] py-[15px] px-[30px] bg-[#4182FF] rounded-[8px] border border=[#4182FF] text-base text-[#fff] font-Pretendard font-medium leading-[162.5%] duration-300 hover:bg-transparent hover:text-[#23282F] hover:border-[#23282F]'>
            더 알아보기
            </button>
        </div>
        <div className="reviews flex gap-[30px] mt-[114px] mb-[30px]">
            <div className="one">
                <h1 className='text-[52px] text-[#000] font-Pretendard font-semibold leading-[119.231%]'>
                100+
                </h1>
                <p className='text-base text-[#000000cc] font-Pretendard leading-[175%]'>
                회원 수
                </p>
            </div>
            <div className="one">
                <h1 className='text-[52px] text-[#000] font-Pretendard font-semibold leading-[119.231%]'>
                10+
                </h1>
                <p className='text-base text-[#000000cc] font-Pretendard leading-[175%]'>
                년 이상의 업계 경력
                </p>
            </div>
            <div className="one">
                <h1 className='text-[52px] text-[#000] font-Pretendard font-semibold leading-[119.231%]'>
                50+
                </h1>
                <p className='text-base text-[#000000cc] font-Pretendard leading-[175%]'>
                법적 사례 해결 건수
                </p>
            </div>
        </div>
        </div>
        <div className="right w-[750px] h-[799px] pt-[116px]">
            <img src={banner_img} alt="" className='h-full w-full'/>
        </div>
        </Container>
    </div>
  )
}

export default IntroBanner