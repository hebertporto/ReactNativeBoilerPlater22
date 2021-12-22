import { ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import { colors } from './colors';

const mainCentered = (): ViewStyle => ({
  flex: 1,
  paddingTop: ms(20),
  paddingHorizontal: ms(20),
  alignItems: 'center',
  backgroundColor: colors.background,
});

const containers = {
  mainCentered,
};

export { containers };
