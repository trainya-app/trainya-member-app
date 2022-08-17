import {
  Label,
  Container,
  ContainerItemBox,
  ContainerItem,
  ItemSeparator,
} from './styles';

interface OptionsContainerProps {
  label: string;
  children: JSX.Element | JSX.Element[];
}

interface OptionsContainerItemProps {
  title: string;
  onPress?: () => void;
  isLastOption?: boolean;
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
  onPress,
  isLastOption,
  actionComponent,
}: OptionsContainerItemProps) => (
  <>
    <ContainerItemBox onPress={onPress}>
      <ContainerItem>{title}</ContainerItem>
      {actionComponent}
    </ContainerItemBox>
    {!isLastOption && <ItemSeparator />}
  </>
);
