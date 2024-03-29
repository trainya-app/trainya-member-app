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
  icon?: JSX.Element;
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
  icon,
  isLastOption,
  actionComponent,
}: OptionsContainerItemProps) => (
  <>
    <ContainerItemBox
      activeOpacity={actionComponent ? 1 : 0.6}
      onPress={onPress}
    >
      {icon}
      <ContainerItem>{title}</ContainerItem>
      {actionComponent}
    </ContainerItemBox>
    {!isLastOption && <ItemSeparator />}
  </>
);
