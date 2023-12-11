import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <PageHeaderContent title="Contact"></PageHeaderContent>

      <Animate
      play
      delay={0.3}
      duration={1}
      start={{
        transform:'translateX(-200px)'
      }}
      end={{
        transform:'translateX(0px)'
      }}
      >
      <h3 className="relative uppercase border-b-2 border-[#38BDF8] inline-block px-2 text-white m-5 after:content-[''] after:absolute after:bg-[#38BDF8] after:h-1 after:w-[3px] after:right-0 after:bottom-0         before:content-[''] before:absolute before:bg-[#38BDF8] before:h-1 before:w-[3px] before:left-0 before:bottom-0 text-[20px]">Let's Talk</h3>
      </Animate>

      {/* Contact Form  */}
      <Animate
      play
      delay={0.3}
      duration={1}
      start={{
        transform:'translateX(200px)'
      }}
      end={{
        transform:'translateX(0px)'
      }}
      >
      <form className="px-5" action="">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">

        <div>
          <label className="block mb-1 text-[#38BDF8]" htmlFor="name">Name</label>
          <input className="border-2 border-[#38BDF8] outline-none px-2 py-1 bg-gray-800 text-[#38BDF8] w-full" type="text" />
        </div>

        <div>
          <label className="block mb-1 text-[#38BDF8]" htmlFor="name">Name</label>
          <input className="border-2 border-[#38BDF8] outline-none px-2 py-1 bg-gray-800 text-[#38BDF8] w-full" type="text" />
        </div>
 
        <div>
          <label className="block mb-1 text-[#38BDF8]" htmlFor="name">Message</label>
          <textarea className="border-2 border-[#38BDF8] outline-none px-2 py-1 bg-gray-800 text-[#38BDF8] w-full"  name="" id="" cols="5" rows="5"></textarea>
        </div>

        </div>
        <button className="border-2 border-[#38BDF8] px-5 py-2 mt-5 text-[#38BDF8] hover:bg-[#2d657c] hover:text-white">Submit</button>
      </form>
      </Animate>
    </div>
  )
}

export default Contact