import "../index.css";

export function Stadistics(){
    return(
        <section className="mt-[5rem] grid grid-cols-[60%_35%] ml-[8rem] mb-[6rem]">
            <div>
                <h1 className="text-[4rem] font-bold mb-[1.5rem]">Stadistics</h1>
                <div className="grid grid-cols-[15.5%_34.5%_15.5%] gap-[4rem]">
                    <div className="border border-[#1a1919] p-[1rem] w-[8rem] rounded-[1rem]">
                        <h1 className="text-[2rem] font-bold">1</h1>
                        <p className="text-[#979797]">Uncompleted<br/>tasks</p>
                    </div>
                    <div className="border border-[#1a1919] p-[1rem] w-[18rem] rounded-[1rem]">

                        <section className=" inline-flex">
                            <div>
                                <p className="text-[#979797]">So far, you've completed<br/>tasks this weak</p> 
                            </div>
                            <div className="align-left ml-[3rem]">
                                <h2 className="text-[2rem] font-bold">2/10</h2>
                            </div>
                        </section>
                        
                    </div>
                    <div className="border-[.8rem] border-[#6BDD8F] p-[1rem] w-[8rem] rounded-[100%]">
                        <h2 className="text-[2rem] font-bold pt-[.8rem] ">100%</h2>
                    </div>
                </div>
            </div>
            <div className="inline-flex mt-[5rem] ">
                <p className="text-[2rem]">Monitor the number of tasks you <br/>
                have and stay alert about your<br/> 
                progress with the traffic light<br/>
                indicator.</p>
            </div>
        </section>
    )
}