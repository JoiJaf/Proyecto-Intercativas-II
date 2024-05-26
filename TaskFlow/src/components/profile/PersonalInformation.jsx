import "../../index.css";
function InputField({ label, id, name, value, type = "text" }) {
  return (
    <div className="grid my-14">
      <label htmlFor={id} className="clamp-md mb-1">{label}</label>
      <input id={id} type={type} name={name} value={value} className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
    </div>
  );
}

export function PersonalInformation() {
    
    return (
        <section className="mb-[76px] mx-[38px]">
          <div className="grid grid-cols-2 gap-8 text-[#A7A7A7]">
            <div>
              <InputField label="Carnet" id="carnet" name="carnet" value="C13838" />
              <InputField label="Career" id="career" name="career" value="ITM" />
            </div>
    
            <div>
              <InputField label="Celphone" id="celphone" name="celphone" value="+506 87978797" />
              <InputField label="Status" id="status" name="status" value="Active" />
            </div>
          </div>
        </section>
      );
   
}
