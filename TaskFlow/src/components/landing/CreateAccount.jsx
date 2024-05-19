import "../../index.css";

export function CreateAccount() {
  return (
    <div>
      <div className="text-center md: bg-[#212121] py-20 md:py-[10rem]">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-[2rem] text-white">
          Create your account and keep
          <br className="md:block" />
          your tasks up to date!
        </h1>
        <button
          className="text-lg md:text-xl text-white border-2 border-[#6BDD8F] rounded-md w-48 h-12 md:w-[13rem] md:h-[3rem] justify-center bg-[#6BDD8F]"
          href="Create Account"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
