import React, { useState, useEffect } from "react";
import { CardBody, Flex, } from '@chakra-ui/react';

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

// useState() 파라미터로 배열을 사용하는 방법..? -> https://bgeun2.tistory.com/28
function TodoList() {
    const [todoItemList, setTodoItemList] = useState([]);

    useEffect(() => {
        const sampleItemList = [
            {id: 1, text: "Sample Todo 1", isDefaultChecked: true},
            {id: 2, text: "Sample Todo 2", isDefulatChecked: false},
            {id: 3, text: "Sample Todo 3", isDefaultChecked: false},
            {id: 4, text: "Sample Todo 4", isDefaultChecked: false},
        ];
        setTodoItemList(sampleItemList);
    }, []);

    return (
        <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
            <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
                {todoItemList.map((item) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    isDefulatChecked={item.isDefaultChecked}
                    todoItemList={todoItemList}
                    setTodoItemList={setTodoItemList}             
                />
                ))}
            </Flex>
            <TodoForm todoItemList={todoItemList} setTodoItemList={setTodoItemList} />
        </CardBody>
    );

}

export default TodoList;
