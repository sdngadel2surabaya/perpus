import React from 'react';
import { OrgNodeData, Person } from '../types';

interface OrgNodeProps {
  node: OrgNodeData;
  isRoot?: boolean;
}

const PersonCard: React.FC<{ person: Person }> = ({ person }) => (
  <div className="bg-blue-100 p-2 rounded-md text-center text-sm shadow-sm">
    <p className="font-semibold text-blue-800">{person.name}</p>
    <p className="text-blue-600">{person.role}</p>
  </div>
);

const OrgNode: React.FC<OrgNodeProps> = ({ node, isRoot = false }) => {
  return (
    <div className={`flex flex-col items-center ${!isRoot ? 'pt-8' : ''}`}>
      {/* Node Content Card */}
      <div className="bg-white shadow-lg rounded-xl p-4 w-64 min-w-[200px] text-center border-2 border-blue-500
                      transform transition-transform duration-300 hover:scale-105
                      max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg
                      mx-2">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{node.title}</h3>
        <div className="space-y-2">
          {node.people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>

      {/* Children Container and Connectors */}
      {node.children && node.children.length > 0 && (
        <div className="relative mt-8 flex justify-center w-full">
          {/* Vertical line down from parent card */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-8 w-0.5 bg-blue-400"></div>

          {/* Horizontal line connecting all children */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-blue-400"></div>

          {/* Children nodes */}
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-8 pt-8">
            {node.children.map((child, index) => (
              <div key={child.id} className="relative flex flex-col items-center">
                {/* Vertical line up from child card to horizontal connector */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-8 w-0.5 bg-blue-400"></div>
                <OrgNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgNode;