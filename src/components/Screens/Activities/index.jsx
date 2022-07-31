import React from 'react';
import Section from '../../commons/Section';
import ActivityCard from '../../commons/ActivityCard';
import ActivitiesWrapper from './style';
import activitiesJSON from '../../../data/Activities/activities.json';

export default function Activities() {
  const { activities } = activitiesJSON;

  return (
    <Section id="activities" sectionName="atividades">
      <ActivitiesWrapper>
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            activity={activity}
          />
        ))}
      </ActivitiesWrapper>
    </Section>
  );
}
