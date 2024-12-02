

export default function About() {
  return (
    <div className="md:ml-72  pt-20 ">
      <div className=" flex flex-col justify-center text-left  ">
      <p className="tracking-[5px] text-[10px] font-medium mb-4 text-neutral-400">About Us</p>
      <p className="tracking-[2px] leading-7 mb-8  text-lg font-semibold font-serif">WHO AM I?</p>
      <p className=" mb-7 text-md opacity-70 leading-6  "><span className="  font-bold">Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
      <p className="opacity-70 text-md leading-6 mb-6">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
     </div>
     <div className=" cards grid grid-cols-1 md:grid-cols-4 gap-6">
       <div className="first text-left    border-b-2 p-6 mb-20 border-b-blue-500" style={{boxShadow:'0 0 56px -8px #0000002b'}}>
        <i className="fa-regular fa-lightbulb text-blue-500 font-bold text-4xl mt-5"></i>
        <h3 className="my-5">Graphic Design</h3>
       </div>
       <div className="first text-left   border-b-2 p-6 mb-20 border-b-red-500" style={{boxShadow:'0 0 56px -8px #0000002b'}}>
        <i className="fa-solid fa-earth-americas text-red-500 font-bold text-4xl mt-5"></i>
        <h3 className="my-5">Web Design</h3>
       </div>
       <div className="first text-left border-b-2 p-6 mb-20 border-b-amber-300" style={{boxShadow:'0 0 56px -8px #0000002b'}}>
        <i className="fa-solid fa-database text-amber-300 font-bold text-4xl mt-5"></i>
        <h3 className="my-5">Software</h3>
       </div>
       <div className="first text-left  border-b-2 p-6 mb-20 border-b-fuchsia-700" style={{boxShadow:'0 0 56px -8px #0000002b'}}>
        <i className="fa-solid fa-mobile-screen-button text-fuchsia-700 font-bold text-4xl mt-5"></i>
        <h3 className="my-5">Application</h3>
       </div>
     </div>
    </div>
  )
}
