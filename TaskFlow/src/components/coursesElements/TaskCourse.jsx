
import "../../index.css";
import PropTypes from 'prop-types'

export function TaskCourse({ title,  description, image, date }) {
    return (
        <div className="bg-white md:p-[2vw] p-[1.4rem] border-2 rounded-[2rem] flex mx-[2vw] justify-between pr-[4rem]">
            <div className="flex">
                <img className="md:w-[12vw] w-[20vw] md:h-[8vw] h-[15vw]" src={image} alt="" />

                <div className="ml-[10vw] md:mr-0  flex flex-col justify-center">
                    <p className="md:text-[1.5rem] text-[1rem] font-semibold m-0">{title}</p>
                    <p className="md:text-[1.3rem] text-[.8rem] mb-[1vw] m-0">{description}</p>
                    <p className="md:text-[1rem] text-[.6rem] text-[#6E6E6E]">{date}</p>
                </div>
            </div>
            <input className="w-[3vw] ml-6" type="checkbox" value="" />
        </div>

    );
}

//set required props
TaskCourse.propTypes = {
    title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

//set default values for props
TaskCourse.defaultProps = {
    title: 'TaskCourse title',
    description: 'TaskCourse description',
    image: 'TaskCourse image',
    date: 'TaskCourse date'
}