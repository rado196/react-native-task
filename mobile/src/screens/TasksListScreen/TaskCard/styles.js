import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../../constants/styling';

const styles = StyleSheet.create({
  root: {
    borderRadius: radius,
    padding: spacing,
    backgroundColor: '#79bdff',
  },

  completed: {
    opacity: 0.5,
  },

  titleBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: spacing / 2,
  },

  highBlock: {
    backgroundColor: '#fe1568',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    height: 20,
  },

  high: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  description: {},
});

export default styles;
