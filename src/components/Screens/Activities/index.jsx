import React from 'react';
import Section from '../../commons/Section';
import ActivityCard from '../../commons/ActivityCard';
import ActiviesWrapper from './style';
import activitiesJSON from '../../../data/Activities/activities.json';

export default function Activities() {
  const { activities } = activitiesJSON;

  return (
    <Section id="activities" sectionName="atividades">
      <ActiviesWrapper>
        {activities.map((activity) => (
          <ActivityCard activity={activity} />
        ))}
      </ActiviesWrapper>
    </Section>
  );
}
