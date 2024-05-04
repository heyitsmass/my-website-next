const groups = ["languages", "frameworks", "tools"] as const;

const me = {
  about: {
    name: "Brandon",
    age: {
      origin: 1999,
    },
    philosophy:
      "Everybody has the capacity to learn. If it can be thought of, it can be done. \
    If it doesn't exist, make it. Simplicity over complexity. \
    Plan for the worst, secure for the best. Destructure the problem. \
    Every operation has an origin. Optimization requires understanding. \
    Time is the most valuable resource.",
    description:
      "Hello, I'm Brandon, a 24-year-old software developer based in Las Vegas, Nevada. \
      Armed with a B.S. in computer science, my journey into technology started with dismantling electronics, \
      sparking a lifelong fascination with understanding their intricacies. \
      This early curiosity ignited my passion for electronics, and I've since channeled that zeal into creating \
      unique and innovative embedded software and hardware designs, spanning schematic design, PCB development, \
      and IoT integration.\
      \
      My expertise extends across the tech spectrum, from embedded systems to web apps, \
      databases, servers, and beyond. Currently, I specialize in Full Stack development, particularly in the MERN stack. \
      With years of experience crafting type-safe, modular, portable, secure, and modern web interfaces, \
      I'm committed to delivering high-quality, original code. \
      \
      If there's ever a gap in my knowledge, give me 24 hours to bridge it. \
      Constantly pushing boundaries with a hacker mindset, I meticulously examine every edge case, security flaw, \
      and loophole to ensure the development of compliant, maintained, and efficient software.\
      \
      \"HeyItsMass\" - As a physics enthusiast, I've always been captivated by the concept of mass. \
      The distinction between weight and mass sparks debates in conversations, and describing it purely can be challenging. \
      Without a complete understanding, mass is essentially an enigma, seamlessly intertwined with gravity. \
      When condensed tightly enough, mass transforms into one of the most powerful forces in existence—a black hole. \
      This cosmic entity endlessly consumes mass, perpetuating a constant cycle of creation and destruction.",
    interests: [
      "Programming",
      "Mathematics",
      "Physics",
      "Philosophy",
      "Psychology",
      "Music",
      "Art",
      "Gaming",
    ],
  },
  skills: {
    languages: [
      {
        name: "TypeScript",
        icon: "/typescript.svg",
        description:
          "A superset of JavaScript that compiles to plain JavaScript.",
        proficiency: 4,
        startYear: 2022,
      },
      {
        name: "JavaScript",
        icon: "/javascript.svg",
        description:
          "A programming language that conforms to the ECMAScript specification.",
        proficiency: 4,
        startYear: 2022,
      },
      {
        name: "Python",
        icon: "/python.svg",
        description:
          "An interpreted, high-level and general-purpose programming language.",
        proficiency: 3.5,
        startYear: 2019,
      },
      {
        name: "C++",
        icon: "/cplusplus.svg",
        description:
          "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
        proficiency: 2.5,
        startYear: 2018,
      },
      {
        name: "Java",
        icon: "/java.svg",
        description:
          "A general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.",
        proficiency: 2.5,
        startYear: 2023,
      },
      {
        name: "C",
        icon: "/c.svg",
        description:
          "A general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
        proficiency: 2.5,
        startYear: 2018,
      },
      {
        name: "CSS",
        icon: "/css.svg",
        description:
          "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        proficiency: 3,
        startYear: 2020,
      },
      {
        name: "HTML",
        icon: "/html.svg",
        description:
          "The standard markup language for documents designed to be displayed in a web browser.",
        proficiency: 3,
        startYear: 2020,
      },
    ],
    frameworks: [
      {
        name: "React",
        icon: "/react.svg",
        description:
          "A JavaScript library for building user interfaces.",
        proficiency: 3.5,
        startYear: 2021,
      },
      {
        name: "Next.js",
        icon: "/nextjs.svg",
        description: "A React framework for production.",
        proficiency: 3.5,
        startYear: 2021,
      },
      {
        name: "Node.js",
        icon: "/nodejs.svg",
        description:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        proficiency: 4,
        startYear: 2021,
      },
      {
        name: "Vite",
        icon: "/vite.svg",
        description:
          "A fast build tool that significantly improves the frontend development experience.",
        proficiency: 4,
        startYear: 2023,
      },
      {
        name: "Express",
        icon: "/express.svg",
        description:
          "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        proficiency: 4,
        startYear: 2022,
      },
      {
        name: "Fastify",
        icon: "/fastify.svg",
        description:
          "A fast and low overhead web framework, for Node.js.",
        proficiency: 2,
        startYear: 2024,
      },
      {
        name: "Bootstrap",
        icon: "/bootstrap.svg",
        description:
          "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        proficiency: 3.5,
        startYear: 2022,
      },
      {
        name: "Tailwind",
        icon: "/tailwind.svg",
        description:
          "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
        proficiency: 4,
        startYear: 2022,
      },
      {
        name: "Material UI",
        icon: "/materialui.svg",
        description:
          "A React UI framework that follows Google's Material Design guidelines.",
        proficiency: 2,
        startYear: 2023,
      },
      {
        name: "NestJS",
        icon: "/nestjs.svg",
        description:
          "A framework for building efficient, scalable Node.js web applications.",
        proficiency: 1.5,
        startYear: 2024,
      },
      {
        name: "Flask",
        icon: "/flask.svg",
        description: "A micro web framework written in Python.",
        proficiency: 2.5,
        startYear: 2022,
      },
      {
        name: "Pytest",
        icon: "/pytest.svg",
        description: "A Python testing framework.",
        proficiency: 3,
        startYear: 2022,
      },
      {
        name: "Jest",
        icon: "/jest.svg",
        description:
          "A JavaScript testing framework designed to ensure correctness of any JavaScript codebase.",
        proficiency: 3,
        startYear: 2023,
      },
      {
        name: "Vitest",
        icon: "/vitest.svg",
        description: "A Vite testing framework.",
        proficiency: 2.5,
        startYear: 2023,
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "/git.svg",
        description:
          "A distributed version-control system for tracking changes in source code during software development.",
        proficiency: 4,
        startYear: 2018,
      },
      {
        name: "GitHub",
        icon: "/github.svg",
        description:
          "A provider of Internet hosting for software development and version control using Git.",
        proficiency: 4,
        startYear: 2018,
      },
      {
        name: "GitLab",
        icon: "/gitlab.svg",
        description:
          "A web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and CI/CD pipeline features.",
        proficiency: 2,
        startYear: 2022,
      },
      {
        name: "GitKraken",
        icon: "/gitkraken.svg",
        description:
          "A Git GUI client that allows you to visualize the history of your code.",
        proficiency: 2,
        startYear: 2023,
      },
      {
        name: "Docker",
        icon: "/docker.svg",
        description:
          "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
        proficiency: 3,
        startYear: 2022,
      },
      {
        name: "MongoDB",
        icon: "/mongodb.svg",
        description:
          "A source-available cross-platform document-oriented database program.",
        proficiency: 4,
        startYear: 2021,
      },
      {
        name: "PostgreSQL",
        icon: "/postgresql.svg",
        description:
          "A free and open-source relational database management system emphasizing extensibility and SQL compliance.",
        proficiency: 1.5,
        startYear: 2023,
      },
      {
        name: "Redis",
        icon: "/redis.svg",
        description:
          "An in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability.",
        proficiency: 1.5,
        startYear: 2023,
      },
      {
        name: "Nginx",
        icon: "/nginx.svg",
        description:
          "An open-source reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP protocols, as well as a load balancer, HTTP cache, and a web server.",
        proficiency: 3,
        startYear: 2023,
      },
      {
        name: "Envoy",
        icon: "/envoy.svg",
        description:
          "An open source edge and service proxy, designed for cloud-native applications.",
        proficiency: 2.5,
        startYear: 2024,
      },
      {
        name: "Windows",
        icon: "/windows.svg",
        description:
          "A series of operating systems developed by Microsoft.",
        proficiency: 4,
        startYear: 2009,
      },
      {
        name: "Linux",
        icon: "/linux.svg",
        description:
          "A family of open-source Unix-like operating systems based on the Linux kernel.",
        proficiency: 4,
        startYear: 2016,
      },
      {
        name: "MacOS",
        icon: "/macos.svg",
        description:
          "A series of proprietary graphical operating systems developed and marketed by Apple.",
        proficiency: 3.5,
        startYear: 2018,
      },
      {
        name: "Spline",
        icon: "/spline.svg",
        description: "A design tool for 3D web experiences.",
        proficiency: 2,
        startYear: 2022,
      },
      {
        name: "Figma",
        icon: "/figma.svg",
        description:
          "A vector graphics editor and prototyping tool which is primarily web-based.",
        proficiency: 2,
        startYear: 2022,
      },
      {
        name: "CockroachDB",
        icon: "/cockroachdb.svg",
        description:
          "A distributed SQL database built on a transactional and strongly-consistent key-value store.",
        proficiency: 1.5,
        startYear: 2023,
      },
      {
        name: "Heroku",
        icon: "/heroku.svg",
        description:
          "A cloud platform as a service supporting several programming languages.",
        proficiency: 1.5,
        startYear: 2022,
      },
      {
        name: "Vercel",
        icon: "/vercel.svg",
        description:
          "A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.",
        proficiency: 3.5,
        startYear: 2022,
      },
      {
        name: "AWS",
        icon: "/aws.svg",
        description:
          "A subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        proficiency: 2,
        startYear: 2023,
      },
    ],
  },
} as const;

