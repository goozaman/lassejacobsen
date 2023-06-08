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
    featuredText:"For my thesis, I collaborated with Hottinger Brüel & Kjær to develop a beamforming microphone array, utilizing MEMS microphones and the XMOS advanced DSP processing platform. Using Altium, I designed both the schematic and PCB, and conducted thorough electrical and acoustic testing. My thesis also contained acoustic simulations, simulating a microphone beamforming array in different conditions. HBK is a prominent provider of integrated measurement and testing solutions across multiple industries, including aerospace, automotive, and energy.",
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
  ,{
    featuredText:"I have made a small startup, utilizing my interest in acoustics + electronics, and knowledge within the entrepreneurship world. I recieved a startup grant from the danish fund of entreprenurship, to begin developing the first prototype. The In-ear monitors are made using in house designed acoustical solutions, as well as parts from danish companies, such as Estron and Sonion. Technologies found in hearing aids are also used. Nautilus Acoustics is working on developing in-ear monitors for professional musicians as well as audiophiles who are interested in high-quality sound. Everything is produced and handmade in Denmark with a focus on sound quality. I primarily sell to audiophiles, and acousticians and musicians. ",
    title:"Nautilus Acoustics",
    image:"Nautilus_Acoustics_Logo_Version_2.png",
    id:"8",
  }
  ]
    const work = [{
    featuredText:"I currently work as a Research Engineer in the Performance & Emission Group at MAN Energy Solutions. MAN are the global leaders in developing propulsion engines and solutions for merchant vessels. My role involves planning and coordinating measurement assignments, acquiring and calibrating measurement equipment, executing on-site measurements, and evaluating and reporting the results. I am also developing cutting-edge measurement technology solutions to optimize our work processes. I travel for approximately 120 days per year, primarily to South Korea and Japan. ",
    title:"MAN ES - Research and Test Engineer R&D",
    image:"man.png",
    id:"9",
  },{
    featuredText:"I've worked for two years as a student assistant at Oticon in the Acoustics and Simulations group, working both with developing software, primarily a MATLAB GUI that simulated different hearing losses, as well as hardware-related tests following the given ISO standards for hearing aids. Oticon is a leading hearing aid company that uses cutting-edge technology to create personalized solutions for individuals with hearing loss. ",
    title:"Oticon - Acoustics & Simulations R&D",
    image:"oticon.png",
    id:"3",
  },{
    featuredText:"I have functioned as a teaching assistant in the course X-Tech Entrepreneurship. The DTU X-Tech Entrepreneurship course is a unique opportunity for students to learn the fundamentals of starting and growing a tech startup. Taught by experienced entrepreneurs and industry experts, the course covers topics such as ideation, market validation, business planning, funding, and more. Through hands-on exercises and real-world case studies, students will gain the knowledge and skills necessary to launch their own successful tech ventures.",
    title:"Teaching Assistant - DTU X-Tech Entrepreneurship",
    image:"xtech.png",
    link:"anbefaling.pdf",
    linktext:"View my work recommendation and reference here.",
    id:"4",
  }
  ,{
    featuredText:"I had a six months internship at Kamstrup, followed by a job as a student assistant in the same department. During my internship, I developed a PCB for electricity meter testing. Kamstrup is a global leader in intelligent energy and water metering solutions, providing accurate and reliable data for utility companies. Their products are designed to help reduce energy and water waste, lower costs, and improve sustainability. Kamstrup also offers advanced analytics and software solutions to support efficient energy and water management.",
    title:"Kamstrup - Internship + Student Assistant Electricity Meters Hardware R&D",
    image:"kamstrup.png",
    id:"5",
  }
  ]
  const education = [{
    featuredText:"DTU has equipped me with a robust understanding of the theoretical concepts of electronics engineering and practical experience in designing, implementing, and testing electronic systems. As a result, I have acquired diverse skills and knowledge in numerous areas, including digital and analog circuits, communication systems, signal processing, control systems, and embedded systems. Moreover, I have gained experience in acoustics and entrepreneurship by working as a teaching assistant for the X-Tech Entrepreneurship course. DTU is a leading international institution in the field of engineering, science, and technology. With a strong focus on innovation and entrepreneurship, DTU aims to create solutions that can benefit society and contribute to the sustainable development of the world.",
    title:"DTU M.Sc. Electronics Engineering",
    image:"dtu.png",
    id:"6",
  },{
    featuredText:"IDA Future STEM Leaders is a program initiated by IDA that seeks to inspire and support the next generation of leaders in science, technology, engineering, and mathematics (STEM) fields. The program aims to identify university students who demonstrate exceptional potential in STEM and provide them with opportunities for personal and academic growth. The program includes a range of activities such as mentorship, networking events, STEM workshops, and leadership training sessions. I was chosen as 1 of 60 students to join the course.",
    title:"IDA Future STEM Leaders ",
    image:"idastem.jpg",
    link:"diplom.pdf",
    linktext:"View my diploma here.",
    id:"7",
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
            Work
          </Heading>
          <p className="mb-10">
            Here you can read about my work experience:
          </p>
          <div className="flex flex-col flex-wrap justify-between gap-x-2 gap-y-6 md:flex-row">
            {work.map((project) => (
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

If you're looking for a young and innovative electronic engineer with an entrepreneurial spirit, look no further than me. With my passion for electronics and my drive to succeed, I am motivated to create the tech solutions of tomorrow!
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
