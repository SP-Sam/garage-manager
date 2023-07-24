import { FC, useEffect, useRef, useState } from 'react';

import { MoreVertical, Pencil, Trash2, Wrench } from 'lucide-react';
import autoAnimate from '@formkit/auto-animate';

import { CarPartCardTypes } from '@/types';

import {
  ActionItem,
  ActionList,
  ActionsWrapper,
  IconWrapper,
  PartCard,
  PriceWrapper,
  TitleWrapper,
} from './styles';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { deleteCarPart, fetchCarParts } from '@/store/carParts';

const CarPartCard: FC<CarPartCardTypes> = ({ id, name, price }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const parent = useRef(null);
  let menuRef = useRef<any>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 150 });
  }, [parent]);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOptionsOpen(false);
      }
    };

    document.addEventListener('mouseup', handler);
  });

  const onDelete = () => {
    dispatch(deleteCarPart(id));
  };

  return (
    <PartCard ref={parent}>
      <IconWrapper>
        <Wrench />
      </IconWrapper>

      <TitleWrapper>{name}</TitleWrapper>
      <PriceWrapper>
        R$ {price.toFixed(2).toString().replace('.', ',')}
      </PriceWrapper>

      <ActionsWrapper
        onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        className={isOptionsOpen ? 'active' : ''}
      >
        <MoreVertical />
      </ActionsWrapper>

      {isOptionsOpen && (
        <ActionList ref={menuRef}>
          <ActionItem>
            <Pencil /> Editar
          </ActionItem>

          <ActionItem className="delete" onClick={onDelete}>
            <Trash2 /> Excluir
          </ActionItem>
        </ActionList>
      )}
    </PartCard>
  );
};

export default CarPartCard;
