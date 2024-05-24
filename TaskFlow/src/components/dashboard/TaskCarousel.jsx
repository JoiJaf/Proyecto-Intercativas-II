
import "../../index.css";
import { Carousel } from "./Carousel.jsx";

export function Task() {
    return (
        <div className="mt-[8em]">
            <section className="bg-[#212121] rounded-[5rem] p-20 banner mx-[4vw] relative">
                <div className="content-end">
                    <h2 class="fs_lg mb-1 text-white font-bold">Pending jobs</h2>
                    <p class="fs_xxl mb-4 text-white font-normal">Hello (usuario)</p>

                    <h3 class="fs_lg text-white">This week you have <br />
                        <span className="pt-4 fs_xxl font-semibold">10 tasks</span> </h3>
                    <button class="flex py-4 px-12 mt-[10vw] mb-[1.5rem] bg-[#6BDD8F] text-[#fff] fs_md items-center rounded-[1rem]">View all ~ </button>
                </div>
                <Carousel />
            </section>
            <p className="text-2xl font-semibold pt-[2vw] text-center">Calendar and Tasks</p>
        </div>
    )
}