const sample = me.skills.languages[0] as TSkill;

export type Fields = keyof TSkill<SkillGroup>;

export type Skills = typeof me.skills;
export type SkillGroup = keyof Skills;

export type SkillsInGroup<T extends SkillGroup> =
  `${Skills[T][number]["name"]}`;

export type SortableFields = {
  [key in Fields]: TSkill<SkillGroup>[key] extends number ? key : never;
}[Fields];

type FilterOptions = {
  [key in SkillGroup]: SkillsInGroup<key>[];
};

type TFilter<T extends SkillGroup> = {
  [P in keyof FilterOptions]: SkillsInGroup<P>;
}[T];

export const sortOptions = Object.keys(sample).filter(
  (field) => typeof sample[field as Fields] === "number"
) as SortableFields[];

export const skillGroups = Object.keys(me.skills) as SkillGroup[];

export const filterOptions = skillGroups.reduce((acc, group) => {
  return {
    ...acc,
    [group]: me.skills[group].map((skill) => skill.name),
  };
}, {} as FilterOptions);

export type SkillAttributes<T extends SortableFields> = {
  [P in SortableFields]: Skills[SkillGroup][number][P];
}[T];

export type SortDirection = "ascending" | "descending" | "None";

export type FilterMode = "inclusive" | "exclusive";

