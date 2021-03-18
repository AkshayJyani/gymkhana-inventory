import React, { useContext, createContext } from 'react';

import { createTodoStore } from '../store_mobx/store';
import { useLocalObservable } from 'mobx-react';

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const todoStore = useLocalObservable(createTodoStore);
    return <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>;
};

export const useTodoStore = () => useContext(TodoContext);
