import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../constants/styling';

const styles = StyleSheet.create({
  root: {},

  labelContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  label: {
    fontSize: 14,
  },

  required: {
    paddingLeft: 2,
    color: '#ff0000',
    fontSize: 16,
    marginTop: -3,
  },

  dropdown: {
    backgroundColor: '#f4f4f4',
    padding: spacing,
    borderRadius: radius,
    fontSize: 16,
  },
});

export default styles;
