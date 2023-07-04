import { DashboardCardTypes } from '@/types';
import { FC, ReactNode } from 'react';

import { Briefcase, UserCog, Users, Wrench } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardIconWrapper,
  CardTitle,
} from './styles';

const icons: { [key: string]: ReactNode } = {
  briefcase: <Briefcase />,
  users: <Users />,
  'user-cog': <UserCog />,
  wrench: <Wrench />,
};

const DashboardCard: FC<DashboardCardTypes> = ({
  icon,
  title,
  description,
  toPage,
}) => {
  return (
    <Card href={toPage}>
      <CardHeader>
        <CardIconWrapper>{icons[icon]}</CardIconWrapper>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default DashboardCard;
