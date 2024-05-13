
import "../../index.css";

export function Task() {
    return (
        <div className="mt-[8em]">

            <section className="bg-[#212121] rounded-[5rem] p-20 banner mx-[4vw]">
                <div className="content-end">
                    <h2 class="fs_lg mb-1 text-white font-bold">Pending jobs</h2>
                    <p class="fs_xxl mb-4 text-white font-normal">Hello (usuario)</p>

                    <h3 class="fs_lg text-white">This week you have <br />
                        <span className="pt-4 fs_xxl font-semibold">10 tasks</span> </h3>
                    <button class="flex py-4 px-12 mt-[10vw] mb-[1.5rem] bg-[#6BDD8F] text-[#fff] fs_md items-center rounded-[1rem]">View all ~ </button>
                </div>

                <div class="flex gap-[2vw]">
                    <div class="bg-[#F0EC84] p-[3vw] rounded-[3rem] grid">
                        <p className="font-bold fs_md mb-[2rem]">01</p>
                        <p className="fs_lg font-normal w-[8vw] mr-[3vw] mb-2">Algorithm Design and Analysis Assignment</p>
                        <p className="font-semibold mb-[5vw]">Interactivas II</p>
                        <p className="text-[#2c2c2c] font-semibold fs_md">April 9 | 1:00pm</p>
                    </div>

                    <div class="bg-[#8D84F0] p-[3vw] rounded-[3rem] grid">
                        <p className="font-bold fs_md mb-[2vw]">02</p>
                        <p className="fs_lg font-normal w-[8vw] mr-[3vw] mb-2">Storyboard Creation </p>
                        <p className="font-semibold mb-[5vw]">Audio and Video Editing</p>
                        <p className="text-[#2c2c2c] font-semibold fs_md">April 11 | 1:00pm</p>
                    </div>
                    <div class="bg-[#F0B284] p-[3vw] rounded-[3rem] grid">
                        <p className="font-bold fs_md mb-[2vw]">03</p>
                        <p className="fs_lg font-normal w-[8vw] mr-[3vw] mb-2">Concept Mapping from Videos</p>
                        <p className="font-semibold mb-[5vw]">Engineering of Interactive Applications</p>
                        <p className="text-[#2c2c2c] font-semibold fs_md">April 11 | 1:00pm</p>
                    </div>
                </div>
            </section>

            <p className="text-2xl font-semibold pt-[2vw] text-center">Calendar and Tasks</p>
        </div>



    )
}