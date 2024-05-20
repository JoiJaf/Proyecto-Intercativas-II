import "../../index.css";
function HealthInfoInput({ label, id, type, name, value }) {
  return (
    <div className="grid my-14">
      <label htmlFor={id} className="clamp-md mb-1">{label}</label>
      <input id={id} type={type} name={name} value={value} className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
    </div>
  );
}

export function HealthCondition() {
  return (
    <div className="bg-[#212121] mt-[38px] p-[38px] rounded-[20px]">
      <h3 className="clamp-xl font-medium text-[#6BDD8F]">Health Condition</h3>
      <div className="grid grid-cols-2 gap-8 text-white">
        <div>
          <HealthInfoInput label="Age" id="age" type="text" name="age" value="20 years old" />
          <HealthInfoInput label="Daily sleep hours" id="sleepHours" type="text" name="sleepHours" value="8 hours" />
        </div>

        <div>
          <HealthInfoInput label="Physical activities" id="physicalActivities" type="physicalActivities" name="physicalActivities" value="Joggin, calisthenics" />
          <HealthInfoInput label="Desease(s)" id="desease" type="desease" name="desease" value="Chlamydia, E. Coli" />
        </div>
      </div>

      <div className="flex justify-center items-center p-4 max-md:px-0">
        <input type="submit" value="Update Condition" className="bg-[#6BDD8F] clamp-lg text-white py-4 px-4 rounded-[20px] w-[598px] max-md:w-full" />
      </div>
    </div>
  );
}
