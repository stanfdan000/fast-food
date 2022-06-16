import Instruction from './Instructions';

export default function InstructionList({ instructions }){
  return <>
    {
      instructions.map((instruction, i) => <li key={`${instruction}${i}`}>
        <Instruction instruction={instruction} />
      </li>)
    }
  </>;
}