export type SkillConfig<TSkillGroup extends SkillGroup = SkillGroup> = {
  skillGroup: TSkillGroup;
  /** Filter options */
  filterBy: {
    /** The
     * {@linkcode FilterMode}
     * @default 'inclusive'
     */
    mode: FilterMode;
    /**
     * The value to filter
     */
    value: TFilter<TSkillGroup> | "All";
  };
  /** Which field to sort by (must resolve to a {@linkcode Number})
   * @default "All"
   */
  sortBy: SortableFields;
  /** The
   * {@linkcode SortDirection}
   * @default "None"
   */
  order: SortDirection;
} & {
  [P in SortableFields]: `${SkillAttributes<P>}` | "All";
};

export type SkillAttributeItems = {
  [key in SortableFields]: SkillConfig[key][];
};

export type TSkillItems = {
  [key in Exclude<
    keyof SkillConfig<SkillGroup>,
    "filterBy"
  >]: SkillConfig<SkillGroup>[key][];
} & {
  filterBy: SkillConfig<SkillGroup>["filterBy"]["value"][];
};

export const FILTER = {
  BY: {
    ALL: "All",
    all: "All",
    NONE: "None",
    none: "None",
  },
} as const;

export type BaseConfig = SkillConfig<"frameworks">;

export const BASE_SKILL_SEARCH_CONFIG = {
  skillGroup: "frameworks",
  filterBy: {
    mode: "inclusive",
    value: FILTER.BY.ALL,
  },
  sortBy: "proficiency",
  order: "None",
  startYear: FILTER.BY.ALL,
  proficiency: FILTER.BY.ALL,
} as BaseConfig;

export function collector<
  T extends SortableFields,
  R extends SkillAttributes<T>
>(field: T, order: SortDirection = "None") {
  const keys = Object.keys(
    (Object.keys(me.skills) as SkillGroup[]).reduce(
      (obj, skill) => {
        me.skills[skill].forEach((v) => {
          obj[v[field]] = true;
        });

        return {
          ...obj,
        };
      },
      {} as Partial<{
        [x: string]: boolean;
      }>
    )
  );

  const sortBy = <T extends string | number = string | number>(
    a: T,
    b: T
  ) =>
    Number(order === "ascending" ? a : b) -
    Number(order === "ascending" ? b : a);

  if (order === "None") {
    return keys as `${R}`[];
  }

  return keys.sort(sortBy) as `${R}`[];
}

export type ConfigOptions = keyof SkillConfig<SkillGroup>;

export type TSkill<TSkillGroup extends SkillGroup = SkillGroup> = {
  name: TFilter<TSkillGroup>;
  icon: string;
  description: string;
  proficiency: number;
  startYear: number;
};

export default me;
