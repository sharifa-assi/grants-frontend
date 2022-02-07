import {
  Box, Flex, Text, Image,
} from '@chakra-ui/react';
import React from 'react';
import Dropdown from '../../../ui/forms/dropdown';
import MultiLineInput from '../../../ui/forms/multiLineInput';
import SingleLineInput from '../../../ui/forms/singleLineInput';
import Tooltip from '../../../ui/tooltip';

function AboutProject({
  projectName,
  setProjectName,
  projectNameError,
  setProjectNameError,

  projectLinks,
  setProjectLinks,

  projectDetails,
  setProjectDetails,
  projectDetailsError,
  setProjectDetailsError,

  projectGoal,
  setProjectGoal,
  projectGoalError,
  setProjectGoalError,

  projectMilestones,
  setProjectMilestones,

  rewardCurrency,
  rewardCurrencyCoin,
  readOnly,
}: {
  projectName: string;
  setProjectName: (projectName: string) => void;
  projectNameError: boolean;
  setProjectNameError: (projectNameError: boolean) => void;

  projectLinks: {
    link: string;
    isError: boolean;
  }[];
  setProjectLinks: (
    projectLinks: {
      link: string;
      isError: boolean;
    }[]
  ) => void;

  projectDetails: string;
  setProjectDetails: (projectDetails: string) => void;
  projectDetailsError: boolean;
  setProjectDetailsError: (projectDetailsError: boolean) => void;

  projectGoal: string;
  setProjectGoal: (projectGoal: string) => void;
  projectGoalError: boolean;
  setProjectGoalError: (projectGoalError: boolean) => void;

  projectMilestones: {
    milestone: string;
    milestoneReward: string;
    milestoneIsError: boolean;
    milestoneRewardIsError: boolean;
  }[];
  setProjectMilestones: (
    projectMilestones: {
      milestone: string;
      milestoneReward: string;
      milestoneIsError: boolean;
      milestoneRewardIsError: boolean;
    }[]
  ) => void;

  rewardCurrency: string;
  rewardCurrencyCoin: string;

  readOnly?: boolean;
}) {
  return (
    <>
      <Text fontWeight="700" fontSize="16px" lineHeight="20px" color="#8850EA">
        Applicant Details
        <Tooltip icon="/ui_icons/tooltip_questionmark_brand.svg" label="team" />
      </Text>

      <Box mt={6} />
      <SingleLineInput
        label="Project Name"
        placeholder="name"
        value={projectName}
        onChange={(e) => {
          if (projectNameError) {
            setProjectNameError(false);
          }
          setProjectName(e.target.value);
        }}
        isError={projectNameError}
        errorText="Required"
        disabled={readOnly}
      />

      {projectLinks.map((project, index) => (
        <>
          <Box mt={7} />
          <SingleLineInput
            label={`Project Link ${index + 1}`}
            placeholder="name"
            value={project.link}
            onChange={(e) => {
              const newProjectLinks = [...projectLinks];

              const newProject = { ...newProjectLinks[index] };
              if (newProject.isError) {
                newProject.isError = false;
              }
              newProject.link = e.target.value;
              newProjectLinks[index] = newProject;

              setProjectLinks(newProjectLinks);
            }}
            isError={project.isError}
            errorText="Required"
            disabled={readOnly}
            inputRightElement={
              index === 0 ? null : (
                <Box
                  onClick={() => {
                    const newProjectLinks = [...projectLinks];
                    newProjectLinks.splice(index, 1);
                    setProjectLinks(newProjectLinks);
                  }}
                  mt="-78px"
                  ml="-32px"
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                >
                  <Image
                    h="16px"
                    w="15px"
                    src="/ui_icons/delete_red.svg"
                    mr="6px"
                  />
                  <Text fontWeight="700" color="#DF5252" lineHeight={0}>
                    Delete
                  </Text>
                </Box>
              )
            }
          />
        </>
      ))}

      { readOnly ? (
        <Box mt={3} />
      ) : (
        <Text
          fontSize="14px"
          color="#8850EA"
          fontWeight="500"
          lineHeight="20px"
          mt={3}
          cursor="pointer"
          onClick={() => {
            setProjectLinks([...projectLinks, { link: '', isError: false }]);
          }}
          w="fit-content"
        >
          <Image
            display="inline-block"
            h={4}
            w={4}
            mr={2}
            mb="-3px"
            src="/ui_icons/plus_circle.svg"
            alt="link"
          />
          Add another project link
        </Text>
      )}

      <Box mt={8} />

      <MultiLineInput
        placeholder="Details about your project - requirements, deliverables, and milestones - as detailed as possible."
        label="Project Details"
        value={projectDetails}
        onChange={(e) => {
          if (projectDetailsError) {
            setProjectDetailsError(false);
          }
          setProjectDetails(e.target.value);
        }}
        isError={projectDetailsError}
        errorText="Required"
        disabled={readOnly}
      />

      <Box mt={8} />
      <MultiLineInput
        placeholder="Write about what's to plan to achieve with this project"
        label="Project Goals"
        maxLength={1000}
        value={projectGoal}
        onChange={(e) => {
          if (projectGoalError) {
            setProjectGoalError(false);
          }
          setProjectGoal(e.target.value);
        }}
        isError={projectGoalError}
        errorText="Required"
        disabled={readOnly}
      />

      <Box mt={4} />
      {projectMilestones.map(
        (
          {
            milestone,
            milestoneReward,
            milestoneIsError,
            milestoneRewardIsError,
          },
          index,
        ) => (
          <>
            <Box mt={8} />
            <SingleLineInput
              label={`Project Milestone ${index + 1}`}
              placeholder="App Launch on November 30"
              value={milestone}
              onChange={(e) => {
                const newProjectMilestone = [...projectMilestones];

                const newProject = { ...newProjectMilestone[index] };
                if (newProject.milestoneIsError) {
                  newProject.milestoneIsError = false;
                }
                newProject.milestone = e.target.value;
                newProjectMilestone[index] = newProject;

                setProjectMilestones(newProjectMilestone);
              }}
              isError={milestoneIsError}
              errorText="Required"
              disabled={readOnly}
              inputRightElement={
                index === 0 ? null : (
                  <Box
                    onClick={() => {
                      const newProjectMilestones = [...projectMilestones];
                      newProjectMilestones.splice(index, 1);
                      setProjectMilestones(newProjectMilestones);
                    }}
                    mt="-78px"
                    ml="-32px"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <Image
                      h="16px"
                      w="15px"
                      src="/ui_icons/delete_red.svg"
                      mr="6px"
                    />
                    <Text fontWeight="700" color="#DF5252" lineHeight={0}>
                      Delete
                    </Text>
                  </Box>
                )
              }
            />

            <Box mt={8} />
            <Flex alignItems="flex-start">
              <Box minW="160px" flex={1}>
                <SingleLineInput
                  label="Expected Milestone Reward"
                  placeholder="100"
                  tooltip="Expected Milestone Reward"
                  value={milestoneReward}
                  onChange={(e) => {
                    const newProjectMilestone = [...projectMilestones];

                    const newProject = { ...newProjectMilestone[index] };
                    if (newProject.milestoneRewardIsError) {
                      newProject.milestoneRewardIsError = false;
                    }
                    newProject.milestoneReward = e.target.value;
                    newProjectMilestone[index] = newProject;

                    setProjectMilestones(newProjectMilestone);
                  }}
                  isError={milestoneRewardIsError}
                  errorText="Required"
                  disabled={readOnly}
                />
              </Box>
              <Box ml={4} mt={5} minW="132px" flex={0}>
                <Dropdown
                  listItemsMinWidth="132px"
                  listItems={[
                    {
                      icon: rewardCurrencyCoin,
                      label: rewardCurrency,
                    },
                  ]}
                />
              </Box>
            </Flex>
          </>
        ),
      )}

      {readOnly ? (
        <Box mt={3} />
      ) : (
        <Text
          fontSize="14px"
          color="#8850EA"
          fontWeight="500"
          lineHeight="20px"
          mt={3}
          cursor="pointer"
          onClick={() => {
            setProjectMilestones([
              ...projectMilestones,
              {
                milestone: '',
                milestoneReward: '',
                milestoneIsError: false,
                milestoneRewardIsError: false,
              },
            ]);
          }}
          w="fit-content"
        >
          <Image
            display="inline-block"
            h={4}
            w={4}
            mr={2}
            mb="-3px"
            src="/ui_icons/plus_circle.svg"
            alt="link"
          />
          Add another milestone
        </Text>
      )}
    </>
  );
}

AboutProject.defaultProps = {
  readOnly: false,
};
export default AboutProject;
