import "../../index.css";

export function Stadisticslanding() {
  return (
    <section className="mt-[5rem] bg-[#212121] grid mb-[6rem] place-content-center  py-[6rem]">
      <div className="">
        <h1 className="text-[4rem] font-bold text-center text-[#6BDD8F] mb-[2rem]">
          Stadistics
        </h1>
        <p className="text-center text-white text-[1.5rem] mb-[6rem]">
          Monitor the number of tasks you have and stay alert about <br />
          your progress with the traffic light indicator.
        </p>
        <div className="flex place-content-center gap-[6rem] h-[16rem] ">
          <div className="border border-[#1a1919] p-[1rem] pt-[2rem] w-[18rem] rounded-[1rem] bg-white">
            <h2 className="text-[4rem] font-bold">1</h2>
            <p className="text-[#979797] text-[2rem]">
              Uncompleted
              <br />
              tasks
            </p>
          </div>
          <div className="border border-[#1a1919] p-[1rem] w-[40rem] rounded-[1rem] bg-white">
            <section className=" inline-flex pt-[2rem]">
              <div>
                <p className="text-[2rem] text-[#979797]">
                  So far, you've completed
                  <br />
                  tasks this weak
                </p>
              </div>
              <div className="align-left ml-[6rem]">
                <h2 className="text-[4rem] font-bold ">2/10</h2>
              </div>
            </section>
          </div>
          <div className="border-[.8rem] border-[#6BDD8F] p-[1rem] w-[16rem] bg-white rounded-[100%]">
            <h2 className="text-[3.5rem] text-center font-bold ">100%</h2>
            <h3 className="text-[#979797] text-[2rem] text-center">
              Your week <br /> percentage
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
