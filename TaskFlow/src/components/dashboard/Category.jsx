import carrera from '../../assets/img/carre.png';
import uni from '../../assets/img/uni.png';
import course from '../../assets/img/course.png';
import students from '../../assets/img/est.png';
import "../../index.css";

export function Category() {

    return (
        <div className="bg-[#FCF8EC] pt-[8vw] pb-[4vw] px-[10vw]">

            <div>
                <div className='grid gap-[1vw] grid-cols-2'>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white'>
                        <img src={carrera} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>Careers</p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw]'>
                            View all ~
                        </button>
                    </div>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white'>
                        <img src={course} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>Courses</p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw]'>
                            View all ~
                        </button>
                    </div>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white'>
                        <img src={uni} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>University</p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw]'>
                            View all ~
                        </button>
                    </div>

                    <div href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw] bg-white'>
                        <img src={students} alt="Carreer" />
                        <p className='clamp-lg m-[auto]'>Student </p>
                        <button className='bg-[#212121] py-[.5vw] px-[1.5vw] text-[#fff] rounded-[1rem] mt-[6vw]'>
                            View all ~
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}