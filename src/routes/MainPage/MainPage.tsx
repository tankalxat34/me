import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import styles from "./MainPage.module.sass";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";

const MainPage = () => {
  return (
    <>
      <Section halfHeight className={styles.section1}>
        <Image
          src="https://avatars.githubusercontent.com/u/89201004?v=4&s=200"
          alt="avatare"
          width={200}
          round
        />
        <h4>Hi!✌ I'm Alexander</h4>
        <h2>Frontend developer and Bachelor's degree Economist</h2>

        <Link to="contacts">
          <Button dark>Contacts</Button>
        </Link>
        <Button>
          <FiDownload />
          Download CV
        </Button>
      </Section>

      <Section fullHeight>
        <h2>Education</h2>
      </Section>
    </>
  );
};

export default MainPage;
