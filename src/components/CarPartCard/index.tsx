import { FC } from 'react';
import { CarPartCardTypes } from '@/types';
import {
  ActionsWrapper,
  IconWrapper,
  PartCard,
  PriceWrapper,
  TitleWrapper,
} from './styles';
import { MoreVertical, Wrench } from 'lucide-react';

const CarPartCard: FC<CarPartCardTypes> = ({ id, name, price }) => {
  return (
    <PartCard>
      <IconWrapper>
        <Wrench />
      </IconWrapper>

      <TitleWrapper>{name}</TitleWrapper>
      <PriceWrapper>
        R$ {price.toFixed(2).toString().replace('.', ',')}
      </PriceWrapper>
      <ActionsWrapper>
        <MoreVertical />
      </ActionsWrapper>
    </PartCard>
  );
};

export default CarPartCard;
