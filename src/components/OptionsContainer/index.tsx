import { ReactNode } from 'react';
import { Label, Container, ContainerItem, ItemSeparator } from './styles';

interface OptionsContainerProps {
  label: string;
  children: ReactNode;
}

interface OptionsContainerItemProps {
  title: string;
  lastOption?: boolean;
}

export const OptionsContainer = ({
  label,
  children,
}: OptionsContainerProps) => {
  const a = 'a';
  return (
    <>
      <Label>{label}</Label>
      <Container>{children}</Container>
    </>
  );
};

export const OptionsContainerItem = ({
  title,
  lastOption,
}: OptionsContainerItemProps) => (
  <>
    <ContainerItem>{title}</ContainerItem>
    {!lastOption && <ItemSeparator />}
  </>
);
