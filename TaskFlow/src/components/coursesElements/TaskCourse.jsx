
import "../../index.css";

export function TaskCourse({ title, category, image, estimatedTime }) {
    return (
        <div className="border-4 bg-white  border-[#0E0E0E] flex gap-[2vw] items-center mb-[1rem] rounded-[1rem]">
            <img className=" w-24 h-24 object-cover sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-[1rem_0_0_1rem]" src={image} alt="" />
            <div className="fs_md">
                <p className="text-[#0E0E0E] font-semibold text-lg sm:text-xl md:text-2xl">{title}</p>
                <p className="text-[#0E0E0E]  text-base sm:text-lg md:text-xl">{category}</p>
                <p className="text-[#0E0E0E] mt-4 font-light text-base sm:text-lg md:text-xl">{estimatedTime}</p>
            </div>
        </div>

    );
}

