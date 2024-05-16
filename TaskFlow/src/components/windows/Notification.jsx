import "../../index.css";
import user from '../../assets/img/user.png';

export function Notification(){
    return(
    <section className="w-[30rem] ml-[30rem] mt-[10vw] mb-[3rem]">
        <div className="bg-[#6BDD8F]">
            <div>

                <div className="grid grid-cols-[90%_5%]">
                    <h1 className="text-[2.5rem] ml-[1rem] text-[#FFFFFF]">Notifications</h1>
                

                    <div className="mt-[-1rem]">
                        <a className="text-[3rem] text-[#FFFFFF]" href="">-</a>
                    </div>
                </div>
                <h2 className="ml-[1rem] pb-[1rem] text-[#787878]">You have 2 new messages and one notification</h2>
            </div>
            
        </div>

        <section className="grid grid-cols-[10%_80%] gap-6 ml-[1rem] mt-[2rem] mb-[1rem]">
                <div>
                    <img className="rounded-lg" src={`${user}`} alt="user" />
                </div>
                <div className="flex justify-center flex-col bg-[#D9D9D9] ml-[-.5rem] pl-[1rem] mb-[.5rem]">
                    <h1 className="text-[1.5rem] font-bold">John Doe</h1>
                    <p className="text-[#787878]">Hey, just wanted to follow up on our meeting yesterday.<br /> Let me know if you have any questions!</p>
                    <h2 className="ml-[18rem] mb-[.5rem] text-[#787878]">5m ago</h2>
                </div>

            <div>
                <img className="rounded-lg" src={`${user}`} alt="user" />
            </div>
            <div className="flex justify-center flex-col bg-[#D9D9D9] ml-[-.5rem] pl-[1rem] mb-[.5rem]">
                <h1 className="text-[1.5rem] font-bold">Jane Smith</h1>
                <p className="text-[#787878]">Did you see the new design updates I sent over? Let me <br/> know what you think.</p>
                <h2 className="ml-[18rem] mb-[.5rem] text-[#787878]">1h ago</h2>
            </div>

            <div>
                <img className="rounded-lg" src={`${user}`} alt="user" />
            </div>
            <div className="flex justify-center flex-col bg-[#D9D9D9] ml-[-.5rem] pl-[1rem] mb-[.5rem]">
                <h1 className="text-[1.5rem] font-bold">New Task</h1>
                <p className="text-[#787878]">Make 3 different 3D models for our next class.</p>
                <h2 className="ml-[18rem] mb-[.5rem] text-[#787878]">1h ago</h2>
            </div>

            <div>
                <img className="rounded-lg" src={`${user}`} alt="user" />
            </div>
            <div className="flex justify-center flex-col bg-[#D9D9D9] ml-[-.5rem] pl-[1rem] mb-[.5rem]">
                <h1 className="text-[1.5rem] font-bold">University</h1>
                <p className="text-[#787878]">Welcome to ITM!</p>
                <h2 className="ml-[18rem] mb-[.5rem] text-[#787878]">8h ago</h2>
            </div>
            
        </section>
        <a className="bg-[#6BDD8F] text-[2rem] text-[#FFFFFF] px-[3rem] py-[.5rem] ml-[6rem] rounded-lg " href="Mark all as read">Mark all as read</a>
    </section>
    )
}
