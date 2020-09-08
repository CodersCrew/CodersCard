export type ResumePageData = {
  resumePage: {
    frontmatter: {
      resumePageTitle: string;
      workExperience: {
        startJobDate: string;
        finishJobDate: string;
        jobTitle: string;
        companyName: string;
        jobDescription: string;
      }[];
      education: {
        startSchoolDate: string;
        finishSchoolDate: string;
        schoolName: string;
        course: string;
        educationDescription: string;
      }[];
    };
  };
};
