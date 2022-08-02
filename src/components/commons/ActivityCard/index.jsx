import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import ActivityStyle from './style';

export default function ActivityCard({ activity }) {
  return (
    <ActivityStyle.Wrapper>
      <ActivityStyle.Header>
        {activity.tags.map((tag) => (
          <Text
            key={tag}
            variant="smallestException"
            color="yellow"
          >
            #
            {tag}
          </Text>
        ))}
      </ActivityStyle.Header>
      <Text
        variant="subtitle"
        font="fira"
      >
        {activity.title}
      </Text>
      <Text>{activity.description}</Text>
      <ActivityStyle.Links>
        {Boolean(activity.link) && (
          activity.link.map((link) => (
            <ActivityStyle.Link
              key={link.url}
              href={link.url}
              variant="smallestException"
            >
              {link.label}
            </ActivityStyle.Link>
          ))
        )}
      </ActivityStyle.Links>
    </ActivityStyle.Wrapper>
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
