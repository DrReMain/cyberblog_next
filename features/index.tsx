import React from 'react';

export interface IProps {
    name: string
}

const Index: React.FC<IProps> = ({name}) => {
    return (
        <h1>{name}</h1>
    );
};

export default Index;
