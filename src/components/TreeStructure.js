import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

const TreeStructure = ({ nodes, edges }) => (
  <ReactFlow nodes={nodes} edges={edges}>
    <MiniMap />
    <Controls />
  </ReactFlow>
);

export default TreeStructure;
