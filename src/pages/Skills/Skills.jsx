import PageHeaderContent from "../../components/PageHeaderContent";
import { Line } from 'rc-progress';
import "./Skills.css";
import { Animate } from "react-simple-animate";
import { Helmet } from "react-helmet";

const skills = [
  {
    label:'Front End',
    data:[
      {
        skillName:'HTML',
        percentage:'90'
      },
      {
        skillName:'CSS',
        percentage:'90'
      },
      {
        skillName:'React',
        percentage:'90'
      },
      {
        skillName:'Redux',
        percentage:'60'
      },
      {
        skillName:'Nextjs',
        percentage:'50'
      },
    ]
  },

  {
    label:'Back End',
    data:[
      {
        skillName:'Nodejs',
        percentage:'40'
      },
      {
        skillName:'Expressjs',
        percentage:'70'
      },
      {
        skillName:'Mongodb',
        percentage:'60'
      },
      {
        skillName:'Mongoose',
        percentage:'60'
      },
    ]
  },

  {
    label:'Tools',
    data:[
      {
        skillName:'Git & Gihub',
        percentage:'50'
      },
      {
        skillName:'VSCODE',
        percentage:'70'
      },
      {
        skillName:'Netlify',
        percentage:'60'
      },
      {
        skillName:'Figma',
        percentage:'40'
      },
    ]
  }
]

const Skills = () => {
  return (
    <div className="bg-gray-800 pb-16">
      <Helmet>
        <title>Billal Hossain | Skills</title>
      </Helmet>
      <PageHeaderContent title="Skills"></PageHeaderContent>

      <Animate 
      play
      delay={0.1}
      duration={2}
      start={{
        transform:'translateX(-1500px)'
      }}

      end={{
        transform:'translateX(0px)'
      }}
      >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-gray-300 m-5">
         {
          skills.map((skill, key) =>(
            <div>
              <h3 className="text-[20px] text-[#38BDF8] font-bold mb-5 skill-label border-b-[1px] inline-block px-1 border-[#38BDF8]">{skill.label}</h3>

                <div className="space-y-5">
                 {
                   skill.data.map((item, index)=>(
                     <div>
                      <p className="mb-2" key={index}>{item.skillName}</p>
                      <Line percent={item.percentage} strokeWidth={2} trailWidth={2} strokeColor="#38BDF8" />
                     </div>
                    ))
                 }
                </div>

            </div>
          ))
         }
      </div>
      </Animate>
    </div>
  )
}

export default Skills