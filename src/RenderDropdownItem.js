export default function RenderDropdownItem({ item, i }){
  return <option value={`${i + 1}`}>{item}</option>;
}