import './App.css';
import React from 'react';
import { EditForm } from './Form.jsx';

const App = () => {
  const handleSubmit = (entity) => {
    console.log('Form Submitted:', entity);
  };

  const editEntries = [
    {
      attribute: 'name',
      attributeName: 'Name',
      type: 'Text',
      isRequired: true,
    },
    {
      attribute: 'description',
      attributeName: 'Description',
      type: 'TextArea',
      isRequired: false,
      characterCount: 500,
    },
    {
      attribute: 'tags',
      attributeName: 'Tags',
      type: 'PillList',  // New PillList type entry
      isRequired: false,
      
    },
  ];

  const entityObj = { 
    name: 'John Doe', 
    description: '', 
    tags: ['React', 'Tailwind', 'JavaScript'],
  };

  return (
    <EditForm
      title="Edit Form Example"
      description="Fill out the form below."
      editEntries={editEntries}
      entityObj={entityObj}
      onSubmitSuccess={handleSubmit}
    />
  );
};

export default App;
