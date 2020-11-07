import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Divider, makeStyles } from '@material-ui/core';
import { graphql } from 'gatsby';

import { DetailsCard } from '../../components/DetailsCard';
import { Navbar } from '../../components/Navbar';
import { ResumeList } from '../../components/ResumeList';
import { SectionTitle } from '../../components/SectionTitle';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { displayCurrentIfCurrentDate, formatDate } from '../../utils/date';
import { ResumePageData } from '../../views/resume-page/types';

const portfolioPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(8, 2, 0, 2),
    },
  },
  aside: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'sticky',
      top: theme.spacing(8),
      height: 668,
      width: 280,
      marginRight: theme.spacing(4),
    },
  },
  main: {
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    margin: theme.spacing(0, 0, 7, 0),

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 7, 3),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      boxShadow: portfolioPageItemShadow,
    },
  },
  navbar: {
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
    },
  },
  projectsContainer: {
    borderRadius: 16,
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
  },
  title: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 2),
    },
  },
  divider: {
    height: 16,
    width: 2,
    backgroundColor: theme.palette.divider,
  },
  project: {
    marginBottom: theme.spacing(5),
  },
}));

const ResumePage: FC<{ data: ResumePageData }> = ({ data }) => {
  const resumeData = data.resumePage.frontmatter;
  const classes = useStyles();
  const developerProfile = useDeveloperProfile();
  const { componentType, isDesktop, isMobile } = useComponentType();
  const formatLabelText = (dateStart: string, dateFinish: string) => {
    return `${formatDate(dateStart, 'month')} - ${displayCurrentIfCurrentDate(dateFinish, 'month')}`;
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>{resumeData.resumePageTitle}</title>
        <meta name="description" content={resumeData.resumePageDescription} />
        <meta property="og:title" content={resumeData.resumePageTitle} />
        <meta property="og:description" content={resumeData.resumePageDescription} />
        <meta property="og:image" content={resumeData.resumePageImage.publicURL} />
      </Helmet>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type={componentType} />
        </Box>
      )}
      <Box className={classes.main}>
        <Navbar
          className={classes.navbar}
          type={componentType}
          fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
          position={developerProfile.position}
          image={developerProfile.avatar.publicURL}
          resumeLink={developerProfile.cv}
        />
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>Work Experience</SectionTitle>
            <Box className={classes.project}>
              {resumeData.workExperience.map((item) => (
                <Box key={`${item.companyName}-${item.jobTitle}`}>
                  <Divider className={classes.divider} orientation="vertical" />
                  <ResumeList
                    isMobile={isMobile}
                    labelText={formatLabelText(item.startJobDate, item.finishJobDate)}
                    headerText={item.jobTitle}
                    title={item.companyName}
                    description={item.jobDescription}
                  />
                  <Divider className={classes.divider} orientation="vertical" />
                </Box>
              ))}
            </Box>
            <SectionTitle className={classes.title}>Education</SectionTitle>
            {resumeData.education.map((item) => (
              <Box key={`${item.schoolName}-${item.educationDescription}`}>
                <Divider className={classes.divider} orientation="vertical" />
                <ResumeList
                  isMobile={isMobile}
                  labelText={formatLabelText(item.startSchoolDate, item.finishSchoolDate)}
                  headerText={item.course}
                  title={item.schoolName}
                  description={item.educationDescription}
                />
                <Divider className={classes.divider} orientation="vertical" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ResumePage;

export const resumePageQuery = graphql`
  {
    resumePage: markdownRemark(fileAbsolutePath: { regex: "/resume/index-1.md/" }) {
      frontmatter {
        resumePageTitle
        resumePageDescription
        resumePageImage {
          publicURL
        }
        workExperience {
          startJobDate
          finishJobDate
          jobTitle
          companyName
          jobDescription
        }
        education {
          startSchoolDate
          finishSchoolDate
          schoolName
          course
          educationDescription
        }
      }
    }
  }
`;
