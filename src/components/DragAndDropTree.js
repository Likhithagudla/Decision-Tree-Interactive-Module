import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragAndDropTree = ({ node, onDrop }) => {
  const [, dragRef] = useDrag(() => ({
    type: 'NODE',
    item: { id: node.id },
  }));

  const [, dropRef] = useDrop(() => ({
    accept: 'NODE',
    drop: (item) => onDrop(item.id, node.id),
  }));

  return (
    <div ref={(el) => dragRef(dropRef(el))} className="tree-node">
      {node.label}
    </div>
  );
};

export default DragAndDropTree;
