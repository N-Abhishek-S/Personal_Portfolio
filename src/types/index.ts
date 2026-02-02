/* src/types/index.ts */

export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

/* -------------------- Core Data Types -------------------- */

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>; // requires { title, icon }

export type TProject = {
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TContactFormField = {
  span: string;
  placeholder: string;
  required: boolean;
  type: "text" | "email" | "textarea";
};

/* -------------------- UI / Config Types -------------------- */

export type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    siteUrl: string;
    description: string;
    keywords: string[];
  };

  hero: {
    p: string;
    h2: string;
    subText?: string;

    location?: string;
    availability?: string;

    links: {
      email: string;
      linkedin: string;
      github: string;
    };
  };

  about: {
    p: string;
    h2: string;
    subtitle: string;

    content: string;

    education: {
      degree: string;
      year: string;
      university: string;
      college: string;
      graduation: string;
      performance?: string;
    };

    strengths: string[];
    learning: string[];
  };

  experience: {
    p: string;
    h2: string;
    subtitle: string;

    timeline: Array<
      {
        type?: "competition" | "project" | "education";
      } & TExperience
    >;
  };

  projects: {
    p: string;
    h2: string;
    subtitle: string;

    content: string;

    items: TProject[];
  };

  contact: {
    p: string;
    h2: string;
    subtitle: string;

    content: string;

    form: {
      name: TContactFormField;
      email: TContactFormField;
      message: TContactFormField;
    };
  };

  feedbacks: {
    p: string;
    h2: string;
    subtitle: string;
  };

  tech: {
    p: string;
    h2: string;
    subtitle: string;
  };
};

/* -------------------- Static Site Types -------------------- */

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
