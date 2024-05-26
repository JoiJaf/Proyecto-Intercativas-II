import "../../index.css";
import imageCourse from "../../assets/img/InformationCourse.svg";

export function InformationCourse() {
  return (
    <section className="py-12 bg-[#FCF8EC] bg-cover">
      <h2 className="text-xl font-bold ml-8 pb-2">3D Design Learning</h2>
      <div className="border-4 border-white rounded-md max-w-[92rem] mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-8">
          <div className="justify-center md:justify-start">
            <img className="w-full max-w-xs ml-8 md:max-w-md" src={imageCourse} alt="Course" />
          </div>
          <div>
            <h2 className="text-xl pb-2 font-bold">Course Name</h2>
            <h3 className="text-xl pb-2 font-bold">TM5300- English Reading for Computer Science</h3>
            <h3 className="text-xl pb-2 font-bold">Mode: Presential</h3>
            <h3 className="text-xl pb-2 font-bold">Classroom: N01</h3>
            <h3 className="text-xl pb-2 font-bold">Professor: Jorge Miranda Loria</h3>
            <h3 className="text-xl pb-2 font-bold">Class time: M 13-16/ Thu 13-16</h3>
            <h3 className="text-xl pb-2 font-bold">Description</h3>
            <p className="text-md pb-2">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like readable
              English.
            </p>
          </div>
        </div>
        <div className="mb-8 text-center">
          <button
            className="bg-[#6BDD8F] hover:bg-[#0E0E0E] text-lg md:text-2xl text-white px-6 md:px-12 py-2 md:py-2 rounded-lg"
            href="View Tasks"
          >
            View Tasks
          </button>
        </div>
      </div>
    </section>
  );
}