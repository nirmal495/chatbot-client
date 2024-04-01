import React from 'react';

const Leaf = (props) => {
    const { attributes, leaf } = props;
    let { children } = props;
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }

    if (leaf.code) {
        children = <code>{children}</code>;
    }

    if (leaf.italic) {
        children = <em>{children}</em>;
    }

    if (leaf.underline) {
        children = <u>{children}</u>;
    }

    if (leaf.color) {
        children = <span style={{ color: leaf.color }}>{children}</span>;
    }

    return <span {...attributes}>{children}</span>;
};

export default Leaf;
