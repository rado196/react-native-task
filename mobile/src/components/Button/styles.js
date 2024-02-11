import { StyleSheet } from 'react-native';
import { centered, spacing, radius } from '../../constants/styling';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#62bd5f',
    padding: spacing,
    borderRadius: radius,
    ...centered,
  },

  text: {
    fontWeight: '700',
    fontSize: 16,
    color: '#ffffff',
  },
});

export default styles;
