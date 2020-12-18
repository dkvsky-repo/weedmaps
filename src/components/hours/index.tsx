// PART 3
// Implement retailer hours
// Using the provided component Time render the business hours for the whole week

// Include day and times for each day of the week
// Monday: Closed
// Tuesday: 8:00am to 8:00pm

// ✅

import React from 'react';
import styled, { StyledComponent } from 'styled-components';

type TestId = {
  'data-testid': string;
};
type StyleProps = {};
const TimeWrapper: StyledComponent<
  'div',
  any,
  TestId,
  never
> = styled.div<StyleProps>``;
const ClosedWrapper = styled(TimeWrapper)``;
const DayWrapper = styled(TimeWrapper)``;

const BusinessHours = styled.div`
  display: flex;
  flex-direction: row;
`;
const DayOfWeek = styled.span`
  text-transform: capitalize;
`;

function HoursOfBusiness({ businessHours }: { businessHours: any }) {
  function getHoursDetails() {
    let day: string;
    let isClosed: boolean = false;
    let timeOpen: string;
    let timeClose: string;

    let retailerHours: any[] = [];
    Object.entries(businessHours).forEach((item: any) => {
      day = item[0];
      if (item[1]['is_closed']) {
        isClosed = true;
        retailerHours.push({ day, isClosed });
      } else {
        timeOpen = item[1]['open'];
        timeClose = item[1]['close'];
        retailerHours.push({ day, timeOpen, timeClose });
      }
    });
    return retailerHours;
  }

  return (
    <>
      {getHoursDetails().map((item, i) => {
        return item.isClosed ? (
          <BusinessHours key={`${item.day}-${i}`}>
            <DayOfWeek>{item.day}</DayOfWeek>:&nbsp;
            <Closed day={item.day} />
          </BusinessHours>
        ) : (
          <BusinessHours key={`${item.day}-${i}`}>
            <DayOfWeek>{item.day}</DayOfWeek>:&nbsp;
            <Time time={item.timeOpen} day={item.day} frame='open' />
            &nbsp;to&nbsp;
            <Time time={item.timeClose} day={item.day} frame='close' />
          </BusinessHours>
        );
      })}
    </>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default HoursOfBusiness;
type Day =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';
type Frame = 'open' | 'close';

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
