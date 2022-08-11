import { ReactNode } from 'react';
import {
  Label,
  Container,
  ContainerItemBox,
  ContainerItem,
  ItemSeparator,
} from './styles';

interface OptionsContainerProps {
  label: string;
  children: ReactNode;
}

interface OptionsContainerItemProps {
  title: string;
  lastOption?: boolean;
  actionComponent?: JSX.Element;
}

export const OptionsContainer = ({
  label,
  children,
}: OptionsContainerProps) => (
  <>
    <Label>{label}</Label>
    <Container>{children}</Container>
  </>
);

export const OptionsContainerItem = ({
  title,
  lastOption,
  actionComponent,
}: OptionsContainerItemProps) => (
  <>
    <ContainerItemBox>
      <ContainerItem>{title}</ContainerItem>
      <ContainerItem>{actionComponent}</ContainerItem>
    </ContainerItemBox>
    {!lastOption && <ItemSeparator />}
  </>
);
