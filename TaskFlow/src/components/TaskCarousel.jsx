
import "../index.css";

export function Task() {
    return (
        <div className="mt-[10em]">
            <h2 class="fs_xxl pt-10 pb-10 pl-[6rem]">My progress</h2>

            <section className="bg_banner rounded-[5rem] p-20 banner mx-[4rem]">
                <div>
                    <h2 class="fs_xl mb-4 text-white font-bold">Pending jobs</h2>
                    <p class="fs_xxl mb-4 text-white font-normal">Hello (usuario)</p>

                    <h3 class="fs_lg text-white">This week you have <br />
                        <span className="pt-4 fs_xxl font-semibold">10 tasks</span> </h3>
                    <button class="flex py-2 px-10 mt-[4vw] bg-white fs_md items-center rounded-3xl">View all <svg
                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="44"
                        height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 7l-10 10" />
                        <path d="M8 7l9 0l0 9" />
                    </svg></button>
                </div>

                <div class="flex gap-8">
                    <div class="bg-[#F0EC84] p-[3vw] rounded-[1rem]">
                        <p className="font-bold fs_md mb-[2rem]">01</p>
                        <p className="fs_lg font-light w-[8vw] mr-[3vw] mb-2">Algorithm Design and Analysis Assignment</p>
                        <p className="font-semibold mb-[2rem]">Interactivas II</p>
                        <p className="text-[#6E6E6E]">April 9 | 1:00pm</p>
                    </div>

                    <div class="bg-[#8D84F0] p-[3vw] rounded-[1rem]">
                        <p className="font-bold fs_md mb-[2vw]">02</p>
                        <p className="fs_lg font-light w-[8vw] mr-[3vw] mb-2">Storyboard Creation </p>
                        <p className="font-semibold mb-[2vw]">Audio and Video Editing</p>
                        <p className="text-[#6E6E6E]">April 11 | 1:00pm</p>
                    </div>
                    <div class="bg-[#F0B284] p-[3vw] rounded-[1rem]">
                        <p className="font-bold fs_md mb-[2vw]">03</p>
                        <p className="fs_lg font-light w-[8vw] mr-[3vw] mb-2">Concept Mapping from Videos</p>
                        <p className="font-semibold mb-[2vw]">Engineering of Interactive Applications</p>
                        <p className="text-[#6E6E6E]">April 11 | 1:00pm</p>
                    </div>
                </div>
            </section>
        </div>



    )
}