// PART 3
// Implement retailer hours
// Using the provided component Time render the business hours for the whole week

// Include day and times for each day of the week
// Monday: Closed
// Tuesday: 8:00am to 8:00pm

import React from "react";
import styled, { StyledComponent } from "styled-components";

type TestId = {
  "data-testid": string;
};
type StyleProps = {};
const TimeWrapper: StyledComponent<"div", any, TestId, never> = styled.div<
  StyleProps
>``;
const ClosedWrapper = styled(TimeWrapper)``;
const DayWrapper = styled(TimeWrapper)``;

function HoursOfBusiness({ businessHours }: { businessHours: any }) {
  return (
    <>
      <Closed day="monday" />
      <Time time="8:00am" day="sunday" frame="open" />
      <Time time="8:00pm" day="sunday" frame="close" />
    </>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default HoursOfBusiness;
type Day =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";
type Frame = "open" | "close";

function Day({ day }: { day: Day }) {
  return <DayWrapper data-testid={day}>{day}</DayWrapper>;
}

// use this when is_closed: true is returned
function Closed({ day }: { day: Day }) {
  return <ClosedWrapper data-testid={`${day}-closed`}>Closed</ClosedWrapper>;
}

function Time({ time, day, frame }: { time?: string; day: Day; frame: Frame }) {
  return <TimeWrapper data-testid={`${day}-${frame}`}>{time}</TimeWrapper>;
}
