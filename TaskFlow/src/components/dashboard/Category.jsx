import carrera from '../../assets/img/carre.png';
import uni from '../../assets/img/uni.png';
import course from '../../assets/img/course.png';
import students from '../../assets/img/est.png';
import "../../index.css";

export function Category() {

    return (
        <div className="bg-[#FCF8EC] pt-[8vw] pb-[4vw] px-[10vw]">

            <div>
                <div className='grid gap-[1vw] md:grid-cols-2 grid-cols-1'>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white hover:scale-[1.02] hover:duration-500'>
                        <img className='w-[10vw]' src={carrera} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>Careers</p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw] hover:bg-[#2f2f2f]'>
                            View all ~
                        </button>
                    </div>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white hover:scale-[1.02] hover:duration-500'>
                        <img className='w-[8vw]' src={course} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>Courses</p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw] hover:bg-[#2f2f2f]'>
                            View all ~
                        </button>
                    </div>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white hover:scale-[1.02] hover:duration-500'>
                        <img className='w-[8vw]' src={uni} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>University</p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw] hover:bg-[#2f2f2f]'>
                            View all ~
                        </button>
                    </div>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white hover:scale-[1.02] hover:duration-500'>
                        <img className='w-[8vw]' src={students} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>Student </p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw] hover:bg-[#2f2f2f]'>
                            View all ~
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}