import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Text from '../Text';
import * as Activity from './style';

export default function ActivityCard({ activity }) {
  return (
    <Activity.Wrapper>
      <Activity.Header>
        {activity.tags.map((tag) => (
          <Text
            variant="smallestException"
            color="yellow"
          >
            #
            {tag}
          </Text>
        ))}
      </Activity.Header>
      <Text
        variant="subtitle"
        font="fira"
      >
        {activity.title}
      </Text>
      <Text>{activity.description}</Text>
      <Activity.Links>
        {Boolean(activity.link) && (
          activity.link.map((link) => (
            <Link href={link.url}>
              {link.label}
            </Link>
          ))
        )}
      </Activity.Links>
    </Activity.Wrapper>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.arrayOf({
      url: PropTypes.string,
      label: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
