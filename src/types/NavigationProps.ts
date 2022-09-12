export interface NavigationProps {
  navigation: {
    goBack: () => void;
    navigate: (screenName: string, params?: object) => void;
  };
}
