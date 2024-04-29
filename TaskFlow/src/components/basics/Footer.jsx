import "../../index.css";
import logoblanco from '../../assets/img/logo_v2.png';
import playstore from '../../assets/img/google-play.png';
import appstore from '../../assets/img/ios.png';

export function Footer(){
    return (
        <section className="bg-[#0E0E0E] pb-[3rem]">
            <a className="ml-[3rem]" href="logo"><img class="w-full h-full max-w-[12vw] ml-[3rem] mb-[1rem] pt-[2rem]" src={logoblanco} /></a>
            <div className="w-[15rem] ml-[3rem]">
                <h1 className="text-white">Download Our App</h1>
                <div className="grid grid-cols-[10%_10%] gap-[1rem] w-[50rem] ">
                    <div><img class="w-full h-full max-w-[12rem]" src={playstore} /></div>
                    <div><img class="w-full h-full max-w-[12rem]" src={appstore} /></div>
                </div>
            </div>
            <div className="w-[15rem] ml-[20rem] mt-[-3rem]">
                <h1 className="text-center text-white">Links</h1>
                <div className="grid grid-cols-[10%_10%_10%] gap-[1rem] w-[50rem] ">
                    <div className="border-r-[.2rem] border-white text-white" >
                        <a href="Home">Home</a>
                    </div>
                    <div className="border-r-[.2rem] border-white text-white">
                        <a href="About Us">About Us</a>
                    </div>
                    <div className=" text-white" >
                        <a href="Contact">Contact</a>
                    </div>
                </div>

            </div>
            <h1 className="text-white ml-[75rem]">Todos los derechos reservados</h1>
        </section>

    )
}