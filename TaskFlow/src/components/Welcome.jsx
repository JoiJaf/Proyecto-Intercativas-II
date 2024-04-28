import nombrelogo from '../assets/img/nombrelogo.png';
import "../index.css";

export function Welcome(){
    return (
        <div className='mt-[20rem] grid justify-center mb-[15rem]'>
            <h1 className='text-9xl mb-[2rem]'>Welcome to</h1>
            <a className='ml-[14rem] mb-[2rem]' href="nombrelogo"><img className='h-[8rem]' src={nombrelogo} alt="nombrelogo" /></a>
            <a className='ml-[16rem] text-6xl text-[#6BDD8F] border-2 border-[#6BDD8F] rounded-xl w-[13rem] text-center' href="Start">Start</a>
        </div>
    )
}