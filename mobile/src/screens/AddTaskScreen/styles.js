import { StyleSheet } from 'react-native';
import { spacing } from '../../constants/styling';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: spacing,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  section: {
    padding: spacing,
  },

  lastSection: {
    marginTop: 'auto',
  },
});

export default styles;
