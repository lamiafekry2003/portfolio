export default function Skills() {
  const skills = [
    {
      name: "Photoshop",
      score: 75,
      color: "bg-blue-500",
      Text: "text-blue-500",
    },
    { name: "jQuery", score: 60, color: "bg-red-500", Text: "text-red-500" },
    {
      name: "HTML5",
      score: 85,
      color: "bg-amber-300 ",
      Text: "text-amber-300",
    },
    {
      name: "CSS3",
      score: 90,
      color: "bg-fuchsia-700",
      Text: "text-fuchsia-700",
    },
    {
      name: "WordPress",
      score: 70,
      color: "bg-teal-500",
      Text: "text-teal-500",
    },
    { name: "SEO", score: 80, color: "bg-indigo-700", Text: "text-indigo-700" },
  ];
  return (
    <div className="md:ml-72  pt-20 ">
      <div className=" flex flex-col justify-center text-left  ">
        <p className="tracking-[5px] text-[10px] font-medium mb-4 text-neutral-400 uppercase">
          my specialty
        </p>
        <p className="tracking-[2px] leading-7 mb-8  text-lg font-semibold font-serif uppercase">
          My skills
        </p>
        <p className=" mb-7 text-md opacity-70 leading-6  ">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-lg font-medium">{skill.name}</label>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span
                  className={`text-xs absolute font-semibold inline-block mb-4 px-2 uppercase ${skill.Text} `} style={{left: `${skill.score-3}%`}}
                >
                  {skill.score}%
                </span>
              </div>
              <div className="flex mb-2">
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    className={`text-xs font-medium text-center p-0.5 leading-none rounded-full ${skill.color}`}
                    style={{ width: `${skill.score}%` }}
                  >
                    
                  </div>
                  <div
                    className={`absolute -bottom-2.5 transform -translate-y-1/2 ${skill.color} rounded-full`}
                    style={{
                      width: '20px',
                      height: '20px',
                      left: `${skill.score-2}%`, 
                      border: '2px solid white',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
