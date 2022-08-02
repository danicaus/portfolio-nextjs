import React from 'react';
import Section from '../../commons/Section';
import ActivityCard from '../../commons/ActivityCard';

import activitiesJSON from '../../../data/Activities/activities.json';
import ActivitiesStyle from './style';

export default function Activities() {
  const { activities } = activitiesJSON;

  return (
    <Section id="activities" sectionName="atividades" color="yellow">
      <ActivitiesStyle>
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            activity={activity}
          />
        ))}
      </ActivitiesStyle>
    </Section>
  );
}
