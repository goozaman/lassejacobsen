import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../prismicio";
import { Page } from "../components/Page";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading } from "../components/Heading";
import { Bounded } from "../components/Bounded";
import { ProjectPreview } from "../components/ProjectPreview";
import { ContactForm } from "../components/ContactForm";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  //const client = createClient({ previewData });
  //const articles = await client.getAllByType("article");
  //const about = await client.getSingle("about");
  //const home = await client.getSingle("home");
  //const projects = await client.getAllByType("project", {
   // orderings: {
     // field: "my.project.endDate",
   //   direction: "desc",
  //  },
  //});
  //const contact = await client.getSingle("contact");

  return { props: {},
  //  props: { articles, about, home, projects, contact },
  };
};

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: React.FC<HomePageProps> = ({}) => {
  const projects = [{
    featuredText:"For my thesis, I collaborated with Hottinger Brüel & Kjær to develop a beamforming microphone array. Using Altium, I designed both the schematic and PCB, and conducted thorough electrical and acoustic testing. HBK is a prominent provider of integrated measurement and testing solutions across multiple industries, including aerospace, automotive, and energy.",
    title:"M.Sc. Thesis",
    image:"m.png",
    id:"0",
  },{
    featuredText:"As part of my project work at DTU, I collaborated with Harman Automotive and B&O to implement and measure the effectiveness of a tactile feedback system that enhances the alertness and immersive experience for car drivers. The system utilizes a vibrational transducer mounted on the car seat to simulate the engine vibration in a combustion engine car. Harman Automotive is a leading company that specializes in designing and developing audio and infotainment solutions for the automotive industry.",
    title:"Tactical Feedback - Project",
    image:"harmanpic.png",
    id:"1",
  },{
    featuredText:"As a member of the advisory board for the newly founded company DockMe, I provide guidance and strategic advice to the management team on a range of business areas such as market analysis, product development, fundraising, and business strategy. Additionally, I offer networking opportunities and introduce potential investors or customers to the startup. My focus is to help the startup navigate challenges and opportunities and to provide valuable insights to support its growth and success. I have helped DockMe receive funding of approximately 100.000 DKK, as well as the recruitment of two new founders. DockMe is making an IoT solution for digitalizing harbors, following the United Nation goal Sustainable cities and communities (SDG 11). ",
    title:"DockMe - Advisory Board",
    image:"dockme.png",
    id:"2",
  }
  ]
  const education = [{
    featuredText:"DTU has equipped me with a robust understanding of the theoretical concepts of electronics engineering and practical experience in designing, implementing, and testing electronic systems. As a result, I have acquired diverse skills and knowledge in numerous areas, including digital and analog circuits, communication systems, signal processing, control systems, and embedded systems. Moreover, I have gained experience in acoustics and entrepreneurship by working as a teaching assistant for the X-Tech Entrepreneurship course. DTU is a leading international institution in the field of engineering, science, and technology. With a strong focus on innovation and entrepreneurship, DTU aims to create solutions that can benefit society and contribute to the sustainable development of the world.",
    title:"DTU M.Sc. Electronics Engineering",
    image:"dtu.png",
    id:"3",
  },{
    featuredText:"IDA Future STEM Leaders is a program initiated by IDA that seeks to inspire and support the next generation of leaders in science, technology, engineering, and mathematics (STEM) fields. The program aims to identify university students who demonstrate exceptional potential in STEM and provide them with opportunities for personal and academic growth. The program includes a range of activities such as mentorship, networking events, STEM workshops, and leadership training sessions. I was chosen as 1 of 60 students to join the course.",
    title:"IDA Future STEM Leaders ",
    image:"idastem.jpg",
    link:"diplom.pdf",
    linktext:"View my diploma here.",
    id:"4",
  }
  ]
  return (
    <Page>
      <Hero />

      <div className="min-h-[75vh]">
      <div style={{marginTop:40}}/>
        <Bounded as="section" size="widest">
          <Heading as="h2" className="mb-5">
            Projects
          </Heading>
          <p className="mb-10">
            Here you can explore some of the innovative projects I&apos;ve worked with:
          </p>

          <div className="flex flex-col flex-wrap justify-between gap-x-2 gap-y-6 md:flex-row">
            {projects.map((project) => (
              <ProjectPreview key={project.id} project={project} />
            ))}
          </div>
          <div style={{marginTop:40}}/>
         <Heading as="h2" className="mb-5">
            Education
          </Heading>
          <p className="mb-10">
            Here you can read about my educational background and certifications:
          </p>
          <div className="flex flex-col flex-wrap justify-between gap-x-2 gap-y-6 md:flex-row">
            {education.map((project) => (
              <ProjectPreview key={project.id} project={project} />
            ))}
          </div>
        </Bounded>
      </div>

      <div className="">
        <Bounded
          as="section"
          size="widest"
          noYPadding
          className="px-4"
          innerClassName="h-full flex md:flex-row md:gap-0 gap-10 flex-col-reverse md:flex-row md:justify-between"
        >
        {/*
          <div className="flex w-full items-end md:max-h-full md:w-1/2">
          </div>
          <div className="flex w-full flex-col py-3 align-baseline md:w-1/3 md:pt-24 ">
            <Heading as="h2" size="3xl" className="mb-8">
              {"Contact"} 
            </Heading>  

            <ContactForm />
          </div>
          */}
        </Bounded>
      </div>
    </Page>
  );
};

const Hero: React.FC = ({  }) => {
  return (
    <Bounded
      as="section"
      size="widest"
      noYPadding
      className="px-4 md:h-[calc(100vh-60px)]"
      innerClassName="h-full flex md:flex-row md:gap-0 gap-10 flex-col"
    >
      <div className="flex w-full flex-col pt-3 align-baseline md:w-1/2 md:pt-36 md:pr-12">
        <Heading as="h2">
          {"Hi, I'm Lasse, a newly graduated M.Sc. electronic engineer from DTU, with an interest in electronics, acoustics, and entrepreneurship."}
        </Heading>

        <div className="mt-6" style={{whiteSpace:"break-spaces"}}>
         {`With a strong foundation in electronics and a passion for innovation, I am open for exploring new ideas and concepts. I have a keen eye for identifying gaps in the market and developing solutions that are both practical and sustainable.

I am a quick learner and an excellent problem-solver, which makes me well-equipped to navigate the challenges that come within engineering. I am eager to collaborate with others, build a strong team, and make my vision a reality.

If you're looking for a young and innovative electronic engineer with an entrepreneurial spirit, look no further than me. With my passion for electronics and his drive to succeed, I am motivated to create the tech solutions of tomorrow!
`}
        </div>
      </div>

      <div className="flex w-full items-end md:max-h-full md:w-1/2 md:pl-12" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img alt={'hero-image'}
            className="max-h-full max-w-full object-contain"
            src={"hjemmesidebillede.png"}
        />
      </div>

      <div className="absolute bottom-0 left-[calc(50%-6px)] text-2xl">↓</div>
    </Bounded>
  );
};

export default HomePage;
