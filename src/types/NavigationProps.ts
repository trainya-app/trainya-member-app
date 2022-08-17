export interface NavigationProps {
  navigation: {
    goBack: () => void;
    navigate: (screenName: string) => void;
  };
}
