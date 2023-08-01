import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const AssignMembers = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [papers, setPapers] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState('');

  useEffect(() => {
    // Fetch the list of members with the role 'Actor/Actriu' from the backend
    fetchMembersWithRole();
  }, []);

  const fetchMembersWithRole = async () => {
    try {
      const response = await axios.get(`${API_URL}/membres?funcio=Actor/Actriu`);
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Define fetchPapers as a useCallback to prevent unnecessary re-renders
  const fetchPapers = useCallback(async () => {
    try {
      if (selectedGroup === 'principals' || selectedGroup === 'altres') {
        const response = await axios.get(`${API_URL}/${selectedGroup}`);
        setPapers(response.data);
      } else {
        setPapers([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [selectedGroup]);

  useEffect(() => {
    // Fetch the papers from the backend when the group selection changes
    fetchPapers();
  }, [fetchPapers]); // Include 'fetchPapers' as a dependency

  const handleAssignMember = async () => {
    try {
      const data = { membreId: selectedMember };
      if (selectedGroup === 'principals' || selectedGroup === 'altres') {
        data.paper = selectedPaper;
      }
      await axios.post(`${API_URL}/${selectedGroup}`, data);
      alert('Member assigned to the group successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to assign member to the group.');
    }
  };

  return (
    <div>
      <h1>Assign Member to Group</h1>
      <label htmlFor="member">Select a member:</label>
      <select
        id="member"
        value={selectedMember}
        onChange={(e) => setSelectedMember(e.target.value)}
      >
        <option value="">-- Select a member --</option>
        {members.map((member) => (
          <option key={member.personaId} value={member.personaId}>
            {member.personaId.nom} {member.personaId.cognom1} {member.personaId.cognom2}
          </option>
        ))}
      </select>

      <label htmlFor="group">Select a group:</label>
      <select
        id="group"
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        <option value="">-- Select a group --</option>
        <option value="principals">Principals</option>
        <option value="pastors">Pastors</option>
        <option value="dimonis">Dimonis</option>
        <option value="angels">Angels</option>
        <option value="altres">Altres</option>
      </select>

      {selectedGroup === 'principals' || selectedGroup === 'altres' ? (
        <div>
          <label htmlFor="paper">Select the paper:</label>
          <select
            id="paper"
            value={selectedPaper}
            onChange={(e) => setSelectedPaper(e.target.value)}
          >
            <option value="">-- Select a paper --</option>
            {papers.map((paper) => (
              <option key={paper._id} value={paper.paper}>
                {paper.paper}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <button onClick={handleAssignMember}>Assign Member</button>
    </div>
  );
};

export default AssignMembers;
