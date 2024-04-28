import bl from "@/app/components/assets/images/bl.png";
import deep from "@/app/components/assets/images/deep.png";
import Artificial from "@/app/components/assets/images/Artificial.png";
import Learner from "@/app//components/assets/images/Leaner.png";
import ai from "@/app/components/assets/images/ai.png";
import specialized from "@/app/components/assets/images/specialized.png";
export const programData = [
  {
    slug:"WMD",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    imag: bl,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4

      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5
      },
    ],
  },
  { 
    slug:"ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    imag: ai,
    quarter: [
      {
        header: "IV",
        description:
          "AIss-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "V",
        description: "Ai-361: Deep Learning and MLOps",
        number: 5
      },
    ],
  },
  {
    slug:"CNC",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    imag: deep,
    quarter: [
      {
        header: "IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4
      },
      {
        header: "V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraformz",
        number: 5
      },
    ],
  },
  {
    slug:"IoT",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    imag: specialized,
    quarter: [
      {
        header: "IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4
      },
      {
        header: "V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5
      },
    ],
  },
  { 
    slug:"GBS",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    imag: Learner,
    quarter: [
      {
        header: "IV",
        description: "Bio-351: Python for Biologists",
        number: 4
      },
      {
        header: "V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5
      },
    ],
  },
  {
    slug:"NPAS",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    imag: Artificial,
    quarter: [
      {
        header: "IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4
      },
      {
        header: "V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5
      },
    ],
  },
];
