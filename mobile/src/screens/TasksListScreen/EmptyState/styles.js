import { StyleSheet } from 'react-native';
import { centered, spacing } from '../../../constants/styling';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    ...centered,
  },

  message: {
    paddingHorizontal: 4 * spacing,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
