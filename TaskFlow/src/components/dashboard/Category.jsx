import carrera from '../../assets/img/carre.png';
import uni from '../../assets/img/uni.png';
import course from '../../assets/img/course.png';
import students from '../../assets/img/est.png';
import "../../index.css";

export function Category() {

    return (
        <div className="m-[2vw]">

            <h2 class="fs_xl pl-[5vw] mb-[1vw] ">Categories</h2>
            <div className='grid gap-y-[1vw]'>
                <a href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw]'>
                    <img src={carrera} alt="Carreer" />
                    <p className='clamp-lg m-[auto]'>Careers</p>
                </a>

                <a href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw]'>
                    <img src={course} alt="Carreer" />
                    <p className='clamp-lg m-[auto]'>Courses</p>
                </a>

                <a href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw]'>
                    <img src={uni} alt="Carreer" />
                    <p className='clamp-lg m-[auto]'>University</p>
                </a>

                <a href='' className='p-[2vw] flex place-items-center border-2 rounded-[2vw]'>
                    <img src={students} alt="Carreer" />
                    <p className='clamp-lg m-[auto]'>Student </p>
                </a>
            </div>

        </div>
    )
}