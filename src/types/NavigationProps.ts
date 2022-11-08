export interface NavigationProps {
  navigation: {
    goBack: () => void;
    navigate: (screenName: string, params?: object) => void;
    replace: (screenName: string) => void;
  };
}
