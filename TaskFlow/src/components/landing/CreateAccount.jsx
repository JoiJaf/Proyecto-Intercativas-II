import "../../index.css";


export function CreateAccount(){
    return (
        <div className='mt-[rem] grid justify-center mb-[rem] bg-[#F3F3F3] pb-[3rem] pt-[5rem]'>
            <h1 className='text-5xl mb-[2rem] text-center'>Create your account and keep<br/> 
            your tasks up to date!</h1>
            <a className='ml-[13rem] text-2xl text-[#323233] border-2 border-[#E0E0E0] rounded-3xl w-[13rem] h-[3rem] pt-[.5rem] text-center bg-white' href="Create Account">Create Account</a>
            <a className='ml-[13rem] text-xl text-[#323233] w-[13rem] text-center mt-[1.5rem]' href="I already have an account">I already have an account</a>
        </div>
    )
}