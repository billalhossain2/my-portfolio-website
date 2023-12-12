import { FaExclamation } from "react-icons/fa";
const PageHeaderContent = ({title}) => {
  return (
    <div className='border-b-2 border-[#38bff818] text-3xl font-bold text-[#38BDF8] p-5 flex justify-between items-center'>
        <h1>{title}</h1>
        <p><FaExclamation className="bg-[#38BDF8] text-black rounded-full p-2 text-4xl"/></p>
    </div>
  )
}

export default PageHeaderContent