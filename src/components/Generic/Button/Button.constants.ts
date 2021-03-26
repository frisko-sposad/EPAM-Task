import { StyledComponent } from 'styled-components';
import { BtnAction, SearchBtn, SearchByBtn, SortByBtn } from './Button.styled';
import VariantBtn from './Button.types';

const buttonVariants: Record<VariantBtn, StyledComponent<'button', never, BtnAction>> = {
  [VariantBtn.Search]: SearchBtn,
  [VariantBtn.SearchBy]: SearchByBtn,
  [VariantBtn.SortBy]: SortByBtn,
};

export default buttonVariants;
