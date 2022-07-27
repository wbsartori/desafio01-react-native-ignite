import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
    }
      console.log(data)
    setTasks(oldTasks => [...oldTasks, data]);
  }

  function handleToggleTaskDone(id: number) {
    const idTask = tasks.findIndex((task) => {
       return task.id === id;
    });

    const newTasks = [...tasks];
    newTasks[idTask].done = !newTasks[idTask].done;
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const idTask = tasks.findIndex((task) => {
        return task.id === id;
    });

    const newTasks = tasks.filter((task) => task.id === id);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})