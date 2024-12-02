
import style from './experience.module.css'
export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      duration: '2017-2018',
      description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',
      color:'bg-blue-500'
    },
    {
      title: 'Front End Developer at Google Company',
      duration: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      color:'bg-red-500'
    },
    {
      title: 'System Analyst',
      duration: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      color:'bg-orange-400'
    }
  ];
  return (
    <div className="md:ml-72 pt-20">
      <div className="flex flex-col justify-center text-left">
        <p className="tracking-[5px] text-[10px] font-medium mb-4 text-neutral-400 uppercase">
        EXPERIENCE
        </p>
        <p className="tracking-[2px] leading-7 mb-8 text-lg font-semibold font-serif uppercase">
        WORK EXPERIENCE
        </p>
      </div>
      <ul className=" list-none py-5 relative mb-10">
      {experiences.map((exper, index) => (
          <li key={index} className="flex gap-9">
            <div className={`${style.icon1} ${exper.color}`}>
              <i className="fa-solid fa-pen text-2xl font-extrabold mt-1"></i>
            </div>
            <div className={style.content}>
              <h2 className="text-xl font-medium mb-6">
                <span className="text-2xl mr-2">{exper.title}</span>
                <span className="opacity-40">{exper.duration}</span>
              </h2>
              <p className="mb-4 opacity-70">{exper.description}</p>
            </div>
          </li>
        ))}
        <li className='className="flex gap-9 '>
        <div className={`${style.icon1 } ${style.iconlast } `}>
              
            </div>
        </li>
        
      </ul>
    </div>
  )
}
