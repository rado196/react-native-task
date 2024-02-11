import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View } from 'react-native';
import useLoadTasks from '../../../hooks/useLoadTasks';
import Dropdown from '../../../components/Dropdown';

function OrderBy() {
  const { loadTasks } = useLoadTasks();

  const [orderBy, setOrderBy] = useState('createdAt');
  useEffect(() => {
    loadTasks(orderBy);
  }, [orderBy]);

  return (
    <View style={styles.root}>
      <Dropdown
      label="Sort by"
        value={orderBy}
        onValueChange={setOrderBy}
        items={[
          { value: 'createdAt', label: 'Recently created' },
          { value: 'priority', label: 'Highest priority' },
        ]}
      />
    </View>
  );
}

export default OrderBy;
