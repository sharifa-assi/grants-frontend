import {
  Flex, Grid, GridItem, Box, Text,
} from '@chakra-ui/react';
import React from 'react';
import Badge from '../../../ui/badge';
import SingleLineInput from '../../../ui/forms/singleLineInput';

function ApplicantDetails({
  detailsRequired,
  toggleDetailsRequired,

  extraField,
  setExtraField,

  extraFieldDetails,
  setExtraFieldDetails,

  extraFieldError,
  setExtraFieldError,

  multipleMilestones,
  setMultipleMilestones,
}: {
  detailsRequired: any[];
  toggleDetailsRequired: (index: number) => void;

  extraField: boolean;
  setExtraField: (extraField: boolean) => void;

  extraFieldDetails: string;
  setExtraFieldDetails: (extraFieldDetails: string) => void;

  extraFieldError: boolean;
  setExtraFieldError: (extraFieldError: boolean) => void;

  multipleMilestones: boolean;
  setMultipleMilestones: (multipleMilestones: boolean) => void;
}) {
  const [milestoneSelectOptionIsVisible, setMilestoneSelectOptionIsVisible] = React.useState(false);
  return (
    <Flex py={0} direction="column">
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap="18px"
        fontWeight="bold"
      >
        {detailsRequired.map((detail, index) => {
          const {
            title, required, tooltip,
          } = detail as any;
          return (
            <GridItem colSpan={1}>
              <Badge
                isActive={required}
                onClick={() => toggleDetailsRequired(index)}
                label={title}
                tooltip={tooltip}
              />
            </GridItem>
          );
        })}
        <GridItem colSpan={1}>
          <Badge
            isActive={extraField}
            onClick={() => setExtraField(!extraField)}
            label="Other Information"
            tooltip="Add extra information about the applicant"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Badge
            isActive={milestoneSelectOptionIsVisible}
            onClick={() => {
              setMilestoneSelectOptionIsVisible(!milestoneSelectOptionIsVisible);
              setMultipleMilestones(false);
            }}
            label="Milestones"
            tooltip="Add milestones for the applicant to complete"
          />
        </GridItem>
      </Grid>

      <Box mt={6} />

      {extraField ? (
        <>
          <SingleLineInput
            label="Field Name"
            placeholder="Sample Field"
            isError={extraFieldError}
            errorText="Required"
            value={extraFieldDetails}
            onChange={(e) => {
              setExtraFieldError(false);
              setExtraFieldDetails(e.target.value);
            }}
            subtext="Letters and spaces are allowed."
          />
          <Box mt={8} />
        </>
      ) : null}

      {milestoneSelectOptionIsVisible && (
        <>
          <Flex flex={1} direction="column">
            <Text lineHeight="20px" fontWeight="bold">
              Milestones
            </Text>
          </Flex>
          <Flex mt={1} maxW="420px">
            <Badge
              isActive={!multipleMilestones}
              onClick={() => setMultipleMilestones(false)}
              label="Single Milestone"
              inActiveVariant="solid"
              variant="buttonGroupStart"
            />
            <Badge
              isActive={multipleMilestones}
              onClick={() => setMultipleMilestones(true)}
              label="Multiple Milestones"
              inActiveVariant="solid"
              variant="buttonGroupEnd"
            />
          </Flex>
        </>
      )}
    </Flex>

  );
}

export default ApplicantDetails;
