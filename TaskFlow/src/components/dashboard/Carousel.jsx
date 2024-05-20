import "../../index.css";

export function Carousel() {
    return (
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
    )
  }
