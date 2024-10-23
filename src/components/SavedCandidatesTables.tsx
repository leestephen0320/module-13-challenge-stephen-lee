import type Candidate from '../interfaces/Candidate.interface';
import CandidateTable from '../components/CandidateTable';

interface potentialCandidates {
  potentialCandidates: Candidate[],
  removeFromStorage?: void,
}
// const SavedCandidatesTable = () => {
const SavedCandidatesTable = (props:potentialCandidates) => {
  return (
    <>
        {props.potentialCandidates.map((candidate) => (
        <CandidateTable
            key={candidate.login}
            potentialCandidate={candidate}
        />
        ))}
    </>
  );
};

export default SavedCandidatesTable;
