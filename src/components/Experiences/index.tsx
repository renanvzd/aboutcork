import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiences" description="" />

      <section>
        <ExperienceItem
          year="2021"
          title="Works and Projects"
          description="Lorem ipsum"
        />
        <ExperienceItem
          year="2021"
          title="Works and Projects"
          description="Lorem ipsum"
        />
        <ExperienceItem
          year="2021"
          title="Works and Projects"
          description="Lorem ipsum"
        />
        <ExperienceItem
          year="2021"
          title="Works and Projects"
          description="Lorem ipsum"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
