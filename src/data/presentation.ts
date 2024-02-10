type Social = {
  label: string;
  link: string;
};

type Presentation = {
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  title: "Hi, welcome to Thoughts👋",
  description:
    "a site on the internet where a stranger shares his philosophical and psychological thoughts. I was inspired by the meditations of Marcus Aurelius to create this!",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/apolo-dev",
    },
    {
      label: "Github",
      link: "https://github.com/Apolo-X1"
    }
  ],
};

export default presentation;
