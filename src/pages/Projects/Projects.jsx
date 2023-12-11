import { Helmet } from "react-helmet";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Billal Hossain | Projects</title>
      </Helmet>
      <PageHeaderContent title="Projects"></PageHeaderContent>
    </div>
  )
}

export default Projects