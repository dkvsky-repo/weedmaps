// PART 2
// Implement a star rating

// Given a rating X, render the star rating. Be sure to wrap the corresponding
// star within the provided components.

// Using EmptyStar, HalfStar, and FullStar wrappers, pass your star component to
// the corresponding wrappers

// We expect stars to render as such:
// 0.1 = 5 empty stars
// 4.25 = 4 full stars, 1 half star
// 4.24 = 4 full stars, 1 empty star
// 4.74 = 4 full stars, 1 half star
// 4.75 = 5 full stars
import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import StarIcon from './starIcon';

type StarProps = {
  children?: any;
};
type RatingProps = {
  rating: number;
};
type StyleProps = {};
type StarsProps = {
  rating: number;
};
type TestId = {
  'data-testid': string;
};
const StarWrapper: StyledComponent<
  'div',
  any,
  TestId,
  never
> = styled.div<StyleProps>``;
const RatingWrapper = styled(StarWrapper)``;

const Star = styled.div`
  width: 16px;
  height: 16px;
`;

function Stars({ rating }: StarsProps) {
  function calcStarRating(ratingValue: number): any[] {
    let stars: any[] = Array(5).fill(null);
    let partialStars = parseInt(ratingValue.toFixed(2).split('.')[1]);
    let fullStars = parseInt(ratingValue.toFixed(2).split('.')[0]);

    // TODO: Change 'map' because value is not used.
    stars.map((val, i) => {
      if (fullStars > 0) {
        stars[i] = (
          <FullStar
            key={i}
            children={
              <Star>
                <StarIcon type='full' />
              </Star>
            }
          />
        );
        fullStars--;
      } else if (fullStars === 0) {
        if (partialStars >= 75) {
          stars[i] = (
            <FullStar
              key={i}
              children={
                <Star>
                  <StarIcon type='full' />
                </Star>
              }
            />
          );
          partialStars = 0;
        } else if (partialStars >= 25 && partialStars <= 74) {
          stars[i] = (
            <HalfStar
              key={i}
              children={
                <Star>
                  <StarIcon type='half' />
                </Star>
              }
            />
          );
          partialStars = 0;
        } else {
          stars[i] = (
            <EmptyStar
              key={i}
              children={
                <Star>
                  <StarIcon type='empty' />
                </Star>
              }
            />
          );
        }
      }
    });
    return stars;
  }

  return (
    <>
      {calcStarRating(rating).map((item) => item)}
      <Rating rating={rating} />
    </>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default Stars;

function EmptyStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid='empty-star' {...rest}>
      {children}
    </StarWrapper>
  );
}

function HalfStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid='half-star' {...rest}>
      {children}
    </StarWrapper>
  );
}

function FullStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid='full-star' {...rest}>
      {children}
    </StarWrapper>
  );
}

function Rating({ rating, ...rest }: RatingProps) {
  return (
    <RatingWrapper data-testid='rating' {...rest}>
      {rating.toFixed(1)}
    </RatingWrapper>
  );
}
