import { TextStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

type BodyTextType = 'regular' | 'medium';

const getFontFamily = (weight: BodyTextType) => {
  switch (weight) {
    case 'medium':
      return undefined;
    case 'regular':
    default:
      return undefined;
  }
};

const title = (): TextStyle => ({
  fontSize: ms(34),
  lineHeight: ms(34),
  letterSpacing: ms(0.02 * 34),
  fontFamily: undefined,
});

const subtitle = (): TextStyle => ({
  fontSize: ms(21),
  lineHeight: ms(1.25 * 21),
  letterSpacing: ms(0.02 * 21),
  fontFamily: undefined,
});

const body = (weight: BodyTextType = 'regular'): TextStyle => ({
  fontSize: ms(16),
  lineHeight: ms(19),
  fontFamily: getFontFamily(weight),
});

const caption = (weight: BodyTextType = 'regular'): TextStyle => ({
  fontSize: ms(13),
  lineHeight: ms(18),
  fontFamily: getFontFamily(weight),
});

const text = {
  title,
  subtitle,
  body,
  caption,
};

export { text };
