import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Text from '../Text';

export default function ActivityCard({ activity }) {
  return (
    <div>
      <Text variant="subtitle">{activity.title}</Text>
      <Text>{activity.description}</Text>
      {Boolean(activity.link) && (
        activity.link.map((link) => (
          <Link href={link.url}>
            {link.label}
          </Link>
        ))
      )}
      {Boolean(activity.tags) && (
        activity.tags.map((tag) => (
          <Text variant="smallestException">
            #
            {tag}
          </Text>
        ))
      )}
    </div>
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
